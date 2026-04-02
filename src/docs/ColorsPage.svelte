<script>
  import {
    assessmentFindings,
    colorCombos,
    isLightHex,
    primitiveSections,
    semanticGroups,
    themeCoverageNote,
  } from './colorDocs.js';

  const ratingPreviewDots = Array.from({ length: 5 });
</script>

<div>
  <h1 class="docs-page-title">Colors</h1>
  <p class="docs-page-desc">
    All color data on this page is derived from <code>src/tokens/tokens.json</code>. Primitives
    define the raw palette; semantic tokens map primitives to UI meaning and are the values
    components should consume.
  </p>

  <div class="docs-section">
    <h2 class="docs-section-title">Assessment</h2>
    <p class="section-note">{themeCoverageNote}</p>

    <div class="assessment-grid">
      {#each assessmentFindings as finding}
        <article class={`assessment-card assessment-card--${finding.tone}`}>
          <div class="assessment-card-kicker">{finding.kicker}</div>
          <h3 class="assessment-card-title">{finding.title}</h3>
          <p class="assessment-card-copy">{finding.copy}</p>
        </article>
      {/each}
    </div>
  </div>

  {#each primitiveSections as section}
    <div class="docs-section">
      <h2 class="docs-section-title">{section.title}</h2>
      <div class="token-grid token-grid--colors">
        {#each section.items as item}
          <div class="color-swatch">
            <div
              class="swatch-block"
              style={`background:${item.value}; ${isLightHex(item.value) ? 'border-bottom:1px solid var(--border)' : ''}`}
            ></div>
            <div class="swatch-info">
              <div class="swatch-name">{item.label}</div>
              <div class="swatch-value">{item.value}</div>
              {#if item.varName}
                <div class="swatch-var">{item.varName}</div>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/each}

  <div class="docs-section">
    <h2 class="docs-section-title">Semantic Tokens - Default Theme</h2>
    <p class="section-note">
      These CSS custom properties are the current runtime contract from <code>_tokens.scss</code>.
      The values below are resolved from the token source rather than copied into the page.
    </p>

    {#each semanticGroups as group}
      <div class="semantic-group">
        <h3 class="semantic-group-title">{group.group}</h3>
        <div class="token-grid token-grid--colors">
          {#each group.tokens as token}
            <div class="color-swatch">
              <div
                class="swatch-block"
                style={`background:${token.value}; ${isLightHex(token.value) ? 'border-bottom:1px solid var(--border)' : ''}`}
              ></div>
              <div class="swatch-info">
                <div class="swatch-name">{token.token}</div>
                <div class="swatch-value">{token.value}</div>
                <div class="swatch-var">-> {token.ref}</div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>

  <div class="docs-section">
    <h2 class="docs-section-title">Logical Color Combos</h2>
    <p class="section-note">
      This is a curated list of approved semantic pairings for the current Default theme. It is not
      a full token matrix.
    </p>

    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Documented semantic pairings</span>
        <span class="preview-badge">{colorCombos.length} combos</span>
      </div>
      <div class="preview-canvas preview-canvas--combo-grid">
        {#each colorCombos as combo}
          <article class="combo-card">
            <div
              class="combo-preview"
              style={`background:${combo.background.value}; color:${combo.foreground.value};`}
            >
              {#if combo.preview === 'text'}
                <div class="combo-text-preview">
                  <span class="combo-preview-label">{combo.foregroundToken}</span>
                  <span class="combo-preview-copy">Aa Sample text</span>
                </div>
              {:else if combo.preview === 'ring'}
                <div class="combo-boundary-preview">
                  <div
                    class="combo-ring-box"
                    style={`box-shadow: 0 0 0 2px ${combo.foreground.value};`}
                  ></div>
                </div>
              {:else if combo.preview === 'boundary'}
                <div class="combo-boundary-preview">
                  <div
                    class="combo-border-box"
                    style={`border: 1px solid ${combo.foreground.value};`}
                  ></div>
                </div>
              {:else}
                <div class="combo-decorative-preview">
                  {#each ratingPreviewDots as _}
                    <span
                      class="combo-dot"
                      style={`background:${combo.foreground.value}; opacity:${combo.id === 'empty-rating-on-card' ? 0.8 : 1};`}
                      aria-hidden="true"
                    ></span>
                  {/each}
                </div>
              {/if}
            </div>

            <div class="combo-card-body">
              <div class="combo-card-top">
                <h3 class="combo-card-title">{combo.label}</h3>
                <span class={`contrast-badge contrast-badge--${combo.tone}`}>{combo.status}</span>
              </div>

              <div class="combo-card-pair">{combo.foregroundToken} on {combo.backgroundToken}</div>
              <div class="combo-card-usage">{combo.usage}</div>
              <div class="combo-card-note">{combo.note}</div>
              <div class="combo-card-ratio">{combo.contrastLabel} target {combo.target}</div>
            </div>
          </article>
        {/each}
      </div>
    </div>
  </div>

  <div class="docs-section">
    <h2 class="docs-section-title">Contrast Check</h2>

    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Text, boundary, and decorative checks</span>
        <span class="preview-badge">WCAG AA + UI boundary</span>
      </div>

      <div class="contrast-table-wrap">
        <table class="contrast-table">
          <thead>
            <tr>
              <th>Pair</th>
              <th>Kind</th>
              <th>Target</th>
              <th>Contrast</th>
              <th>Status</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            {#each colorCombos as combo}
              <tr>
                <td class="contrast-cell contrast-cell--pair">
                  <span class="contrast-pair-name">{combo.label}</span>
                  <span class="contrast-pair-tokens">
                    {combo.foregroundToken} on {combo.backgroundToken}
                  </span>
                </td>
                <td class="contrast-cell">{combo.kindLabel}</td>
                <td class="contrast-cell">{combo.target}</td>
                <td class="contrast-cell">{combo.contrastLabel}</td>
                <td class="contrast-cell">
                  <span class={`contrast-badge contrast-badge--${combo.tone}`}>{combo.status}</span>
                </td>
                <td class="contrast-cell contrast-cell--note">{combo.note}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
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

  .section-note {
    font-size: var(--scale-02);
    color: var(--muted-foreground);
    margin-bottom: var(--space-5);
    line-height: 1.6;
  }

  .assessment-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: var(--space-4);
  }

  .assessment-card {
    border: var(--stroke-border) solid var(--border);
    border-radius: var(--radius-200);
    background: var(--card);
    padding: var(--space-5);
  }

  .assessment-card--note {
    border-color: var(--ring);
  }

  .assessment-card--warn {
    border-color: var(--rating);
  }

  .assessment-card--fail {
    border-color: var(--destructive);
  }

  .assessment-card-kicker {
    font-size: var(--scale-00);
    font-weight: var(--weight-semibold);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: var(--space-2);
    color: var(--muted-foreground);
  }

  .assessment-card--note .assessment-card-kicker {
    color: var(--ring);
  }

  .assessment-card--warn .assessment-card-kicker {
    color: var(--foreground);
  }

  .assessment-card--fail .assessment-card-kicker {
    color: var(--destructive);
  }

  .assessment-card-title {
    font-size: var(--scale-03);
    font-weight: var(--weight-semibold);
    color: var(--foreground);
    line-height: 1.3;
    margin-bottom: var(--space-2);
  }

  .assessment-card-copy {
    font-size: var(--scale-01);
    color: var(--muted-foreground);
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

  .preview-canvas--combo-grid {
    justify-content: flex-start;
    align-items: stretch;
  }

  .combo-card {
    width: min(100%, 280px);
    min-width: 220px;
    border: var(--stroke-border) solid var(--border);
    border-radius: var(--radius-200);
    overflow: hidden;
    background: var(--card);
  }

  .combo-preview {
    min-height: 116px;
    padding: var(--space-5);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .combo-text-preview {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  .combo-preview-label {
    font-size: var(--scale-00);
    font-family: 'Fira Code', 'Cascadia Code', monospace;
    opacity: 0.8;
  }

  .combo-preview-copy {
    font-size: var(--scale-03);
    font-weight: var(--weight-semibold);
    line-height: 1.2;
  }

  .combo-boundary-preview {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .combo-ring-box,
  .combo-border-box {
    width: min(100%, 168px);
    height: 56px;
    border-radius: var(--radius-200);
    background: transparent;
  }

  .combo-decorative-preview {
    display: flex;
    align-items: center;
    gap: var(--space-2);
  }

  .combo-dot {
    width: 14px;
    height: 14px;
    border-radius: var(--radius-full);
    display: block;
  }

  .combo-card-body {
    padding: var(--space-4);
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  .combo-card-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--space-3);
  }

  .combo-card-title {
    font-size: var(--scale-01);
    font-weight: var(--weight-semibold);
    color: var(--foreground);
    line-height: 1.4;
  }

  .combo-card-pair,
  .combo-card-ratio {
    font-size: var(--scale-00);
    font-family: 'Fira Code', 'Cascadia Code', monospace;
    line-height: 1.5;
  }

  .combo-card-pair {
    color: var(--muted-foreground);
  }

  .combo-card-ratio {
    color: var(--foreground);
  }

  .combo-card-usage {
    font-size: var(--scale-00);
    font-weight: var(--weight-semibold);
    color: var(--foreground);
    line-height: 1.5;
  }

  .combo-card-note {
    font-size: var(--scale-00);
    color: var(--muted-foreground);
    line-height: 1.6;
  }

  .contrast-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-1) var(--space-3);
    border-radius: var(--radius-full);
    font-size: var(--scale-00);
    font-weight: var(--weight-semibold);
    line-height: 1.2;
    white-space: nowrap;
  }

  .contrast-badge--pass {
    background: var(--secondary);
    color: var(--secondary-foreground);
  }

  .contrast-badge--warn {
    background: var(--rating);
    color: var(--foreground);
  }

  .contrast-badge--fail {
    background: var(--promo);
    color: var(--promo-fg);
  }

  .contrast-badge--neutral {
    background: var(--accent);
    color: var(--accent-foreground);
  }

  .contrast-table-wrap {
    overflow-x: auto;
    background: var(--card);
  }

  .contrast-table {
    width: 100%;
    min-width: 860px;
    border-collapse: collapse;
  }

  .contrast-table th,
  .contrast-table td {
    padding: var(--space-4) var(--space-5);
    border-top: var(--stroke-border) solid var(--border);
    text-align: left;
    vertical-align: top;
  }

  .contrast-table thead th {
    border-top: none;
    background: var(--surface-muted);
    font-size: var(--scale-00);
    font-weight: var(--weight-semibold);
    color: var(--muted-foreground);
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .contrast-cell {
    font-size: var(--scale-00);
    color: var(--foreground);
    line-height: 1.6;
  }

  .contrast-cell--pair {
    min-width: 220px;
  }

  .contrast-pair-name {
    display: block;
    font-weight: var(--weight-semibold);
    color: var(--foreground);
    margin-bottom: 2px;
  }

  .contrast-pair-tokens {
    display: block;
    color: var(--muted-foreground);
    font-family: 'Fira Code', 'Cascadia Code', monospace;
    line-height: 1.5;
  }

  .contrast-cell--note {
    min-width: 220px;
    color: var(--muted-foreground);
  }

  @media (max-width: 720px) {
    .combo-card {
      min-width: 100%;
      width: 100%;
    }
  }
</style>
