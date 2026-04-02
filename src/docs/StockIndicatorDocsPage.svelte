<script>
  import StockIndicator from '../components/StockIndicator.svelte';
  import DocsPageHeader from './DocsPageHeader.svelte';
  import { figmaLinks } from './figmaLinks.js';
</script>

<div>
  <DocsPageHeader
    title="StockIndicator"
    description="Availability helper documented from the Figma component set with three stock states and state-driven dot colors."
    figmaUrl={figmaLinks.stockIndicator.url}
    figmaLabel={figmaLinks.stockIndicator.label}
  />

  <div class="docs-section">
    <h2 class="docs-section-title">All variants</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Figma stock states</span>
        <span class="preview-badge">3 Figma variants</span>
      </div>
      <div class="preview-canvas preview-canvas--stock">
        <div class="stock-variant">
          <div class="stock-variant-meta">
            <span class="stock-variant-title">Stock: &gt;10</span>
            <span class="stock-variant-note">Positive availability</span>
          </div>
          <StockIndicator stock={'>10'} />
        </div>

        <div class="stock-variant">
          <div class="stock-variant-meta">
            <span class="stock-variant-title">Stock: &lt;10</span>
            <span class="stock-variant-note">Limited availability</span>
          </div>
          <StockIndicator stock={'<10'} />
        </div>

        <div class="stock-variant">
          <div class="stock-variant-meta">
            <span class="stock-variant-title">Stock: Low</span>
            <span class="stock-variant-note">Critical stock level</span>
          </div>
          <StockIndicator stock="Low" />
        </div>
      </div>
      <div class="preview-props">
        <pre><span class="prop-key">stock</span>  <span class="prop-type">string</span>  <span class="prop-value">'&gt;10'</span>  - Figma states: <span class="prop-value">'&gt;10'</span> | <span class="prop-value">'&lt;10'</span> | <span class="prop-value">'Low'</span>
                 numeric values below 10 inherit the yellow or red dot treatment</pre>
      </div>
    </div>
  </div>

  <div class="docs-section">
    <h2 class="docs-section-title">Token reference</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Design tokens used</span>
        <span class="preview-badge">layout | typography | colors</span>
      </div>
      <div class="preview-props">
        <pre><span class="prop-type">Layout</span>
  dot size       8x8px
  gap            <span class="prop-value">--space-3</span> (8px)
  padding-y      <span class="prop-value">--space-3</span> (8px)

<span class="prop-type">Typography</span>
  font-family    <span class="prop-value">--font-family</span>
  font-size      <span class="prop-value">--scale-00</span> (11px)
  font-weight    <span class="prop-value">--weight-regular</span> (400)
  text color     <span class="prop-value">--foreground</span>

<span class="prop-type">State colors</span>
  &gt;10           <span class="prop-value">--positive-fg</span> (#00a63e)
  &lt;10           <span class="prop-value">--rating</span> (#ffdf20)
  Low           <span class="prop-value">--destructive</span> (#c10007)</pre>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .preview-canvas--stock {
    display: grid;
    grid-template-columns: repeat(3, minmax(180px, 1fr));
    gap: var(--space-5);
    width: 100%;
    justify-content: stretch;
  }

  .stock-variant {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    padding: var(--space-5);
    background: var(--card);
    border: var(--stroke-border) solid var(--border);
    border-radius: var(--radius-200);
  }

  .stock-variant-meta {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  .stock-variant-title {
    font-size: var(--scale-01);
    font-weight: var(--weight-semibold);
    color: var(--foreground);
  }

  .stock-variant-note {
    font-size: var(--scale-00);
    color: var(--muted-foreground);
    line-height: 1.2;
  }

  @media (max-width: 760px) {
    .preview-canvas--stock {
      grid-template-columns: 1fr;
    }
  }
</style>
