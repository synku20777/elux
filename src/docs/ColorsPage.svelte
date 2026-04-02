<script>
  // Primitives — resolved hex values from tokens_electrolux.json
  const brand = [
    { step: '01',  value: '#f5fbff' },
    { step: '50',  value: '#e9f6ff' },
    { step: '100', value: '#ccdbf5' },
    { step: '200', value: '#afc1e0' },
    { step: '300', value: '#93a7cb' },
    { step: '400', value: '#788eb6' },
    { step: '500', value: '#5c76a4' },
    { step: '600', value: '#435e8f' },
    { step: '700', value: '#2d4776' },
    { step: '800', value: '#152c56' },
    { step: '900', value: '#031336' },
    { step: '950', value: '#000019' },
  ];

  const neutral = [
    { step: '00',  value: '#ffffff' },
    { step: '2',   value: '#f8f9fc' },
    { step: '50',  value: '#f3f5fa' },
    { step: '100', value: '#d6d8dd' },
    { step: '200', value: '#b9bbc1' },
    { step: '300', value: '#9d9fa6' },
    { step: '400', value: '#82858c' },
    { step: '500', value: '#676b73' },
    { step: '600', value: '#4e525b' },
    { step: '700', value: '#373a42' },
    { step: '800', value: '#21242b' },
    { step: '900', value: '#0f1117' },
    { step: '950', value: '#020305' },
  ];

  const semantic = [
    { name: 'Yellow/100', value: '#fef9c2' },
    { name: 'Yellow/300', value: '#ffdf20' },
    { name: 'Yellow/700', value: '#a65f00' },
    { name: 'Blue/100',   value: '#dbeafe' },
    { name: 'Blue/700',   value: '#1447e6' },
    { name: 'Red/100',    value: '#ffe2e2' },
    { name: 'Red/700',    value: '#c10007' },
    { name: 'Green/200',  value: '#dcfce7' },
    { name: 'Green/700',  value: '#00a63e' },
  ];

  // Semantic tokens — Default mode, with resolved values and CSS var names
  const semanticDefault = [
    { group: 'Primary',
      tokens: [
        { token: '--primary',            value: '#2d4776', ref: 'Brand/700' },
        { token: '--primary-hover',      value: '#152c56', ref: 'Brand/800' },
        { token: '--primary-foreground', value: '#ffffff', ref: 'Neutral/00' },
      ]
    },
    { group: 'Secondary',
      tokens: [
        { token: '--secondary',            value: '#ccdbf5', ref: 'Brand/100' },
        { token: '--secondary-hover',      value: '#afc1e0', ref: 'Brand/200' },
        { token: '--secondary-foreground', value: '#2d4776', ref: 'Brand/700' },
      ]
    },
    { group: 'Base',
      tokens: [
        { token: '--background',     value: '#f8f9fc', ref: 'Neutral/2' },
        { token: '--foreground',     value: '#031336', ref: 'Brand/900' },
        { token: '--card',           value: '#ffffff', ref: 'Neutral/00' },
        { token: '--muted-foreground', value: '#5c76a4', ref: 'Brand/500' },
      ]
    },
    { group: 'Surface',
      tokens: [
        { token: '--surface-muted',  value: '#f3f5fa', ref: 'Neutral/50' },
        { token: '--surface-raised', value: '#ffffff', ref: 'Neutral/00' },
        { token: '--surface-sunk',   value: '#d6d8dd', ref: 'Neutral/100' },
      ]
    },
    { group: 'Border',
      tokens: [
        { token: '--border', value: '#d6d8dd', ref: 'Neutral/100' },
        { token: '--ring',   value: '#2d4776', ref: 'Brand/700' },
      ]
    },
    { group: 'Accent',
      tokens: [
        { token: '--accent',            value: '#f3f5fa', ref: 'Neutral/50' },
        { token: '--accent-foreground', value: '#0f1117', ref: 'Neutral/900' },
      ]
    },
    { group: 'Destructive',
      tokens: [
        { token: '--destructive',    value: '#c10007', ref: 'Semantic/Red/700' },
        { token: '--destructive-fg', value: '#ffffff', ref: 'Neutral/00' },
      ]
    },
    { group: 'Positive',
      tokens: [
        { token: '--positive',    value: '#dcfce7', ref: 'Semantic/Green/200' },
        { token: '--positive-fg', value: '#00a63e', ref: 'Semantic/Green/700' },
      ]
    },
    { group: 'Promo',
      tokens: [
        { token: '--promo',    value: '#ffe2e2', ref: 'Semantic/Red/100' },
        { token: '--promo-fg', value: '#c10007', ref: 'Semantic/Red/700' },
      ]
    },
    { group: 'Info',
      tokens: [
        { token: '--info',    value: '#dbeafe', ref: 'Semantic/Blue/100' },
        { token: '--info-fg', value: '#1447e6', ref: 'Semantic/Blue/700' },
      ]
    },
    { group: 'Rating',
      tokens: [
        { token: '--rating',       value: '#ffdf20', ref: 'Semantic/Yellow/300' },
        { token: '--empty-rating', value: '#e9f6ff', ref: 'Brand/50' },
      ]
    },
  ];

  function isLight(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return (r * 299 + g * 587 + b * 114) / 1000 > 155;
  }
