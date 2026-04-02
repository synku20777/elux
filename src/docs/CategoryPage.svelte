<script>
  import Category from '../components/Category.svelte';
  import DocsPageHeader from './DocsPageHeader.svelte';
  import { figmaLinks } from './figmaLinks.js';

  function preventNavigation(event) {
    event.preventDefault();
  }
</script>

<div>
  <DocsPageHeader
    title="Category"
    description="Clickable category tile documented from the Figma component set with a fixed 128px visual, 3-line title support, and a hover shadow treatment."
    figmaUrl={figmaLinks.category.url}
    figmaLabel={figmaLinks.category.label}
  />

  <div class="docs-section">
    <h2 class="docs-section-title">Figma states</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Default and hover</span>
        <span class="preview-badge">2 Figma variants</span>
      </div>
      <div class="preview-canvas preview-canvas--category-states">
        <div class="category-state-grid">
          <div class="category-state-card">
            <span class="category-state-label">State: Default</span>
            <Category state="Default" onclick={preventNavigation} />
          </div>

          <div class="category-state-card">
            <span class="category-state-label">State: Hover</span>
            <Category state="Hover" onclick={preventNavigation} />
          </div>
        </div>
      </div>
      <div class="preview-props">
        <pre><span class="prop-key">state</span>      <span class="prop-type">string</span>   <span class="prop-value">'Default'</span>   - <span class="prop-value">'Default'</span> | <span class="prop-value">'Hover'</span>
<span class="prop-key">label</span>      <span class="prop-type">string</span>   <span class="prop-value">'Veļas mazgājamās mašīnas ar žāvēšanu'</span> - visible category title
<span class="prop-key">imageUrl</span>   <span class="prop-type">string</span>   <span class="prop-value">'product-washer.svg'</span> - 128x128 product visual
<span class="prop-key">href</span>       <span class="prop-type">string</span>   <span class="prop-value">'#'</span>         - anchor destination
<span class="prop-key">onclick</span>    <span class="prop-type">function</span> <span class="prop-value">undefined</span>  - optional click handler</pre>
      </div>
    </div>
  </div>

  <div class="docs-section">
    <h2 class="docs-section-title">Interactive behavior</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Live hover state</span>
        <span class="preview-badge">hover | focus</span>
      </div>
      <div class="preview-canvas preview-canvas--category-states">
        <Category onclick={preventNavigation} />
      </div>
      <div class="preview-props">
        <pre><span class="prop-type">How to test</span>
  hover           move the pointer over the card to view the shadow and label color shift
  focus           tab onto the card to view the keyboard focus ring</pre>
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
  width           180px
  min-height      233px
  padding-x       <span class="prop-value">--space-5</span> (16px)
  padding-bottom  <span class="prop-value">--space-5</span> (16px)
  figure padding  <span class="prop-value">--space-5</span> (16px) y | <span class="prop-value">--space-3</span> (8px) x
  radius          <span class="prop-value">--radius-100</span> (4px)
  image size      128x128px

<span class="prop-type">Typography</span>
  font-family     <span class="prop-value">--font-family</span>
  font-size       <span class="prop-value">--scale-02</span> (14px)
  font-weight     <span class="prop-value">--weight-semibold</span> (600)
  letter-spacing  <span class="prop-value">--kerning-paragraph</span>

<span class="prop-type">Colors</span>
  surface         <span class="prop-value">--card</span>
  label default   <span class="prop-value">--neutral-foreground</span>
  label hover     <span class="prop-value">--foreground</span>
  focus ring      <span class="prop-value">--ring</span>
  hover shadow    0 4px 4px rgba(0, 0, 0, 0.25)</pre>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .preview-canvas--category-states {
    background: #4e525b;
  }

  .category-state-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, max-content));
    gap: var(--space-5);
    justify-content: center;
    width: 100%;
  }

  .category-state-card {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    align-items: center;
  }

  .category-state-label {
    font-size: var(--scale-01);
    font-weight: var(--weight-semibold);
    color: var(--primary-foreground);
  }
</style>
