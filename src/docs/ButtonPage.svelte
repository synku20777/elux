<script>
  import Button from '../components/Button.svelte';
  import DocsPageHeader from './DocsPageHeader.svelte';
  import { figmaLinks } from './figmaLinks.js';

  const defaultTypes = ['Default', 'Secondary', 'Border', 'Ghost'];
  const hoverTypes = ['Default', 'Secondary', 'Border', 'Ghost'];
</script>

<div>
  <DocsPageHeader
    title="Button"
    description="Interactive button documented from the Figma component set with explicit Default and Hover states across Default, Secondary, Border, Ghost, and Disabled."
    figmaUrl={figmaLinks.button.url}
    figmaLabel={figmaLinks.button.label}
  />

  {#if false}
  <div class="docs-section">
    <h2 class="docs-section-title">Figma states</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Default, Hover, and Disabled</span>
        <span class="preview-badge">Button.svelte</span>
      </div>
      <div class="preview-canvas preview-canvas--button-states">
        <div class="button-state-grid">
          <div class="button-state-card">
            <span class="button-state-label">State: Default</span>
            {#each defaultTypes as variant}
              <Button type={variant} label="Press me" />
            {/each}
          </div>

          <div class="button-state-card">
            <span class="button-state-label">State: Hover</span>
            {#each hoverTypes as variant}
              <Button type={variant} state="Hover" label="Press me" />
            {/each}
          </div>

          <div class="button-state-card button-state-card--disabled">
            <span class="button-state-label">State: Disabled</span>
            <Button type="Disabled" label="Press me" />
          </div>
        </div>
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
  {/if}

  <div class="docs-section">
    <h2 class="docs-section-title">Figma states</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Default, Hover, and Disabled</span>
        <span class="preview-badge">Button.svelte</span>
      </div>
      <div class="preview-canvas preview-canvas--button-matrix">
        <div class="button-matrix">
          {#each defaultTypes as variant}
            <Button type={variant} label="Press me" />
          {/each}

          <div class="button-matrix__disabled">
            <Button type="Disabled" label="Press me" />
          </div>

          {#each hoverTypes as variant}
            <Button type={variant} state="Hover" label="Press me" />
          {/each}
        </div>
      </div>
      <div class="preview-props">
        <pre><span class="prop-key">type</span>       <span class="prop-type">string</span>   <span class="prop-value">'Default'</span>   - <span class="prop-value">'Default'</span> | <span class="prop-value">'Secondary'</span> | <span class="prop-value">'Border'</span> | <span class="prop-value">'Ghost'</span> | <span class="prop-value">'Disabled'</span>
<span class="prop-key">state</span>      <span class="prop-type">string</span>   <span class="prop-value">'Default'</span>   - <span class="prop-value">'Default'</span> | <span class="prop-value">'Hover'</span>
<span class="prop-key">label</span>      <span class="prop-type">string</span>   <span class="prop-value">'Press me'</span>  - button label text
<span class="prop-key">iconStart</span>  <span class="prop-type">boolean</span>  <span class="prop-value">true</span>        - show icon before label
<span class="prop-key">iconEnd</span>    <span class="prop-type">boolean</span>  <span class="prop-value">true</span>        - show icon after label
<span class="prop-key">onclick</span>    <span class="prop-type">function</span> <span class="prop-value">undefined</span>   - click handler

Figma note: the disabled variant is stored as <span class="prop-value">State=Hover, Type=Disabled</span> in the component set.</pre>
      </div>
    </div>
  </div>

  <div class="docs-section">
    <h2 class="docs-section-title">Icon variants</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Icon placement</span>
        <span class="preview-badge">iconStart | iconEnd | none | both</span>
      </div>
      <div class="preview-canvas">
        <Button type="Default" label="Press me" iconStart={true} iconEnd={false} />
        <Button type="Default" label="Press me" iconStart={false} iconEnd={true} />
        <Button type="Default" label="Press me" iconStart={false} iconEnd={false} />
        <Button type="Default" label="Press me" iconStart={true} iconEnd={true} />
      </div>
    </div>
  </div>

  <div class="docs-section">
    <h2 class="docs-section-title">Interactive preview</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Live hover behavior</span>
        <span class="preview-badge">Hover the buttons</span>
      </div>
      <div class="preview-canvas">
        <Button type="Default" label="Press me" />
        <Button type="Secondary" label="Press me" />
        <Button type="Border" label="Press me" />
        <Button type="Ghost" label="Press me" />
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
  min-height     44px
  padding        <span class="prop-value">--space-4</span> (12px) vertical | <span class="prop-value">--space-5</span> (16px) horizontal
  border-radius  <span class="prop-value">--radius-200</span> (8px)
  gap            <span class="prop-value">--space-3</span> (8px)

<span class="prop-type">Typography</span>
  font-family    <span class="prop-value">--font-family</span>
  font-size      <span class="prop-value">--scale-03</span> (16px)
  font-weight    <span class="prop-value">--weight-semibold</span> (600)
  letter-spacing <span class="prop-value">--kerning-paragraph</span>

<span class="prop-type">Colors - Default</span>
  background     <span class="prop-value">--primary</span>            hover -> <span class="prop-value">--primary-hover</span>
  color          <span class="prop-value">--primary-foreground</span>

<span class="prop-type">Colors - Secondary</span>
  background     <span class="prop-value">--secondary</span>          hover -> <span class="prop-value">--secondary-hover</span>
  color          <span class="prop-value">--secondary-foreground</span>

<span class="prop-type">Colors - Border</span>
  background     transparent          hover -> <span class="prop-value">--surface-raised</span>
  color          <span class="prop-value">--neutral-foreground</span>
  border         1px solid <span class="prop-value">--border</span>

<span class="prop-type">Colors - Ghost</span>
  background     transparent          hover -> <span class="prop-value">--surface-muted</span>
  color          <span class="prop-value">--neutral-foreground</span>

<span class="prop-type">Colors - Disabled</span>
  background     <span class="prop-value">--surface-muted</span>
  color          <span class="prop-value">--secondary</span>
  cursor         not-allowed</pre>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .preview-canvas--button-matrix {
    justify-content: center;
    background: #4e525b;
  }

  .button-matrix {
    display: grid;
    gap: 20px 32px;
    justify-content: center;
    align-items: center;
  }

  .button-matrix__disabled {
    justify-self: center;
  }

  @media (min-width: 980px) {
    .button-matrix {
      grid-template-columns: repeat(4, max-content) max-content;
    }

    .button-matrix__disabled {
      grid-column: 5;
      grid-row: 1 / span 2;
      align-self: center;
    }
  }

  @media (max-width: 979px) {
    .button-matrix {
      grid-template-columns: repeat(auto-fit, minmax(162px, max-content));
    }
  }
</style>
