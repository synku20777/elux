import tokens from '../tokens/tokens.json';

const primitiveSource = tokens['Color Primitives/Mode 1'];
const defaultSemanticSource = tokens['Color Semantic/Default'];

const TOKEN_NAME_ALIASES = {
  accent: '--accent',
  'accent-foreground': '--accent-foreground',
  border: '--border',
  'border-subtle': '--border-subtle',
  ring: '--ring',
  destructive: '--destructive',
  'destructive-fg': '--destructive-fg',
  promo: '--promo',
  'promo-fg': '--promo-fg',
  rating: '--rating',
  'empty-rating': '--empty-rating',
  info: '--info',
  'info-fg': '--info-fg',
  Positive: '--positive',
  'Positive-fg': '--positive-fg',
  Hrange: '--hrange',
  'Hrange-fg': '--hrange-fg',
};

function isColorToken(node) {
  return Boolean(node) && typeof node === 'object' && node.$type === 'color';
}

function sortByNumericStep([left], [right]) {
  return Number.parseInt(left, 10) - Number.parseInt(right, 10);
}

function resolvePath(root, path) {
  return path.reduce((node, key) => node?.[key], root);
}

function stripReference(reference) {
  return reference.slice(1, -1);
}

function formatReference(reference) {
  return stripReference(reference).split('.').join('/');
}

function normalizeTokenName(rawName) {
  if (rawName.startsWith('--')) {
    return rawName;
  }

  return TOKEN_NAME_ALIASES[rawName] ?? `--${rawName.toLowerCase()}`;
}

function resolveColorValue(value, seen = []) {
  if (typeof value !== 'string') {
    return null;
  }

  const trimmed = value.trim();

  if (/^#[0-9a-f]{6}$/i.test(trimmed)) {
    return trimmed.toLowerCase();
  }

  if (!(trimmed.startsWith('{') && trimmed.endsWith('}'))) {
    return null;
  }

  const reference = stripReference(trimmed);

  if (seen.includes(reference)) {
    return null;
  }

  const path = reference.split('.');
  const node = resolvePath(primitiveSource, path) ?? resolvePath(defaultSemanticSource, path);

  if (!isColorToken(node)) {
    return null;
  }

  return resolveColorValue(node.$value, [...seen, reference]);
}

function buildPrimitivePalette(groupName, variablePrefix) {
  return Object.entries(primitiveSource[groupName])
    .filter(([, node]) => isColorToken(node))
    .sort(sortByNumericStep)
    .map(([step, node]) => ({
      id: `${groupName.toLowerCase()}-${step}`,
      label: `${groupName}/${step}`,
      value: resolveColorValue(node.$value),
      varName: `$${variablePrefix}-${step}`,
    }));
}

function buildSemanticPrimitivePalette() {
  return Object.entries(primitiveSource.Semantic)
    .filter(([groupName]) => groupName !== 'Hrange')
    .flatMap(([groupName, group]) =>
      Object.entries(group)
        .filter(([, node]) => isColorToken(node))
        .sort(sortByNumericStep)
        .map(([step, node]) => ({
          id: `${groupName.toLowerCase()}-${step}`,
          label: `${groupName}/${step}`,
          value: resolveColorValue(node.$value),
        }))
    );
}

function collectSemanticEntries(node, parents = []) {
  return Object.entries(node).flatMap(([key, value]) => {
    if (isColorToken(value)) {
      return [{
        id: [...parents, key].join('.'),
        rawName: key,
        token: normalizeTokenName(key),
        ref: formatReference(value.$value),
        value: resolveColorValue(value.$value),
      }];
    }

    if (value && typeof value === 'object' && !Array.isArray(value)) {
      return collectSemanticEntries(value, [...parents, key]);
    }

    return [];
  });
}

const semanticEntries = collectSemanticEntries(defaultSemanticSource);
const semanticTokenMap = new Map(semanticEntries.map((entry) => [entry.token, entry]));

