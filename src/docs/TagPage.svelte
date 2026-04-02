<script>
  import Tag from '../components/Tag.svelte';
  import DocsPageHeader from './DocsPageHeader.svelte';
  import { figmaLinks } from './figmaLinks.js';

  const variantGroups = [
    {
      type: 'Akcija',
      note: 'Promo tag with default and outlined variants in the current Figma set.',
      styles: ['Default', 'Outlined'],
    },
    {
      type: 'Info',
      note: 'Informational tag with default, outlined, and primary variants.',
      styles: ['Default', 'Outlined', 'Primary'],
    },
    {
      type: 'neutral',
      note: 'Neutral tag with all three surface treatments.',
      styles: ['Default', 'Outlined', 'Primary'],
    },
    {
      type: 'Positive',
      note: 'Success tag with default, outlined, and primary variants.',
      styles: ['Default', 'Outlined', 'Primary'],
    },
    {
      type: 'Jaunums',
      note: 'New-item tag with default and outlined variants in the current Figma set.',
      styles: ['Default', 'Outlined'],
    },
  ];
</script>

<div>
  <DocsPageHeader
    title="Tag"
    description="Compact semantic tag documented from the Figma component set across promo, info, neutral, positive, and new-item variants."
    figmaUrl={figmaLinks.tag.url}
    figmaLabel={figmaLinks.tag.label}
  />

  <div class="docs-section">
    <h2 class="docs-section-title">All variants</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Figma variant groups</span>
        <span class="preview-badge">13 Figma variants</span>
      </div>
      <div class="preview-canvas preview-canvas--tags">
        {#each variantGroups as group}
          <div class="tag-group">
            <div class="tag-group-meta">
              <span class="tag-group-title">Type: {group.type}</span>
              <span class="tag-group-note">{group.note}</span>
            </div>

            <div class="tag-group-row">
              {#each group.styles as variantStyle}
                <div class="tag-example">
                  <span class="tag-example-label">Style: {variantStyle}</span>
                  <Tag type={group.type} style={variantStyle} label="Sale" />
                </div>
              {/each}
            </div>
          </div>
        {/each}
      </div>
      <div class="preview-props">
        <pre><span class="prop-key">style</span>   <span class="prop-type">string</span>   <span class="prop-value">'Outlined'</span>  - <span class="prop-value">'Default'</span> | <span class="prop-value">'Outlined'</span> | <span class="prop-value">'Primary'</span>
<span class="prop-key">type</span>    <span class="prop-type">string</span>   <span class="prop-value">'Akcija'</span>    - <span class="prop-value">'Akcija'</span> | <span class="prop-value">'Info'</span> | <span class="prop-value">'neutral'</span> | <span class="prop-value">'Positive'</span> | <span class="prop-value">'Jaunums'</span>
<span class="prop-key">label</span>   <span class="prop-type">string</span>   <span class="prop-value">'Sale'</span>       - visible tag text

<span class="prop-type">Figma support</span>
  Primary style is present for <span class="prop-value">Info</span>, <span class="prop-value">neutral</span>, and <span class="prop-value">Positive</span>
  <span class="prop-value">Akcija</span> and <span class="prop-value">Jaunums</span> currently ship as Default and Outlined only</pre>
      </div>
    </div>
  </div>

  <div class="docs-section">
    <h2 class="docs-section-title">Custom labels</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Product-facing examples</span>
        <span class="preview-badge">same styling, custom copy</span>
      </div>
      <div class="preview-canvas preview-canvas--labels">
        <Tag type="Jaunums" style="Default" label="Jaunums" />
        <Tag type="Akcija" style="Default" label="Atlaide -20%" />
        <Tag type="Positive" style="Primary" label="Eksperti iesaka" />
        <Tag type="Info" style="Outlined" label="Info" />
        <Tag type="neutral" style="Outlined" label="Neitrals" />
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
  padding-y      <span class="prop-value">--space-1</span> (2px)
  padding-x      <span class="prop-value">--space-3</span> (8px)
  border-radius  <span class="prop-value">--radius-100</span> (4px)

<span class="prop-type">Typography</span>
  font-family    <span class="prop-value">--font-family</span>
  font-size      <span class="prop-value">--scale-00</span> (11px)
  font-weight    <span class="prop-value">--weight-semibold</span> (600)

<span class="prop-type">Semantic colors</span>
  Akcija         <span class="prop-value">--promo</span> / <span class="prop-value">--promo-fg</span>
  Info           <span class="prop-value">--info</span> / <span class="prop-value">--info-fg</span>
  neutral        <span class="prop-value">--accent</span> / <span class="prop-value">--accent-foreground</span>
  Positive       <span class="prop-value">--positive</span> / <span class="prop-value">--positive-fg</span>
  Jaunums        <span class="prop-value">--rating</span> / <span class="prop-value">--foreground</span></pre>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .preview-canvas--tags {
    display: grid;
    grid-template-columns: repeat(2, minmax(260px, 1fr));
    gap: var(--space-5);
    width: 100%;
    justify-content: stretch;
  }

  .tag-group {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    padding: var(--space-5);
    background: var(--card);
    border: var(--stroke-border) solid var(--border);
    border-radius: var(--radius-200);
  }

  .tag-group-meta {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  .tag-group-title {
    font-size: var(--scale-01);
    font-weight: var(--weight-semibold);
    color: var(--foreground);
  }

  .tag-group-note {
    font-size: var(--scale-00);
    color: var(--muted-foreground);
    line-height: 1.2;
  }

  .tag-group-row {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-4);
  }

  .tag-example {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    align-items: flex-start;
  }

  .tag-example-label {
    font-size: var(--scale-00);
    color: var(--muted-foreground);
    line-height: 1.2;
  }

  .preview-canvas--labels {
    justify-content: flex-start;
  }

  @media (max-width: 760px) {
    .preview-canvas--tags {
      grid-template-columns: 1fr;
    }
  }
</style>
