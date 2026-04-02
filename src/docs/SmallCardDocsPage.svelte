<script>
  import SmallCard from '../components/SmallCard.svelte';
  import DocsPageHeader from './DocsPageHeader.svelte';
  import { figmaLinks } from './figmaLinks.js';

  const title = 'Veļas mašīna, 600.sērija "SensiCare", ar "AutoDose" funkciju, ietilpība 9kg';
  const hoverTitle = 'Veļas mašīna, 600.sērija "SensiCare", ar 38 veļas mašīna, 600.sērija "SensiCare", ar 38';
</script>

<div>
  <DocsPageHeader
    title="SmallCard"
    description="Product card documented from the Figma component set with two states: the compact default card and the expanded hover card with add-to-cart and efficiency details."
    figmaUrl={figmaLinks.smallCard.url}
    figmaLabel={figmaLinks.smallCard.label}
  />

  <div class="docs-section">
    <h2 class="docs-section-title">All states</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Default and hover variants</span>
        <span class="preview-badge">2 Figma variants</span>
      </div>
      <div class="preview-canvas preview-canvas--small-card-states">
        <div class="small-card-state">
          <span class="small-card-state-label">State: Default</span>
          <SmallCard
            state="Default"
            interactive={false}
            title={title}
            price="€45.52"
            originalPrice="€56.904"
          />
        </div>

        <div class="small-card-state">
          <span class="small-card-state-label">State: Hover</span>
          <SmallCard
            state="Hover"
            interactive={false}
            title={hoverTitle}
            price="€45.52"
            originalPrice="€56.904"
          />
        </div>
      </div>
      <div class="preview-props">
        <pre><span class="prop-key">state</span>                <span class="prop-type">string</span>   <span class="prop-value">'Default'</span>   - <span class="prop-value">'Default'</span> | <span class="prop-value">'Hover'</span>
<span class="prop-key">akcija</span>              <span class="prop-type">boolean</span>  <span class="prop-value">true</span>        - show promo tag in the header and price area
<span class="prop-key">oldPrice</span>            <span class="prop-type">boolean</span>  <span class="prop-value">true</span>        - show struck-through original price
<span class="prop-key">title</span>               <span class="prop-type">string</span>   <span class="prop-value">'...'</span>         - product title; hover expands to 4 lines
<span class="prop-key">price</span>               <span class="prop-type">string</span>   <span class="prop-value">'€45.52'</span>      - current price
<span class="prop-key">originalPrice</span>       <span class="prop-type">string</span>   <span class="prop-value">'€56.904'</span>     - original price
<span class="prop-key">rating</span>              <span class="prop-type">number</span>   <span class="prop-value">4</span>             - star rating out of 5
<span class="prop-key">reviewCount</span>         <span class="prop-type">number</span>   <span class="prop-value">211</span>           - number of reviews
<span class="prop-key">stock</span>               <span class="prop-type">string</span>   <span class="prop-value">'&gt;10'</span>        - forwarded to StockIndicator
<span class="prop-key">interactive</span>         <span class="prop-type">boolean</span>  <span class="prop-value">true</span>        - allow the default card to expand into the hover variant on pointer hover
<span class="prop-key">showWashEfficiency</span>  <span class="prop-type">boolean</span>  <span class="prop-value">true</span>        - show the first hover-only efficiency row
<span class="prop-key">showDryerEfficiency</span> <span class="prop-type">boolean</span>  <span class="prop-value">true</span>        - show the second hover-only efficiency row
<span class="prop-key">showProductSheetLink</span><span class="prop-type">boolean</span>  <span class="prop-value">true</span>        - show the hover-only product sheet link</pre>
      </div>
    </div>
  </div>

  <div class="docs-section">
    <h2 class="docs-section-title">Interactive hover</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Hover the default card</span>
        <span class="preview-badge">pointer interaction</span>
      </div>
      <div class="preview-canvas preview-canvas--small-card-interactive">
        <SmallCard />
      </div>
    </div>
  </div>

  <div class="docs-section">
    <h2 class="docs-section-title">Hover details</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Optional hover-only content</span>
        <span class="preview-badge">efficiency rows | product sheet link</span>
      </div>
      <div class="preview-canvas preview-canvas--small-card-variants">
        <SmallCard
          state="Hover"
          interactive={false}
          title={hoverTitle}
          price="€45.52"
          originalPrice="€56.904"
        />
        <SmallCard
          state="Hover"
          interactive={false}
          title={hoverTitle}
          price="€45.52"
          originalPrice="€56.904"
          showWashEfficiency={false}
          showProductSheetLink={false}
        />
      </div>
    </div>

    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Pricing and rating variants</span>
        <span class="preview-badge">discount | rating</span>
      </div>
      <div class="preview-canvas preview-canvas--small-card-variants">
        <SmallCard
          state="Default"
          interactive={false}
          title={title}
          price="€45.52"
          originalPrice="€56.904"
          akcija={false}
          oldPrice={false}
        />
        <SmallCard
          state="Default"
          interactive={false}
          title={title}
          price="€45.52"
          originalPrice="€56.904"
          rating={5}
          reviewCount={890}
        />
      </div>
    </div>
  </div>

  <div class="docs-section">
    <h2 class="docs-section-title">In context</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Rail usage</span>
        <span class="preview-badge">mixed states in a product rail</span>
      </div>
      <div class="preview-canvas preview-canvas--small-card-rail">
        <SmallCard
          state="Default"
          interactive={false}
          title={title}
          price="€45.52"
          originalPrice="€56.904"
        />
        <SmallCard
          state="Hover"
          interactive={false}
          title={hoverTitle}
          price="€45.52"
          originalPrice="€56.904"
        />
        <SmallCard
          state="Default"
          interactive={false}
          title={title}
          price="€45.52"
          originalPrice="€56.904"
          akcija={false}
          oldPrice={false}
          rating={5}
          reviewCount={890}
        />
      </div>
    </div>
  </div>

  <div class="docs-section">
    <h2 class="docs-section-title">Token reference</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Design tokens used</span>
        <span class="preview-badge">layout | colors | typography</span>
      </div>
      <div class="preview-props">
        <pre><span class="prop-type">Layout</span>
  width             247px
  border-radius     <span class="prop-value">--radius-200</span> (8px)
  content padding   <span class="prop-value">--space-5</span> (16px)
  tag gap           <span class="prop-value">--space-3</span> (8px)
  hover shadow      0 4px 4px rgba(0,0,0,0.25)

