<script>
  import SmallCard from '../components/SmallCard.svelte';
  import DocsPageHeader from './DocsPageHeader.svelte';
  import { figmaLinks } from './figmaLinks.js';
</script>

<div>
  <DocsPageHeader
    title="SmallCard"
    description="Product card used in horizontal rails with image, tags, title, rating, price, and stock status."
    figmaUrl={figmaLinks.smallCard.url}
    figmaLabel={figmaLinks.smallCard.label}
  />

  <div class="docs-section">
    <h2 class="docs-section-title">Default</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">With discount &amp; old price</span>
        <span class="preview-badge">SmallCard.svelte</span>
      </div>
      <div class="preview-canvas">
        <SmallCard />
      </div>
      <div class="preview-props">
        <pre><span class="prop-key">akcija</span>        <span class="prop-type">boolean</span>  <span class="prop-value">true</span>    — show discount tag in price row
<span class="prop-key">oldPrice</span>      <span class="prop-type">boolean</span>  <span class="prop-value">true</span>    — show struck-through original price
<span class="prop-key">title</span>         <span class="prop-type">string</span>           — product name (clamped to 2 lines)
<span class="prop-key">price</span>         <span class="prop-type">string</span>           — current price
<span class="prop-key">originalPrice</span> <span class="prop-type">string</span>           — pre-discount price
<span class="prop-key">rating</span>        <span class="prop-type">number</span>  <span class="prop-value">4</span>       — star rating out of 5
<span class="prop-key">reviewCount</span>   <span class="prop-type">number</span>           — number of reviews
<span class="prop-key">stock</span>         <span class="prop-type">string</span>           — passed to StockIndicator</pre>
      </div>
    </div>
  </div>

  <div class="docs-section">
    <h2 class="docs-section-title">Variants</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">No discount</span>
        <span class="preview-badge">akcija=false · oldPrice=false</span>
      </div>
      <div class="preview-canvas">
        <SmallCard akcija={false} oldPrice={false} />
      </div>
    </div>

    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Rating variants</span>
        <span class="preview-badge">rating=3 · rating=5</span>
      </div>
      <div class="preview-canvas">
        <SmallCard rating={3} reviewCount={42} />
        <SmallCard rating={5} reviewCount={890} />
      </div>
    </div>
  </div>

  <div class="docs-section">
    <h2 class="docs-section-title">In context</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Multiple cards</span>
        <span class="preview-badge">as used in a product rail</span>
      </div>
      <div class="preview-canvas" style="justify-content:flex-start; overflow-x:auto; flex-wrap:nowrap; padding-bottom: var(--space-3)">
        <SmallCard />
        <SmallCard akcija={false} oldPrice={false} rating={3} reviewCount={42} />
        <SmallCard rating={5} reviewCount={890} />
      </div>
    </div>
  </div>

  <div class="docs-section">
    <h2 class="docs-section-title">Token reference</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Design tokens used</span>
        <span class="preview-badge">layout · colors · typography</span>
      </div>
      <div class="preview-props">
        <pre><span class="prop-type">Layout</span>
  width           247px
  border-radius   <span class="prop-value">--radius-200</span> (8px)
  content padding <span class="prop-value">--space-5</span> (16px)
  tag gap         <span class="prop-value">--space-3</span> (8px)

<span class="prop-type">Typography</span>
  title           <span class="prop-value">--scale-03</span> (16px) / 600
  price           <span class="prop-value">--scale-03</span> (16px) / 600
  meta text       <span class="prop-value">--scale-00</span> (11px) / 400

<span class="prop-type">Status colors</span>
  new tag         <span class="prop-value">--rating</span>
  promo tag       <span class="prop-value">--promo</span> + <span class="prop-value">--promo-fg</span>
  expert tag      <span class="prop-value">--positive-fg</span>
  stock dot       <span class="prop-value">--positive-fg</span></pre>
      </div>
    </div>
  </div>
</div>
