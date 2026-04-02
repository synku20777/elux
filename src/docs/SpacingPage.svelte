<script>
  // From Spacing Primitive/Mode 1
  const spacing = [
    { var: '--space-0',  value: 0  },
    { var: '--space-1',  value: 2  },
    { var: '--space-2',  value: 4  },
    { var: '--space-3',  value: 8  },
    { var: '--space-4',  value: 12 },
    { var: '--space-5',  value: 16 },
    { var: '--space-6',  value: 20 },
    { var: '--space-7',  value: 24 },
    { var: '--space-8',  value: 32 },
    { var: '--space-9',  value: 40 },
    { var: '--space-10', value: 48 },
  ];

  const radius = [
    { name: 'Radius 100', var: '--radius-100', value: 4,    cssName: '--sds-size-radius-100' },
    { name: 'Radius 200', var: '--radius-200', value: 8,    cssName: '--sds-size-radius-200' },
    { name: 'Radius 400', var: '--radius-400', value: 16,   cssName: '' },
    { name: 'Radius 800', var: '--radius-800', value: 48,   cssName: '' },
    { name: 'Radius Full', var: '--radius-full', value: 9999, cssName: '--sds-size-radius-full' },
  ];

  const stroke = [
    { name: 'Border',     var: '--stroke-border',     value: 1, cssName: '--sds-size-stroke-border' },
    { name: 'Focus Ring', var: '--stroke-focus-ring', value: 2, cssName: '--sds-size-stroke-focus-ring' },
  ];

  const icons = [
    { name: 'Small',  var: '--icon-small',  value: 24, cssName: '--sds-size-icon-small' },
    { name: 'Medium', var: '--icon-medium', value: 32, cssName: '--sds-size-icon-medium' },
    { name: 'Large',  var: '--icon-large',  value: 40, cssName: '--sds-size-icon-large' },
    { name: 'Huge',   var: '--icon-huge',   value: 64, cssName: '--sds-size-icon-large' },
  ];

  const maxBar = 48;
</script>

<div>
  <h1 class="docs-page-title">Spacing &amp; Layout</h1>
  <p class="docs-page-desc">
    Spacing, radius, stroke, and icon size tokens from <code>Spacing Primitive/Mode 1</code>.
    The base unit is <strong>4px</strong>; steps follow a loose geometric progression.
  </p>

  <!-- Spacing scale -->
  <div class="docs-section">
    <h2 class="docs-section-title">Spacing Scale</h2>
    <div class="token-grid token-grid--spacing">
      {#each spacing as t}
        <div class="spacing-row">
          <span class="spacing-label">{t.var}</span>
          <span class="spacing-value">{t.value}px</span>
          <div class="spacing-bar" style="width:{Math.max((t.value / maxBar) * 340, 2)}px"></div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Border Radius -->
  <div class="docs-section">
    <h2 class="docs-section-title">Border Radius</h2>
    <div class="radius-grid">
      {#each radius as r}
        <div class="radius-item">
          <div
            class="radius-box"
            style="border-radius:{r.value === 9999 ? '9999px' : r.value + 'px'}"
          ></div>
          <div class="radius-meta">
            <div class="spacing-label">{r.var}</div>
            <div class="spacing-value">{r.value === 9999 ? '9999px (full)' : r.value + 'px'}</div>
            {#if r.cssName}
              <div class="spacing-value">{r.cssName}</div>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Stroke -->
  <div class="docs-section">
    <h2 class="docs-section-title">Stroke</h2>
    <div class="token-grid token-grid--spacing">
      {#each stroke as s}
        <div class="spacing-row">
          <span class="spacing-label">{s.var}</span>
          <span class="spacing-value">{s.value}px</span>
          <div class="stroke-preview" style="border-top:{s.value}px solid var(--foreground); width:120px"></div>
          <span class="spacing-value ref">{s.cssName}</span>
        </div>
      {/each}
    </div>
  </div>

  <!-- Icon Sizes -->
  <div class="docs-section">
    <h2 class="docs-section-title">Icon Sizes</h2>
    <div class="icon-grid">
      {#each icons as ic}
        <div class="icon-item">
          <div class="icon-box" style="width:{ic.value}px; height:{ic.value}px">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
              style="width:100%; height:100%">
              <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" stroke-width="1.5"/>
              <path d="M8 12h8M12 8v8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="spacing-label">{ic.name}</div>
          <div class="spacing-value">{ic.var}</div>
          <div class="spacing-value">{ic.value}px</div>
        </div>
      {/each}
    </div>
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

  strong {
    font-weight: var(--weight-semibold);
  }

  .radius-grid {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-7);
    align-items: flex-end;
  }

  .radius-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-3);
  }

  .radius-box {
    width: 64px;
    height: 64px;
    background: var(--primary);
    opacity: 0.85;
    flex-shrink: 0;
  }

  .radius-meta {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .stroke-preview {
    flex-shrink: 0;
    opacity: 0.7;
  }

  .ref {
    margin-left: auto;
    font-size: var(--scale-00);
    opacity: 0.6;
  }

  .icon-grid {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-8);
    align-items: flex-end;
  }

  .icon-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-2);
    color: var(--foreground);
  }

  .icon-box {
    color: var(--primary);
    opacity: 0.85;
    flex-shrink: 0;
  }
</style>
