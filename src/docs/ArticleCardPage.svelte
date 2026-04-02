<script>
  import ArticleCard from '../components/ArticleCard.svelte';
  import { figmaLinks } from './figmaLinks.js';
</script>

<div>
  <h1 class="docs-page-title">ArticleCard</h1>
  <p class="docs-page-desc">Editorial card used in the Curated Rail section. Fixed 494×432px with a full-bleed background image, gradient overlay, and expert details.</p>

  <div class="docs-page-link-row">
    <a
      class="docs-figma-link"
      href={figmaLinks.articleCard.url}
      target="_blank"
      rel="noreferrer"
      aria-label={figmaLinks.articleCard.label}
    >
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path
          d="M5.667 1.333a2.333 2.333 0 0 0 0 4.667h2.666V1.333H5.667Zm0 6a2.333 2.333 0 1 0 0 4.667h2.666V7.333H5.667Zm4 0h1a2.333 2.333 0 1 0 0-4.666h-1v4.666Zm0 1.334V12a2.333 2.333 0 1 0 2.333-2.333H9.667Zm-4 4.666a2.333 2.333 0 1 0 0-4.666h2.666v2.666a2.333 2.333 0 0 1-2.666 2Z"
          fill="currentColor"
        />
      </svg>
      <span>{figmaLinks.articleCard.label}</span>
    </a>
  </div>

  <div class="docs-section">
    <h2 class="docs-section-title">Default</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Expert editorial card</span>
        <span class="preview-badge">ArticleCard.svelte</span>
      </div>
      <div class="preview-canvas" style="min-height: 500px; align-items: center;">
        <ArticleCard />
      </div>
      <div class="preview-props">
        <pre><span class="prop-key">expertName</span>   <span class="prop-type">string</span>  <span class="prop-value">'Vārds Uzvārds'</span>   — displayed as "{name} iesaka"
<span class="prop-key">expertTitle</span>  <span class="prop-type">string</span>                     — one-line expert description
<span class="prop-key">linkText</span>     <span class="prop-type">string</span>  <span class="prop-value">'Uzzinat vairak'</span>  — CTA link label
<span class="prop-key">linkHref</span>     <span class="prop-type">string</span>  <span class="prop-value">'#'</span>               — CTA link destination</pre>
      </div>
    </div>
  </div>

  <div class="docs-section">
    <h2 class="docs-section-title">Token reference</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Design tokens used</span>
        <span class="preview-badge">layout · typography</span>
      </div>
      <div class="preview-props">
        <pre><span class="prop-type">Layout</span>
  size           494×432px (fixed)
  border-radius  <span class="prop-value">--radius-200</span>  (8px)
  padding        <span class="prop-value">--space-8</span>  (32px)
  content gap    <span class="prop-value">--space-7</span>  (24px)
  shadow         4px 4px 13.4px rgba(0,0,0,0.25)

<span class="prop-type">Overlay</span>
  gradient       rgba(0,0,0,0) 45% → rgba(0,0,0,0.8)

<span class="prop-type">Typography</span>
  Heading        <span class="prop-value">--scale-05</span>  (23px) · <span class="prop-value">--weight-semibold</span>  · white
  Body           <span class="prop-value">--scale-02</span>  (14px) · <span class="prop-value">--weight-regular</span>   · white
  Link           <span class="prop-value">--scale-00</span>  (11px) · <span class="prop-value">--weight-regular</span>   · white</pre>
      </div>
    </div>
  </div>
</div>