function getSemanticToken(token) {
  const entry = semanticTokenMap.get(token);

  if (!entry) {
    throw new Error(`Unknown semantic color token: ${token}`);
  }

  return entry;
}

function hexToRgb(hex) {
  const normalized = hex.replace('#', '');

  return [
    Number.parseInt(normalized.slice(0, 2), 16),
    Number.parseInt(normalized.slice(2, 4), 16),
    Number.parseInt(normalized.slice(4, 6), 16),
  ];
}

function toLinear(channel) {
  const normalized = channel / 255;

  return normalized <= 0.03928
    ? normalized / 12.92
    : ((normalized + 0.055) / 1.055) ** 2.4;
}

function relativeLuminance(hex) {
  const [red, green, blue] = hexToRgb(hex).map(toLinear);
  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
}

function getContrastRatio(foregroundHex, backgroundHex) {
  const first = relativeLuminance(foregroundHex);
  const second = relativeLuminance(backgroundHex);
  const lighter = Math.max(first, second);
  const darker = Math.min(first, second);

  return (lighter + 0.05) / (darker + 0.05);
}

function classifyContrast(kind, contrast) {
  if (kind === 'text') {
    if (contrast >= 4.5) {
      return { target: '4.5:1', status: 'Pass AA', tone: 'pass' };
    }

    if (contrast >= 3) {
      return { target: '4.5:1', status: 'Large text only', tone: 'warn' };
    }

    return { target: '4.5:1', status: 'Fail', tone: 'fail' };
  }

  if (kind === 'boundary') {
    if (contrast >= 3) {
      return { target: '3:1', status: 'Pass boundary', tone: 'pass' };
    }

    return { target: '3:1', status: 'Fail boundary', tone: 'fail' };
  }

  return { target: 'Decorative only', status: 'Decorative only', tone: 'neutral' };
}

const semanticGroupDefinitions = [
  { group: 'Primary', tokens: ['--primary', '--primary-hover', '--primary-foreground'] },
  { group: 'Secondary', tokens: ['--secondary', '--secondary-hover', '--secondary-foreground'] },
  {
    group: 'Base',
    tokens: [
      '--background',
      '--foreground',
      '--neutral-foreground',
      '--card',
      '--muted-foreground',
      '--muted-foreground-card',
      '--muted-foreground-bg',
    ],
  },
  { group: 'Surface', tokens: ['--surface-muted', '--surface-raised', '--surface-sunk'] },
  { group: 'Border', tokens: ['--border', '--border-subtle', '--ring'] },
  { group: 'Accent', tokens: ['--accent', '--accent-foreground'] },
  { group: 'Destructive', tokens: ['--destructive', '--destructive-fg'] },
  { group: 'Positive', tokens: ['--positive', '--positive-fg'] },
  { group: 'Promo', tokens: ['--promo', '--promo-fg'] },
  { group: 'Info', tokens: ['--info', '--info-fg'] },
  { group: 'Rating', tokens: ['--rating', '--empty-rating'] },
];

