<script>
  import Link from '../components/Link.svelte';
  import DocsPageHeader from './DocsPageHeader.svelte';
  import { figmaLinks } from './figmaLinks.js';

  function preventNavigation(event) {
    event.preventDefault();
  }
</script>

<div>
  <DocsPageHeader
    title="Link"
    description="Text link with optional start and end icons, documented from the Figma component set across default and inverted surfaces."
    figmaUrl={figmaLinks.link.url}
    figmaLabel={figmaLinks.link.label}
  />

  <div class="docs-section">
    <h2 class="docs-section-title">All variants</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Default and inverted surfaces</span>
        <span class="preview-badge">8 Figma variants</span>
      </div>
      <div class="preview-canvas preview-canvas--links">
        <div class="variant-matrix">
          <div class="matrix-corner"></div>
          <div class="matrix-heading">Default surface</div>
          <div class="matrix-heading matrix-heading--inverted">Inverted surface</div>

          <div class="matrix-label">State: Default | Size: Default</div>
          <div class="matrix-cell">
            <Link state="Default" surface="Default" size="Default" />
          </div>
          <div class="matrix-cell matrix-cell--inverted">
            <Link state="Default" surface="Inverted" size="Default" />
          </div>

          <div class="matrix-label">State: Hover | Size: Default</div>
          <div class="matrix-cell">
            <Link state="Hover" surface="Default" size="Default" />
          </div>
          <div class="matrix-cell matrix-cell--inverted">
            <Link state="Hover" surface="Inverted" size="Default" />
          </div>

          <div class="matrix-label">State: Default | Size: Small</div>
          <div class="matrix-cell">
            <Link state="Default" surface="Default" size="Small" />
          </div>
          <div class="matrix-cell matrix-cell--inverted">
            <Link state="Default" surface="Inverted" size="Small" />
          </div>

          <div class="matrix-label">State: Hover | Size: Small</div>
          <div class="matrix-cell">
            <Link state="Hover" surface="Default" size="Small" />
          </div>
          <div class="matrix-cell matrix-cell--inverted">
            <Link state="Hover" surface="Inverted" size="Small" />
          </div>
        </div>
      </div>
      <div class="preview-props">
        <pre><span class="prop-key">state</span>      <span class="prop-type">string</span>   <span class="prop-value">'Default'</span>   - <span class="prop-value">'Default'</span> | <span class="prop-value">'Hover'</span>
<span class="prop-key">surface</span>    <span class="prop-type">string</span>   <span class="prop-value">'Default'</span>   - <span class="prop-value">'Default'</span> | <span class="prop-value">'Inverted'</span>
<span class="prop-key">size</span>       <span class="prop-type">string</span>   <span class="prop-value">'Default'</span>   - <span class="prop-value">'Default'</span> | <span class="prop-value">'Small'</span>
<span class="prop-key">label</span>      <span class="prop-type">string</span>   <span class="prop-value">'Link'</span>      - visible link text
<span class="prop-key">href</span>       <span class="prop-type">string</span>   <span class="prop-value">'#'</span>         - anchor destination
<span class="prop-key">iconStart</span>  <span class="prop-type">boolean</span>  <span class="prop-value">true</span>        - show leading icon
<span class="prop-key">iconEnd</span>    <span class="prop-type">boolean</span>  <span class="prop-value">true</span>        - show trailing icon
<span class="prop-key">current</span>    <span class="prop-type">boolean</span>  <span class="prop-value">false</span>       - render the link as the current page
<span class="prop-key">onclick</span>    <span class="prop-type">function</span> <span class="prop-value">undefined</span>  - optional click handler</pre>
      </div>
    </div>
  </div>

  <div class="docs-section">
    <h2 class="docs-section-title">Icon visibility</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Optional start and end icons</span>
        <span class="preview-badge">iconStart | iconEnd</span>
      </div>
      <div class="preview-canvas preview-canvas--stack">
        <Link iconStart={true} iconEnd={true} />
        <Link iconStart={true} iconEnd={false} />
        <Link iconStart={false} iconEnd={true} />
        <Link iconStart={false} iconEnd={false} />
      </div>
    </div>
  </div>

  <div class="docs-section">
    <h2 class="docs-section-title">Interactive behavior</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Live states</span>
        <span class="preview-badge">hover | pressed | focus | current</span>
      </div>
      <div class="preview-canvas preview-canvas--behavior">
        <div class="behavior-panel">
          <div class="behavior-row">
            <div class="behavior-label">Default surface</div>
            <div class="behavior-links">
              <Link label="Interactive link" href="#link-behavior" onclick={preventNavigation} />
              <Link label="Current page" href="#link-behavior" current={true} onclick={preventNavigation} />
            </div>
          </div>

          <div class="behavior-row behavior-row--inverted">
            <div class="behavior-label behavior-label--inverted">Inverted surface</div>
            <div class="behavior-links">
              <Link label="Interactive link" surface="Inverted" href="#link-behavior" onclick={preventNavigation} />
              <Link label="Current page" surface="Inverted" current={true} href="#link-behavior" onclick={preventNavigation} />
            </div>
          </div>
        </div>
      </div>
      <div class="preview-props">
        <pre><span class="prop-type">How to test</span>
  hover           move the pointer over the interactive link
  pressed         click and hold the interactive link
  focus           tab onto the link to view the focus ring
  current         compare against the example with <span class="prop-value">current=true</span></pre>
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
  icon size       16x16px
  gap             <span class="prop-value">--space-1</span> (2px)

