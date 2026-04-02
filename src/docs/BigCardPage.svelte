<script>
  import BigCard from '../components/BigCard.svelte';
  import CardDescription from '../components/CardDescription.svelte';
  import CardSpecsTable from '../components/CardSpecsTable.svelte';
  import DocsPageHeader from './DocsPageHeader.svelte';
  import { figmaLinks } from './figmaLinks.js';

  const longTitle = 'Ve\u013cas ma\u0161\u012bna, 600.s\u0113rija \u201eSensiCare\u201c, ar \u201eAutoDose\u201c funkciju, ietilp\u012bba 9kg sadads';
  const internalTableRows = [
    { label: 'Ietilp\u012bba (kg)', value: '9' },
    { label: 'MAX. centrif\u016bgas apgriezieni', value: '1400rpm' },
    { label: 'Dzi\u013cums (mm)', value: '658' },
  ];
</script>

<div>
  <DocsPageHeader
    title="BigCard"
    description="Large product card documented from the Figma component with tags, product image, title/rating, an optional internal content block, pricing, stock, CTA, lowest-price note, and energy details."
    figmaUrl={figmaLinks.bigCard.url}
    figmaLabel={figmaLinks.bigCard.label}
  />

  <div class="docs-section">
    <h2 class="docs-section-title">Default</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Large product card</span>
        <span class="preview-badge">BigCard.svelte</span>
      </div>
      <div class="preview-canvas preview-canvas--big-card">
        <BigCard />
      </div>
      <div class="preview-props">
        <pre><span class="prop-key">title</span>               <span class="prop-type">string</span>   <span class="prop-value">'...'</span>          - 3-line product title
<span class="prop-key">price</span>               <span class="prop-type">string</span>   <span class="prop-value">'€45.52'</span>       - current price
<span class="prop-key">originalPrice</span>       <span class="prop-type">string</span>   <span class="prop-value">'€56.904'</span>      - struck-through original price
<span class="prop-key">rating</span>              <span class="prop-type">number</span>   <span class="prop-value">4</span>              - star rating out of 5
<span class="prop-key">reviewCount</span>         <span class="prop-type">number</span>   <span class="prop-value">211</span>            - review count label
<span class="prop-key">stock</span>               <span class="prop-type">string</span>   <span class="prop-value">'&gt;10'</span>         - forwarded to StockIndicator
<span class="prop-key">contentVariant</span>      <span class="prop-type">string</span>   <span class="prop-value">'table'</span>        - <span class="prop-value">'table'</span> | <span class="prop-value">'description'</span> | <span class="prop-value">'none'</span>
<span class="prop-key">showLowestPrice</span>     <span class="prop-type">boolean</span>  <span class="prop-value">true</span>           - render lowest-price note
<span class="prop-key">showOldPrice</span>        <span class="prop-type">boolean</span>  <span class="prop-value">true</span>           - render original price
<span class="prop-key">showPriceTag</span>        <span class="prop-type">boolean</span>  <span class="prop-value">true</span>           - render price discount tag
<span class="prop-key">showDryerEfficiency</span> <span class="prop-type">boolean</span>  <span class="prop-value">true</span>           - render second energy row
<span class="prop-key">specRows</span>            <span class="prop-type">array</span>    <span class="prop-value">3 rows</span>         - table rows for <span class="prop-value">'table'</span> content
<span class="prop-key">descriptionLines</span>    <span class="prop-type">array</span>    <span class="prop-value">3 lines</span>        - paragraph lines for <span class="prop-value">'description'</span> content</pre>
      </div>
    </div>
  </div>

  <div class="docs-section">
    <h2 class="docs-section-title">Content variants</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Table, description, or none</span>
        <span class="preview-badge">contentVariant</span>
      </div>
      <div class="preview-canvas preview-canvas--big-card-grid">
        <BigCard title={longTitle} contentVariant="table" />
        <BigCard title={longTitle} contentVariant="description" />
        <BigCard title={longTitle} contentVariant="none" />
      </div>
    </div>
  </div>

  <div class="docs-section">
    <h2 class="docs-section-title">Internal content</h2>
    <div class="docs-page-link-row docs-page-link-row--section">
      <a
        class="docs-figma-link"
        href={figmaLinks.bigCardTable.url}
        target="_blank"
        rel="noreferrer"
      >
        {figmaLinks.bigCardTable.label}
      </a>
      <a
        class="docs-figma-link"
        href={figmaLinks.bigCardDescription.url}
        target="_blank"
        rel="noreferrer"
      >
        {figmaLinks.bigCardDescription.label}
      </a>
    </div>

    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Table or description block</span>
        <span class="preview-badge">internal-only</span>
      </div>
      <div class="preview-canvas preview-canvas--big-card-content">
        <div class="card-content-variant">
          <span class="card-content-variant-label">Variant: Table</span>
          <CardSpecsTable rows={internalTableRows} />
        </div>
        <div class="card-content-variant">
          <span class="card-content-variant-label">Variant: Description</span>
          <CardDescription />
        </div>
      </div>
      <div class="preview-props">
        <pre><span class="prop-key">variant</span> <span class="prop-type">string</span>  <span class="prop-value">'table'</span>     - <span class="prop-value">'table'</span> | <span class="prop-value">'description'</span>