const comboDefinitions = [
  {
    id: 'foreground-on-background',
    label: 'Foreground on background',
    foregroundToken: '--foreground',
    backgroundToken: '--background',
    kind: 'text',
    usage: 'Primary page copy and headings',
    note: 'Baseline reading pair for the default page surface.',
    preview: 'text',
  },
  {
    id: 'foreground-on-card',
    label: 'Foreground on card',
    foregroundToken: '--foreground',
    backgroundToken: '--card',
    kind: 'text',
    usage: 'Primary text on cards and panels',
    note: 'Safe default for content inside white surfaces.',
    preview: 'text',
  },
  {
    id: 'muted-foreground-bg-on-background',
    label: 'Muted foreground on background',
    foregroundToken: '--muted-foreground-bg',
    backgroundToken: '--background',
    kind: 'text',
    usage: 'Supporting copy on page background',
    note: 'Now clears AA in the default theme, while still reading as secondary copy.',
    preview: 'text',
  },
  {
    id: 'muted-foreground-card-on-card',
    label: 'Muted foreground on card',
    foregroundToken: '--muted-foreground-card',
    backgroundToken: '--card',
    kind: 'text',
    usage: 'Supporting copy on white cards',
    note: 'Also clears AA, but should stay secondary by hierarchy rather than contrast.',
    preview: 'text',
  },
  {
    id: 'primary-foreground-on-primary',
    label: 'Primary foreground on primary',
    foregroundToken: '--primary-foreground',
    backgroundToken: '--primary',
    kind: 'text',
    usage: 'Primary buttons and active fills',
    note: 'The default CTA pair clears AA comfortably.',
    preview: 'text',
  },
  {
    id: 'secondary-foreground-on-secondary',
    label: 'Secondary foreground on secondary',
    foregroundToken: '--secondary-foreground',
    backgroundToken: '--secondary',
    kind: 'text',
    usage: 'Secondary buttons and low-emphasis fills',
    note: 'The light blue secondary fill remains text-safe in default mode.',
    preview: 'text',
  },
  {
    id: 'accent-foreground-on-accent',
    label: 'Accent foreground on accent',
    foregroundToken: '--accent-foreground',
    backgroundToken: '--accent',
    kind: 'text',
    usage: 'Neutral chips and hover fills',
    note: 'Safe neutral UI pair for low-emphasis controls.',
    preview: 'text',
  },
  {
    id: 'destructive-fg-on-destructive',
    label: 'Destructive foreground on destructive',
    foregroundToken: '--destructive-fg',
    backgroundToken: '--destructive',
    kind: 'text',
    usage: 'Error buttons and destructive callouts',
    note: 'Safe for text-bearing destructive controls.',
    preview: 'text',
  },
  {
    id: 'promo-fg-on-promo',
    label: 'Promo foreground on promo',
    foregroundToken: '--promo-fg',
    backgroundToken: '--promo',
    kind: 'text',
    usage: 'Promo tags and sale messaging',
    note: 'Works for the current promo tag treatment.',
    preview: 'text',
  },
  {
    id: 'info-fg-on-info',
    label: 'Info foreground on info',
    foregroundToken: '--info-fg',
    backgroundToken: '--info',
    kind: 'text',
    usage: 'Informational tags and badges',
    note: 'The info pair is text-safe in the default theme.',
    preview: 'text',
  },
  {
    id: 'positive-fg-on-positive',
    label: 'Positive foreground on positive',
    foregroundToken: '--positive-fg',
    backgroundToken: '--positive',
    kind: 'text',
    usage: 'Success tags and positive chips',
    note: 'Clears large-text contrast but still misses normal-text AA.',
    preview: 'text',
  },
  {
    id: 'ring-on-background',
    label: 'Ring on background',
    foregroundToken: '--ring',
    backgroundToken: '--background',
    kind: 'boundary',
    usage: 'Focus ring on page background',
    note: 'Good contrast for focus treatment against the page surface.',
    preview: 'ring',
  },
  {
    id: 'border-on-background',
    label: 'Border on background',
    foregroundToken: '--border',
    backgroundToken: '--background',
    kind: 'boundary',
    usage: 'Dividers and low-contrast boundaries on the page',
    note: 'Fails the 3:1 boundary target. Treat it as a soft divider only.',
    preview: 'boundary',
  },
  {
    id: 'border-on-card',
    label: 'Border on card',
    foregroundToken: '--border',
    backgroundToken: '--card',
    kind: 'boundary',
    usage: 'Dividers and borders on white cards',
    note: 'Also below 3:1, so it should not be the only boundary cue.',
    preview: 'boundary',
  },
  {
    id: 'rating-on-card',
    label: 'Rating on card',
    foregroundToken: '--rating',
    backgroundToken: '--card',
    kind: 'decorative',
    usage: 'Filled rating stars',
    note: 'Decorative only. Do not treat this as a text-safe foreground pair.',
    preview: 'decorative',
  },
  {
    id: 'empty-rating-on-card',
    label: 'Empty rating on card',
    foregroundToken: '--empty-rating',
    backgroundToken: '--card',
    kind: 'decorative',
    usage: 'Empty rating stars',
    note: 'Decorative only and intentionally subtle.',
    preview: 'decorative',
  },
];

