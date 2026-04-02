<script>
  // From Typography Primitives/Mode 1
  const scale = [
    { name: 'Scale 00', var: '--scale-00', cssVar: 'var(--sds-typography-scale-01)', size: 11, usage: 'text-s — tags, captions, stock labels' },
    { name: 'Scale 01', var: '--scale-01', cssVar: '',                               size: 13, usage: 'Small labels, UI hints' },
    { name: 'Scale 02', var: '--scale-02', cssVar: 'var(--sds-typography-scale-02)', size: 14, usage: 'text-m — body, card descriptions' },
    { name: 'Scale 03', var: '--scale-03', cssVar: 'var(--sds-typography-scale-03)', size: 16, usage: 'text-l — product title, price' },
    { name: 'Scale 04', var: '--scale-04', cssVar: 'var(--sds-typography-scale-04)', size: 18, usage: 'Sub-heading' },
    { name: 'Scale 05', var: '--scale-05', cssVar: 'var(--sds-typography-scale-05)', size: 23, usage: 'h6 — section heading' },
    { name: 'Scale 06', var: '--scale-06', cssVar: 'var(--sds-typography-scale-06)', size: 26, usage: 'h5' },
    { name: 'Scale 07', var: '--scale-07', cssVar: 'var(--sds-typography-scale-07)', size: 29, usage: 'h4' },
    { name: 'Scale 08', var: '--scale-08', cssVar: 'var(--sds-typography-scale-08)', size: 32, usage: 'h3 — page title' },
    { name: 'Scale 09', var: '--scale-09', cssVar: 'var(--sds-typography-scale-09)', size: 40, usage: 'h2 — display heading' },
    { name: 'Scale 10', var: '--scale-10', cssVar: 'var(--sds-typography-scale-10)', size: 50, usage: 'h1 — hero heading' },
    { name: 'Scale 11', var: '--scale-11', cssVar: '',                               size: 20, usage: 'Medium body / callout' },
  ];

  // Composite type styles from "Color Primitives/Mode 1"
  // fontSize refs resolved: 0→11, 1→14, 2→16, 3→23, 4→26, 5→29, 6→32, 7→40, 8→50
  const composites = [
    { name: 'h1',           size: 50, weight: 600, lineHeight: '120%', decoration: 'none' },
    { name: 'h2',           size: 40, weight: 600, lineHeight: '120%', decoration: 'none' },
    { name: 'h3',           size: 32, weight: 600, lineHeight: '120%', decoration: 'none' },
    { name: 'h4',           size: 29, weight: 600, lineHeight: '120%', decoration: 'none' },
    { name: 'h5',           size: 26, weight: 600, lineHeight: '120%', decoration: 'none' },
    { name: 'h6',           size: 23, weight: 600, lineHeight: '120%', decoration: 'none' },
    { name: 'text-l-strong', size: 16, weight: 600, lineHeight: '120%', decoration: 'none' },
    { name: 'text-l',        size: 16, weight: 400, lineHeight: '120%', decoration: 'none' },
    { name: 'text-m-strong', size: 14, weight: 600, lineHeight: '120%', decoration: 'none' },
    { name: 'text-m',        size: 14, weight: 400, lineHeight: '120%', decoration: 'none' },
    { name: 'text-s-strong', size: 11, weight: 600, lineHeight: '120%', decoration: 'none' },
    { name: 'text-s',        size: 11, weight: 400, lineHeight: '120%', decoration: 'none' },
    { name: 'text-link',     size: 14, weight: 400, lineHeight: '120%', decoration: 'underline' },
  ];

  const weights = [
    { name: 'Weight Regular',  token: 'montserrat-1', value: 400, var: '--weight-regular',  scssVar: 'Weight Regular' },
    { name: 'Weight Semibold', token: 'montserrat-0', value: 600, var: '--weight-semibold', scssVar: 'Weight Semibold' },
  ];
</script>

<div>
  <h1 class="docs-page-title">Typography</h1>
  <p class="docs-page-desc">
    Type system from <code>Typography Primitives/Mode 1</code>. Family: <strong>Montserrat</strong>.
    All line heights are <strong>120%</strong>. Letter spacing: <strong>0%</strong>.
  </p>

  <!-- Font Scale -->
  <div class="docs-section">
    <h2 class="docs-section-title">Type Scale</h2>
    {#each scale as s}
      <div class="type-scale-row">
        <div class="type-meta">
          <div class="type-label">{s.name}</div>
          <div class="type-value">{s.var}</div>
          <div class="type-value">{s.size}px</div>
        </div>
        <div class="type-preview" style="font-size:{s.size}px; font-family:var(--font-family)">
          {s.usage}
        </div>
      </div>
    {/each}
  </div>

  <!-- Composite Styles -->
  <div class="docs-section">
    <h2 class="docs-section-title">Composite Styles</h2>
    <p class="section-note">
      Composite tokens from <code>Color Primitives/Mode 1</code> — combining size, weight, line-height, and decoration.
    </p>
    {#each composites as c}
      <div class="type-scale-row">
        <div class="type-meta">
          <div class="type-label">{c.name}</div>
          <div class="type-value">{c.size}px / {c.weight} / {c.lineHeight}</div>
          {#if c.decoration !== 'none'}
            <div class="type-value">{c.decoration}</div>
          {/if}
        </div>
        <div
          class="type-preview"
          style="font-size:{c.size}px; font-weight:{c.weight}; text-decoration:{c.decoration}; font-family:var(--font-family)"
        >
          The quick brown fox
        </div>
      </div>
    {/each}
  </div>

  <!-- Weights -->
  <div class="docs-section">
    <h2 class="docs-section-title">Font Weights</h2>
    {#each weights as w}
      <div class="type-scale-row">
        <div class="type-meta">
          <div class="type-label">{w.name}</div>
          <div class="type-value">{w.var}</div>
          <div class="type-value">{w.value}</div>
        </div>
        <div class="type-preview" style="font-weight:{w.value}; font-size:18px; font-family:var(--font-family)">
          Aa Bb Cc Dd Ee Ff — 0123456789
        </div>
      </div>
    {/each}
  </div>

  <!-- Family -->
  <div class="docs-section">
    <h2 class="docs-section-title">Font Family</h2>
    <div class="type-scale-row">
      <div class="type-meta">
        <div class="type-label">Family Sans</div>
        <div class="type-value">--font-family</div>
        <div class="type-value">Montserrat</div>
      </div>
      <div class="type-preview" style="font-family:'Montserrat',sans-serif; font-size:22px">
        Montserrat — ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  code, strong {
    font-family: 'Fira Code', 'Cascadia Code', monospace;
    font-size: var(--scale-00);
    background: var(--accent);
    padding: 1px 5px;
    border-radius: var(--radius-100);
    color: var(--primary);
    font-style: normal;
  }

  strong {
    font-family: var(--font-family);
    font-weight: var(--weight-semibold);
    background: none;
    padding: 0;
    color: var(--foreground);
    font-size: inherit;
  }

  .section-note {
    font-size: var(--scale-02);
    color: var(--muted-foreground);
    margin-bottom: var(--space-5);
    line-height: 1.6;
  }
</style>
