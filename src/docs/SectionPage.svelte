<script>
  import Section from '../components/Section.svelte';
  import DocsPageHeader from './DocsPageHeader.svelte';

  const figmaUrl = 'https://www.figma.com/design/M0unDHzmqnl1l9mBUoPD1y/Electrolux-Veikals--2nd-attempt-?node-id=59-4018&m=dev';
</script>

<div>
  <DocsPageHeader
    title="Section"
    description="Composite curated rail section with a featured editorial card, heading block, and horizontally scrollable product cards."
    figmaUrl={figmaUrl}
    figmaLabel="Open Section in Figma"
  />

  <div class="docs-section">
    <h2 class="docs-section-title">Preview</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Curated rail section</span>
        <span class="preview-badge">Section.svelte</span>
      </div>
      <div class="preview-canvas preview-canvas--section">
        <Section />
      </div>
      <div class="preview-props">
        <pre><span class="prop-key">props</span>  <span class="prop-type">none</span>  <span class="prop-value">n/a</span>  â€” current implementation is a fixed composition of ArticleCard + SmallCard rail</pre>
      </div>
    </div>
  </div>

  <div class="docs-section">
    <h2 class="docs-section-title">Structure</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Composition</span>
        <span class="preview-badge">layout</span>
      </div>
      <div class="preview-props">
        <pre><span class="prop-type">Grid</span>
  left column     494px feature card
  right column    flexible rail area
  gap             15px

<span class="prop-type">Rail header</span>
  subtitle        "Curated Rail"
  title           "Editorial picks from our experts"
  meta            picks count at the far right

<span class="prop-type">Rail content</span>
  cards           5 SmallCard instances
  scroll          horizontal with hidden scrollbar
  controls        circular previous / next buttons on hover</pre>
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
        <pre><span class="prop-type">Section</span>
  background      <span class="prop-value">--background</span>
  top border      1px <span class="prop-value">--border</span>
  padding-y       <span class="prop-value">--space-10</span> (48px)

<span class="prop-type">Rail heading</span>
  subtitle        <span class="prop-value">--scale-02</span> / 600 / <span class="prop-value">--muted-foreground</span>
  title           <span class="prop-value">--scale-05</span> / 600 / <span class="prop-value">--foreground</span>
  title gap       <span class="prop-value">--space-2</span> (4px)

<span class="prop-type">Cards rail</span>
  card gap        <span class="prop-value">--space-5</span> (16px)
  bottom padding  <span class="prop-value">--space-10</span> (48px)

<span class="prop-type">Scroll controls</span>
  background      <span class="prop-value">--card</span>
  border          1px <span class="prop-value">--border</span>
  radius          <span class="prop-value">--radius-full</span></pre>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .preview-canvas--section {
    justify-content: flex-start;
    overflow-x: auto;
    padding: 0;
  }

  .preview-canvas--section :global(.section) {
    min-width: 1200px;
    width: 100%;
  }
</style>
