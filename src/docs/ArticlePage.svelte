<script>
  import Article from '../components/Article.svelte';
  import DocsPageHeader from './DocsPageHeader.svelte';
  import { figmaLinks } from './figmaLinks.js';
</script>

<div>
  <DocsPageHeader
    title="Article"
    description="Editorial image card documented from the Figma component with optional title, article body, and link blocks over a full-bleed background image."
    figmaUrl={figmaLinks.article.url}
    figmaLabel={figmaLinks.article.label}
  />

  <div class="docs-section">
    <h2 class="docs-section-title">Default</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Image card with content overlay</span>
        <span class="preview-badge">Article.svelte</span>
      </div>
      <div class="preview-canvas preview-canvas--article">
        <Article />
      </div>
      <div class="preview-props">
        <pre><span class="prop-key">title</span>      <span class="prop-type">string</span>   <span class="prop-value">'Preciza aprupe ar "AutoDose"'</span>  - heading text
<span class="prop-key">body</span>       <span class="prop-type">string</span>   <span class="prop-value">'...'</span>                             - supporting copy
<span class="prop-key">linkText</span>   <span class="prop-type">string</span>   <span class="prop-value">'Uzzinat vairak'</span>                  - CTA label
<span class="prop-key">href</span>       <span class="prop-type">string</span>   <span class="prop-value">'#'</span>                                - CTA destination
<span class="prop-key">imageUrl</span>   <span class="prop-type">string</span>   <span class="prop-value">'/images/article-41-4239.png'</span>   - background image
<span class="prop-key">showTitle</span>  <span class="prop-type">boolean</span>  <span class="prop-value">true</span>                               - render heading block
<span class="prop-key">showBody</span>   <span class="prop-type">boolean</span>  <span class="prop-value">true</span>                               - render body copy block
<span class="prop-key">showLink</span>   <span class="prop-type">boolean</span>  <span class="prop-value">true</span>                               - render CTA row</pre>
      </div>
    </div>
  </div>

  <div class="docs-section">
    <h2 class="docs-section-title">Optional blocks</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Title, body, and link visibility</span>
        <span class="preview-badge">showTitle | showBody | showLink</span>
      </div>
      <div class="preview-canvas preview-canvas--article preview-canvas--article-grid">
        <Article />
        <Article showBody={false} />
        <Article showLink={false} />
        <Article showTitle={false} />
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
  size           max-width 323px | aspect-ratio 323 / 460
  border-radius  <span class="prop-value">--radius-200</span> (8px)
  padding        clamps from <span class="prop-value">--space-5</span> to <span class="prop-value">--space-8</span>
  content gap    clamps from <span class="prop-value">--space-5</span> to <span class="prop-value">--space-7</span>

  responsive     shrinks with its container instead of staying fixed

<span class="prop-type">Overlay</span>
  gradient       rgba(0,0,0,0) 45% -> rgba(0,0,0,0.8)

<span class="prop-type">Typography</span>
  heading        <span class="prop-value">--scale-05</span> (23px) / <span class="prop-value">--weight-semibold</span>
  body           <span class="prop-value">--scale-02</span> (14px) / <span class="prop-value">--weight-regular</span>
  link           <span class="prop-value">--scale-02</span> (14px) / <span class="prop-value">--weight-regular</span>

<span class="prop-type">Colors</span>
  text           <span class="prop-value">--primary-foreground</span>
  image overlay  black gradient over background image</pre>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .preview-canvas--article {
    min-height: 0;
    align-items: center;
  }

  .preview-canvas--article-grid {
    min-height: 0;
  }
</style>