<span class="prop-type">Typography</span>
  default size    <span class="prop-value">--scale-02</span> (14px) / <span class="prop-value">--weight-regular</span>
  small size      <span class="prop-value">--scale-00</span> (11px) / <span class="prop-value">--weight-regular</span>
  hover state     underline only; font size stays tied to the size prop

<span class="prop-type">Colors</span>
  default surface <span class="prop-value">--primary</span>
  hover surface   <span class="prop-value">--primary-hover</span>
  inverted        <span class="prop-value">--primary-foreground</span></pre>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .preview-canvas--links {
    justify-content: stretch;
  }

  .variant-matrix {
    display: grid;
    grid-template-columns: minmax(180px, 220px) minmax(0, 1fr) minmax(0, 1fr);
    gap: var(--space-4);
    width: 100%;
    align-items: stretch;
  }

  .matrix-corner,
  .matrix-heading,
  .matrix-label,
  .matrix-cell {
    border-radius: var(--radius-200);
    padding: var(--space-4);
  }

  .matrix-heading,
  .matrix-label {
    background: var(--card);
    border: var(--stroke-border) solid var(--border);
  }

  .matrix-heading {
    font-size: var(--scale-01);
    font-weight: var(--weight-semibold);
    color: var(--foreground);
  }

  .matrix-heading--inverted {
    background: var(--foreground);
    color: var(--primary-foreground);
  }

  .matrix-label {
    display: flex;
    align-items: center;
    font-size: var(--scale-01);
    color: var(--muted-foreground);
    line-height: 1.4;
  }

  .matrix-cell {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: var(--card);
    min-height: 56px;
  }

  .matrix-cell--inverted {
    background: var(--foreground);
  }

  .preview-canvas--stack {
    flex-direction: column;
    align-items: flex-start;
  }

  .preview-canvas--behavior {
    justify-content: stretch;
  }

  .behavior-panel {
    display: flex;
    flex-direction: column;
    gap: var(--space-5);
    width: 100%;
  }

  .behavior-row {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    padding: var(--space-5);
    background: var(--card);
    border-radius: var(--radius-200);
    border: var(--stroke-border) solid var(--border);
  }

  .behavior-row--inverted {
    background: var(--foreground);
    border-color: transparent;
  }

  .behavior-label {
    font-size: var(--scale-01);
    font-weight: var(--weight-semibold);
    color: var(--foreground);
  }

  .behavior-label--inverted {
    color: var(--primary-foreground);
  }

  .behavior-links {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-7);
    align-items: center;
  }

  @media (max-width: 760px) {
    .variant-matrix {
      grid-template-columns: 1fr;
    }
  }
</style>
