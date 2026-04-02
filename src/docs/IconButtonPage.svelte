<script>
  import IconButton from '../components/IconButton.svelte';
  import DocsPageHeader from './DocsPageHeader.svelte';
  import { figmaLinks } from './figmaLinks.js';
</script>

<div>
  <DocsPageHeader
    title="IconButton"
    description="Icon-only button with the same 5 types as Button plus square and round shape variants."
    figmaUrl={figmaLinks.iconButton.url}
    figmaLabel={figmaLinks.iconButton.label}
  />

  <div class="docs-section">
    <h2 class="docs-section-title">Square</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">All types — Square</span>
        <span class="preview-badge">IconButton.svelte</span>
      </div>
      <div class="preview-canvas">
        <IconButton type="Default"   shape="Square" label="Default" />
        <IconButton type="Secondary" shape="Square" label="Secondary" />
        <IconButton type="Border"    shape="Square" label="Border" />
        <IconButton type="Ghost"     shape="Square" label="Ghost" />
        <IconButton type="Disabled"  shape="Square" label="Disabled" />
      </div>
      <div class="preview-props">
        <pre><span class="prop-key">type</span>    <span class="prop-type">string</span>   <span class="prop-value">'Default'</span>  — <span class="prop-value">'Default'</span> | <span class="prop-value">'Secondary'</span> | <span class="prop-value">'Border'</span> | <span class="prop-value">'Ghost'</span> | <span class="prop-value">'Disabled'</span>
<span class="prop-key">shape</span>   <span class="prop-type">string</span>   <span class="prop-value">'Square'</span>   — <span class="prop-value">'Square'</span> | <span class="prop-value">'Round'</span>
<span class="prop-key">label</span>   <span class="prop-type">string</span>   <span class="prop-value">''</span>         — aria-label for accessibility
<span class="prop-key">onclick</span> <span class="prop-type">function</span> <span class="prop-value">undefined</span>  — click handler</pre>
      </div>
    </div>
  </div>

  <div class="docs-section">
    <h2 class="docs-section-title">Round</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">All types — Round</span>
        <span class="preview-badge">shape=Round</span>
      </div>
      <div class="preview-canvas">
        <IconButton type="Default"   shape="Round" label="Default" />
        <IconButton type="Secondary" shape="Round" label="Secondary" />
        <IconButton type="Border"    shape="Round" label="Border" />
        <IconButton type="Ghost"     shape="Round" label="Ghost" />
        <IconButton type="Disabled"  shape="Round" label="Disabled" />
      </div>
    </div>
  </div>

  <div class="docs-section">
    <h2 class="docs-section-title">Shape comparison</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Square vs Round</span>
        <span class="preview-badge">per type</span>
      </div>
      <div class="preview-canvas">
        <div class="shape-pair">
          <IconButton type="Default"   shape="Square" label="Default square" />
          <IconButton type="Default"   shape="Round"  label="Default round"  />
        </div>
        <div class="shape-pair">
          <IconButton type="Secondary" shape="Square" label="Secondary square" />
          <IconButton type="Secondary" shape="Round"  label="Secondary round"  />
        </div>
        <div class="shape-pair">
          <IconButton type="Border"    shape="Square" label="Border square" />
          <IconButton type="Border"    shape="Round"  label="Border round"  />
        </div>
        <div class="shape-pair">
          <IconButton type="Ghost"     shape="Square" label="Ghost square" />
          <IconButton type="Ghost"     shape="Round"  label="Ghost round"  />
        </div>
      </div>
    </div>
  </div>

  <div class="docs-section">
    <h2 class="docs-section-title">Token reference</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Design tokens used</span>
        <span class="preview-badge">layout · colors</span>
      </div>
      <div class="preview-props">
        <pre><span class="prop-type">Layout</span>
  padding        <span class="prop-value">--space-4</span> (12px) all sides
  border-radius  Square → <span class="prop-value">--radius-200</span> (8px) · Round → <span class="prop-value">--radius-full</span> (9999px)

<span class="prop-type">Colors — same mapping as Button</span>
  Default    bg <span class="prop-value">--primary</span>        hover → <span class="prop-value">--primary-hover</span>     color <span class="prop-value">--primary-foreground</span>
  Secondary  bg <span class="prop-value">--secondary</span>      hover → <span class="prop-value">--secondary-hover</span>   color <span class="prop-value">--secondary-foreground</span>
  Border     bg <span class="prop-value">--card</span>           hover → <span class="prop-value">--surface-sunk</span>      color <span class="prop-value">--accent-foreground</span>  border 1px <span class="prop-value">--border</span>
  Ghost      bg transparent      hover → <span class="prop-value">--surface-sunk</span>      color <span class="prop-value">--accent-foreground</span>
  Disabled   bg <span class="prop-value">--surface-muted</span>  no hover                 color <span class="prop-value">--secondary</span></pre>
      </div>
    </div>
  </div>
</div>
