<script>
  import Button from '../components/Button.svelte';
  import DocsPageHeader from './DocsPageHeader.svelte';
  import { figmaLinks } from './figmaLinks.js';
</script>

<div>
  <DocsPageHeader
    title="Button"
    description="Primary interactive element. Supports 5 types and optional leading and trailing icons."
    figmaUrl={figmaLinks.button.url}
    figmaLabel={figmaLinks.button.label}
  />

  <div class="docs-section">
    <h2 class="docs-section-title">All types</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Default state</span>
        <span class="preview-badge">Button.svelte</span>
      </div>
      <div class="preview-canvas">
        <Button type="Default"   label="Default"   />
        <Button type="Secondary" label="Secondary" />
        <Button type="Border"    label="Border"    />
        <Button type="Ghost"     label="Ghost"     />
        <Button type="Disabled"  label="Disabled"  />
      </div>
      <div class="preview-props">
        <pre><span class="prop-key">type</span>       <span class="prop-type">string</span>   <span class="prop-value">'Default'</span>   — <span class="prop-value">'Default'</span> | <span class="prop-value">'Secondary'</span> | <span class="prop-value">'Border'</span> | <span class="prop-value">'Ghost'</span> | <span class="prop-value">'Disabled'</span>
<span class="prop-key">label</span>      <span class="prop-type">string</span>   <span class="prop-value">'Press me'</span>  — button label text
<span class="prop-key">iconStart</span>  <span class="prop-type">boolean</span>  <span class="prop-value">true</span>        — show icon before label
<span class="prop-key">iconEnd</span>    <span class="prop-type">boolean</span>  <span class="prop-value">true</span>        — show icon after label
<span class="prop-key">onclick</span>    <span class="prop-type">function</span> <span class="prop-value">undefined</span>   — click handler</pre>
      </div>
    </div>
  </div>

  <div class="docs-section">
    <h2 class="docs-section-title">Icon variants</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Icon placement</span>
        <span class="preview-badge">iconStart · iconEnd · none · both</span>
      </div>
      <div class="preview-canvas">
        <Button type="Default" label="Icon start" iconStart={true}  iconEnd={false} />
        <Button type="Default" label="Icon end"   iconStart={false} iconEnd={true}  />
        <Button type="Default" label="No icons"   iconStart={false} iconEnd={false} />
        <Button type="Default" label="Both icons" iconStart={true}  iconEnd={true}  />
      </div>
    </div>
  </div>

  <div class="docs-section">
    <h2 class="docs-section-title">Light variants</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Secondary, Border &amp; Ghost</span>
        <span class="preview-badge">on muted background</span>
      </div>
      <div class="preview-canvas" style="background: var(--surface-muted)">
        <Button type="Secondary" label="Secondary" />
        <Button type="Border"    label="Border"    />
        <Button type="Ghost"     label="Ghost"     />
      </div>
    </div>
  </div>

  <div class="docs-section">
    <h2 class="docs-section-title">Disabled</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Disabled state</span>
        <span class="preview-badge">type=Disabled</span>
      </div>
      <div class="preview-canvas">
        <Button type="Disabled" label="Disabled" />
        <Button type="Disabled" label="No icons" iconStart={false} iconEnd={false} />
      </div>
    </div>
  </div>

  <div class="docs-section">
    <h2 class="docs-section-title">Token reference</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Design tokens used</span>
        <span class="preview-badge">layout · typography · colors</span>
      </div>
      <div class="preview-props">
        <pre><span class="prop-type">Layout</span>
  padding        <span class="prop-value">--space-4</span> (12px) vertical · <span class="prop-value">--space-5</span> (16px) horizontal
  border-radius  <span class="prop-value">--radius-200</span> (8px)
  gap            <span class="prop-value">--space-3</span> (8px)

<span class="prop-type">Typography</span>
  font-family    <span class="prop-value">--font-family</span>
  font-size      <span class="prop-value">--scale-03</span> (16px)
  font-weight    <span class="prop-value">--weight-semibold</span> (600)

<span class="prop-type">Colors — Default</span>
  background     <span class="prop-value">--primary</span>            hover → <span class="prop-value">--primary-hover</span>
  color          <span class="prop-value">--primary-foreground</span>

<span class="prop-type">Colors — Secondary</span>
  background     <span class="prop-value">--secondary</span>          hover → <span class="prop-value">--secondary-hover</span>
  color          <span class="prop-value">--secondary-foreground</span>

<span class="prop-type">Colors — Border</span>
  background     <span class="prop-value">--card</span>               hover → <span class="prop-value">--surface-sunk</span>
  color          <span class="prop-value">--accent-foreground</span>
  border         1px solid <span class="prop-value">--border</span>

<span class="prop-type">Colors — Ghost</span>
  background     transparent          hover → <span class="prop-value">--surface-sunk</span>
  color          <span class="prop-value">--accent-foreground</span>

<span class="prop-type">Colors — Disabled</span>
  background     <span class="prop-value">--surface-muted</span>
  color          <span class="prop-value">--secondary</span>
  cursor         not-allowed</pre>
      </div>
    </div>
  </div>
</div>
