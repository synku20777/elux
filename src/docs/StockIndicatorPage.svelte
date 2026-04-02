<script>
  import StockIndicator from '../components/StockIndicator.svelte';
  import DocsPageHeader from './DocsPageHeader.svelte';
  import { figmaLinks } from './figmaLinks.js';
</script>

<div>
  <DocsPageHeader
    title="StockIndicator"
    description="Displays product availability with a colored dot and a label."
    figmaUrl={figmaLinks.stockIndicator.url}
    figmaLabel={figmaLinks.stockIndicator.label}
  />

  <div class="docs-section">
    <h2 class="docs-section-title">Variants</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Stock levels</span>
        <span class="preview-badge">StockIndicator.svelte</span>
      </div>
      <div class="preview-canvas">
        <StockIndicator stock=">10" />
        <StockIndicator stock="5" />
        <StockIndicator stock="1" />
      </div>
      <div class="preview-props">
        <pre><span class="prop-key">stock</span>  <span class="prop-type">string</span>  <span class="prop-value">'>10'</span>  — availability count displayed after "Pieejamība:"</pre>
      </div>
    </div>
  </div>

  <div class="docs-section">
    <h2 class="docs-section-title">Token reference</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Design tokens used</span>
        <span class="preview-badge">colors · typography · spacing</span>
      </div>
      <div class="preview-props">
        <pre><span class="prop-type">Dot</span>
  size           8×8px
  border-radius  <span class="prop-value">--radius-full</span>
  background     <span class="prop-value">--positive-fg</span>  (#00a63e)

<span class="prop-type">Label</span>
  font-size      <span class="prop-value">--scale-00</span>  (11px)
  font-weight    <span class="prop-value">--weight-regular</span>  (400)
  color          <span class="prop-value">--foreground</span>

<span class="prop-type">Layout</span>
  gap            <span class="prop-value">--space-3</span>  (8px)
  padding-y      <span class="prop-value">--space-3</span>  (8px)</pre>
      </div>
    </div>
  </div>
</div>