export const primitiveSections = [
  { title: 'Brand Palette', items: buildPrimitivePalette('Brand', 'brand') },
  { title: 'Neutral Palette', items: buildPrimitivePalette('Neutral', 'neutral') },
  { title: 'Semantic Palette', items: buildSemanticPrimitivePalette() },
];

export const semanticGroups = semanticGroupDefinitions.map(({ group, tokens: tokenNames }) => ({
  group,
  tokens: tokenNames.map((token) => {
    const entry = getSemanticToken(token);

    return {
      id: entry.id,
      token,
      value: entry.value,
      ref: entry.ref,
    };
  }),
}));

export const colorCombos = comboDefinitions.map((definition) => {
  const foreground = getSemanticToken(definition.foregroundToken);
  const background = getSemanticToken(definition.backgroundToken);
  const contrast = Number(getContrastRatio(foreground.value, background.value).toFixed(2));
  const classification = classifyContrast(definition.kind, contrast);

  return {
    ...definition,
    foreground,
    background,
    contrast,
    contrastLabel: `${contrast.toFixed(2)}:1`,
    target: classification.target,
    status: classification.status,
    tone: classification.tone,
    kindLabel: definition.kind.charAt(0).toUpperCase() + definition.kind.slice(1),
  };
});

const comboMap = Object.fromEntries(colorCombos.map((combo) => [combo.id, combo]));

export const themeCoverageNote =
  'Default theme only. tokens.json also contains an Hrange theme that is not surfaced by the docs site yet.';

export const assessmentFindings = [
  {
    kicker: 'Normal text',
    tone: 'note',
    title: 'Muted text now clears AA in Default',
    copy:
      `${comboMap['muted-foreground-bg-on-background'].foregroundToken} on ` +
      `${comboMap['muted-foreground-bg-on-background'].backgroundToken} is ` +
      `${comboMap['muted-foreground-bg-on-background'].contrastLabel}. ` +
      'The updated token is now contrast-safe for normal text, though it should remain secondary in hierarchy.',
  },
  {
    kicker: 'Status pair',
    tone: 'warn',
    title: 'Positive token pair still misses AA for normal text',
    copy:
      `${comboMap['positive-fg-on-positive'].foregroundToken} on ` +
      `${comboMap['positive-fg-on-positive'].backgroundToken} is ` +
      `${comboMap['positive-fg-on-positive'].contrastLabel}. ` +
      'It is better than before, but still only clears the large-text threshold.',
  },
  {
    kicker: 'Boundary contrast',
    tone: 'fail',
    title: 'Light borders are too soft as standalone boundaries',
    copy:
      `${comboMap['border-on-background'].foregroundToken} on light surfaces is ` +
      `${comboMap['border-on-background'].contrastLabel}. ` +
      'That misses the 3:1 UI boundary target, so borders need supporting cues.',
  },
  {
    kicker: 'Decorative tokens',
    tone: 'note',
    title: 'Rating tokens are decorative only',
    copy:
      `${comboMap['rating-on-card'].foregroundToken} and ` +
      `${comboMap['empty-rating-on-card'].foregroundToken} are documented for icon fills only. ` +
      'They should not be presented as text-safe color pairs.',
  },
];

export function isLightHex(hex) {
  const [red, green, blue] = hexToRgb(hex);
  return (red * 299 + green * 587 + blue * 114) / 1000 > 155;
}
