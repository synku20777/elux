<script>
  import InputField from '../components/InputField.svelte';
  import DocsPageHeader from './DocsPageHeader.svelte';
  import { figmaLinks } from './figmaLinks.js';
</script>

<div>
  <DocsPageHeader
    title="InputField"
    description="Search-style text field documented from the Figma component set with Default and Round shapes across four visual states."
    figmaUrl={figmaLinks.inputField.url}
    figmaLabel={figmaLinks.inputField.label}
  />

  <div class="docs-section">
    <h2 class="docs-section-title">All states</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Default and Round variants</span>
        <span class="preview-badge">8 Figma variants</span>
      </div>
      <div class="preview-canvas preview-canvas--inputs">
        <InputField shape="Default" state="Default" />
        <InputField shape="Round" state="Default" />
        <InputField shape="Default" state="Mouse-down" />
        <InputField shape="Round" state="Mouse-down" />
        <InputField shape="Default" state="Error" />
        <InputField shape="Round" state="Error" />
        <InputField shape="Default" state="Disabled" />
        <InputField shape="Round" state="Disabled" />
      </div>
      <div class="preview-props">
        <pre><span class="prop-key">shape</span>      <span class="prop-type">string</span>   <span class="prop-value">'Default'</span>   - <span class="prop-value">'Default'</span> | <span class="prop-value">'Round'</span>
<span class="prop-key">state</span>      <span class="prop-type">string</span>   <span class="prop-value">'Default'</span>   - <span class="prop-value">'Default'</span> | <span class="prop-value">'Mouse-down'</span> | <span class="prop-value">'Error'</span> | <span class="prop-value">'Disabled'</span>
<span class="prop-key">value</span>      <span class="prop-type">string</span>   <span class="prop-value">'sdadadada'</span> - displayed text value
<span class="prop-key">iconStart</span>  <span class="prop-type">boolean</span>  <span class="prop-value">true</span>        - show leading search icon
<span class="prop-key">iconEnd</span>    <span class="prop-type">boolean</span>  <span class="prop-value">true</span>        - show trailing check icon</pre>
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
        <InputField shape="Default" state="Default" iconStart={true} iconEnd={true} />
        <InputField shape="Default" state="Default" iconStart={true} iconEnd={false} />
        <InputField shape="Default" state="Default" iconStart={false} iconEnd={true} />
        <InputField shape="Default" state="Default" iconStart={false} iconEnd={false} />
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
  size           339x44px
  padding-y      <span class="prop-value">--space-4</span> (12px)
  padding-x      Default -> <span class="prop-value">--space-5</span> (16px), Round -> 24px
  radius         Default -> <span class="prop-value">--radius-200</span> (8px), Round -> 32px
  icon gap       <span class="prop-value">--space-3</span> (8px)

<span class="prop-type">Typography</span>
  font-family    <span class="prop-value">--font-family</span>
  font-size      <span class="prop-value">--scale-02</span> (14px)
  font-weight    <span class="prop-value">--weight-regular</span> (400)

<span class="prop-type">Colors</span>
  background     <span class="prop-value">--surface-raised</span>
  border         default -> <span class="prop-value">--border</span>, error -> <span class="prop-value">--destructive</span>
  text/icons     default -> <span class="prop-value">--primary</span>, active/error -> <span class="prop-value">--foreground</span>
  disabled       opacity 0.4 on the full control</pre>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .preview-canvas--inputs {
    justify-content: flex-start;
    display: grid;
    grid-template-columns: repeat(2, minmax(339px, 1fr));
    gap: var(--space-8) var(--space-7);
  }

  .preview-canvas--stack {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 860px) {
    .preview-canvas--inputs {
      grid-template-columns: 1fr;
    }
  }
</style>