<span class="prop-type">Typography</span>
  title             <span class="prop-value">--scale-03</span> (16px) / <span class="prop-value">--weight-semibold</span>
  price             <span class="prop-value">--scale-03</span> (16px) / <span class="prop-value">--weight-semibold</span>
  meta text         <span class="prop-value">--scale-00</span> (11px) / <span class="prop-value">--weight-regular</span>
  button text       <span class="prop-value">--scale-03</span> (16px) / <span class="prop-value">--weight-semibold</span>

<span class="prop-type">Semantic tags</span>
  jaunums           <span class="prop-value">--rating</span> + <span class="prop-value">--foreground</span>
  akcija            <span class="prop-value">--promo</span> + <span class="prop-value">--promo-fg</span>
  experts           default -> <span class="prop-value">--positive-fg</span>, hover -> <span class="prop-value">--positive</span> + <span class="prop-value">--positive-fg</span>

<span class="prop-type">Hover additions</span>
  button            <span class="prop-value">--primary</span> + <span class="prop-value">--primary-foreground</span>
  efficiency rows   <span class="prop-value">--border</span> separators + green energy badge
  link              <span class="prop-value">--primary</span></pre>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .preview-canvas--small-card-states {
    display: grid;
    grid-template-columns: repeat(2, minmax(247px, 1fr));
    gap: var(--space-6);
    width: 100%;
    justify-content: stretch;
  }

  .small-card-state {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    align-items: center;
    padding: var(--space-5);
    background: var(--card);
    border: var(--stroke-border) solid var(--border);
    border-radius: var(--radius-200);
  }

  .small-card-state-label {
    font-size: var(--scale-01);
    font-weight: var(--weight-semibold);
    color: var(--foreground);
  }

  .preview-canvas--small-card-interactive {
    justify-content: center;
    min-height: 587px;
  }

  .preview-canvas--small-card-variants {
    justify-content: flex-start;
  }

  .preview-canvas--small-card-rail {
    justify-content: flex-start;
    overflow-x: auto;
    flex-wrap: nowrap;
    padding-bottom: var(--space-3);
  }

  @media (max-width: 820px) {
    .preview-canvas--small-card-states {
      grid-template-columns: 1fr;
    }
  }
</style>