<span class="prop-key">rows</span>    <span class="prop-type">array</span>   <span class="prop-value">3 rows</span>      - label/value pairs for the table variant
<span class="prop-key">lines</span>   <span class="prop-type">array</span>   <span class="prop-value">3 lines</span>     - paragraph lines for the description variant

<span class="prop-type">Layout</span>
  width             355px
  bottom padding    <span class="prop-value">--space-5</span> (16px)
  content model     either bordered rows or plain multiline copy

<span class="prop-type">Typography</span>
  label/copy        <span class="prop-value">--scale-00</span> (11px) / <span class="prop-value">--weight-regular</span> / <span class="prop-value">--foreground</span>
  value             <span class="prop-value">--scale-00</span> (11px) / <span class="prop-value">--weight-regular</span> / <span class="prop-value">--accent-foreground</span>

<span class="prop-type">Table-only details</span>
  row padding       <span class="prop-value">--space-3</span> (8px) vertical
  row border        1px solid <span class="prop-value">--border</span></pre>
      </div>
    </div>
  </div>

  <div class="docs-section">
    <h2 class="docs-section-title">Optional sections</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Pricing and energy visibility</span>
        <span class="preview-badge">showLowestPrice | showOldPrice | showPriceTag | showDryerEfficiency</span>
      </div>
      <div class="preview-canvas preview-canvas--big-card-grid">
        <BigCard contentVariant="table" showLowestPrice={false} />
        <BigCard contentVariant="table" showOldPrice={false} showPriceTag={false} />
        <BigCard contentVariant="table" showDryerEfficiency={false} />
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
  width             min 315px | max 387px
  border-radius     <span class="prop-value">--radius-200</span> (8px)
  section padding   <span class="prop-value">--space-5</span> (16px)
  tag gap           <span class="prop-value">--space-3</span> (8px)

<span class="prop-type">Typography</span>
  title             <span class="prop-value">--scale-02</span> (14px) / <span class="prop-value">--weight-semibold</span>
  price             <span class="prop-value">--scale-03</span> (16px) / <span class="prop-value">--weight-semibold</span>
  meta text         <span class="prop-value">--scale-00</span> (11px) / <span class="prop-value">--weight-regular</span>

<span class="prop-type">Colors</span>
  card              <span class="prop-value">--card</span>
  text              <span class="prop-value">--foreground</span>
  muted text        <span class="prop-value">--muted-foreground</span>
  borders           <span class="prop-value">--border</span>
  CTA               <span class="prop-value">--primary</span> + <span class="prop-value">--primary-foreground</span>

<span class="prop-type">Internal content</span>
  table             reuses the internal card specs table block
  description       reuses the internal card description block</pre>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .docs-page-link-row--section {
    margin-bottom: var(--space-5);
    gap: var(--space-3);
    flex-wrap: wrap;
  }

  .preview-canvas--big-card {
    min-height: 0;
    align-items: center;
  }

  .preview-canvas--big-card-grid {
    justify-content: flex-start;
    align-items: flex-start;
  }

  .preview-canvas--big-card-content {
    justify-content: center;
    align-items: stretch;
  }

  .card-content-variant {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    min-width: 355px;
    padding: var(--space-5);
    background: var(--card);
    border: var(--stroke-border) solid var(--border);
    border-radius: var(--radius-200);
  }

  .card-content-variant-label {
    font-size: var(--scale-01);
    font-weight: var(--weight-semibold);
    color: var(--foreground);
  }

  @media (max-width: 820px) {
    .card-content-variant {
      min-width: 0;
      width: 100%;
    }
  }
</style>