</script>

<div>
  <h1 class="docs-page-title">Colors</h1>
  <p class="docs-page-desc">
    All color tokens from <code>tokens_electrolux.json</code>. Primitives define the raw palette;
    semantic tokens map primitives to intent and are the values you should use in components.
  </p>

  <!-- Primitive: Brand -->
  <div class="docs-section">
    <h2 class="docs-section-title">Brand Palette</h2>
    <div class="token-grid token-grid--colors">
      {#each brand as t}
        <div class="color-swatch">
          <div class="swatch-block" style="background:{t.value}; {isLight(t.value) ? 'border-bottom:1px solid var(--border)' : ''}"></div>
          <div class="swatch-info">
            <div class="swatch-name">Brand/{t.step}</div>
            <div class="swatch-value">{t.value}</div>
            <div class="swatch-var">$brand-{t.step}</div>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Primitive: Neutral -->
  <div class="docs-section">
    <h2 class="docs-section-title">Neutral Palette</h2>
    <div class="token-grid token-grid--colors">
      {#each neutral as t}
        <div class="color-swatch">
          <div class="swatch-block" style="background:{t.value}; {isLight(t.value) ? 'border-bottom:1px solid var(--border)' : ''}"></div>
          <div class="swatch-info">
            <div class="swatch-name">Neutral/{t.step}</div>
            <div class="swatch-value">{t.value}</div>
            <div class="swatch-var">$neutral-{t.step}</div>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Primitive: Semantic -->
  <div class="docs-section">
    <h2 class="docs-section-title">Semantic Palette</h2>
    <div class="token-grid token-grid--colors">
      {#each semantic as t}
        <div class="color-swatch">
          <div class="swatch-block" style="background:{t.value}; {isLight(t.value) ? 'border-bottom:1px solid var(--border)' : ''}"></div>
          <div class="swatch-info">
            <div class="swatch-name">{t.name}</div>
            <div class="swatch-value">{t.value}</div>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Semantic Tokens: Default Mode -->
  <div class="docs-section">
    <h2 class="docs-section-title">Semantic Tokens — Default Mode</h2>
    <p class="section-note">Use these CSS custom properties in components. They map to primitives and support theme switching.</p>
    {#each semanticDefault as group}
      <div class="semantic-group">
        <h3 class="semantic-group-title">{group.group}</h3>
        <div class="token-grid token-grid--colors">
          {#each group.tokens as t}
            <div class="color-swatch">
              <div class="swatch-block" style="background:{t.value}; {isLight(t.value) ? 'border-bottom:1px solid var(--border)' : ''}"></div>
              <div class="swatch-info">
                <div class="swatch-name">{t.token}</div>
                <div class="swatch-value">{t.value}</div>
                <div class="swatch-var">→ {t.ref}</div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  code {
    font-family: 'Fira Code', 'Cascadia Code', monospace;
    font-size: var(--scale-00);
    background: var(--accent);
    padding: 1px 6px;
    border-radius: var(--radius-100);
    color: var(--primary);
  }

  .section-note {
    font-size: var(--scale-02);
    color: var(--muted-foreground);
    margin-bottom: var(--space-5);
    line-height: 1.6;
  }

  .semantic-group {
    margin-bottom: var(--space-7);
  }

  .semantic-group-title {
    font-size: var(--scale-02);
    font-weight: var(--weight-semibold);
    color: var(--muted-foreground);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-bottom: var(--space-3);
  }
</style>
