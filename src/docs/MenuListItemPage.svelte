<script>
  import MenuListItem from '../components/MenuListItem.svelte';
  import DocsPageHeader from './DocsPageHeader.svelte';
  import { figmaLinks } from './figmaLinks.js';
</script>

<div>
  <DocsPageHeader
    title="MenuListItem"
    description="Navigation list item with optional leading and trailing icons, two shapes, two sizes, and three interaction states."
    figmaUrl={figmaLinks.menuListItem.url}
    figmaLabel={figmaLinks.menuListItem.label}
  />

  <div class="docs-section">
    <h2 class="docs-section-title">Default shape — all states</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Default / Hover / Chosen</span>
        <span class="preview-badge">shape=Default · size=Default</span>
      </div>
      <div class="preview-canvas" style="flex-direction: column; align-items: stretch; gap: 0; padding: 0;">
        <MenuListItem label="Default state"  shape="Default" state="Default" />
        <MenuListItem label="Hover state"    shape="Default" state="hover"   />
        <MenuListItem label="Chosen state"   shape="Default" state="chosen"  />
      </div>
      <div class="preview-props">
        <pre><span class="prop-key">label</span>     <span class="prop-type">string</span>   <span class="prop-value">'Menu item'</span>  — item text
<span class="prop-key">shape</span>     <span class="prop-type">string</span>   <span class="prop-value">'Default'</span>    — <span class="prop-value">'Default'</span> | <span class="prop-value">'Round'</span>
<span class="prop-key">size</span>      <span class="prop-type">string</span>   <span class="prop-value">'Default'</span>    — <span class="prop-value">'Default'</span> | <span class="prop-value">'Small'</span>
<span class="prop-key">state</span>     <span class="prop-type">string</span>   <span class="prop-value">'Default'</span>    — <span class="prop-value">'Default'</span> | <span class="prop-value">'hover'</span> | <span class="prop-value">'chosen'</span>
<span class="prop-key">iconStart</span> <span class="prop-type">boolean</span>  <span class="prop-value">true</span>         — show burger-menu icon before label
<span class="prop-key">iconEnd</span>   <span class="prop-type">boolean</span>  <span class="prop-value">true</span>         — show chevron icon after label
<span class="prop-key">onclick</span>   <span class="prop-type">function</span> <span class="prop-value">undefined</span>    — click handler</pre>
      </div>
    </div>
  </div>

  <div class="docs-section">
    <h2 class="docs-section-title">Round shape — all states</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Default / Hover / Chosen</span>
        <span class="preview-badge">shape=Round · size=Default</span>
      </div>
      <div class="preview-canvas" style="flex-direction: column; align-items: stretch; gap: var(--space-2);">
        <MenuListItem label="Default state" shape="Round" state="Default" />
        <MenuListItem label="Hover state"   shape="Round" state="hover"   />
        <MenuListItem label="Chosen state"  shape="Round" state="chosen"  />
      </div>
    </div>
  </div>

  <div class="docs-section">
    <h2 class="docs-section-title">Size variants</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Default (48px) vs Small (36px)</span>
        <span class="preview-badge">size=Default · size=Small</span>
      </div>
      <div class="preview-canvas" style="flex-direction: column; align-items: stretch; gap: 0;">
        <MenuListItem label="Default size — 48px" size="Default" state="chosen" />
        <MenuListItem label="Small size — 36px"   size="Small"   state="chosen" />
      </div>
    </div>
  </div>

  <div class="docs-section">
    <h2 class="docs-section-title">Icon variants</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Both / Start only / End only / None</span>
        <span class="preview-badge">iconStart · iconEnd</span>
      </div>
      <div class="preview-canvas" style="flex-direction: column; align-items: stretch; gap: 0;">
        <MenuListItem label="Both icons"      iconStart={true}  iconEnd={true}  />
        <MenuListItem label="Start icon only" iconStart={true}  iconEnd={false} />
        <MenuListItem label="End icon only"   iconStart={false} iconEnd={true}  />
        <MenuListItem label="No icons"        iconStart={false} iconEnd={false} />
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
        <pre><span class="prop-type">Layout</span>
  height (Default)  48px
  height (Small)    36px
  padding-x         <span class="prop-value">--space-5</span>  (16px)
  gap               <span class="prop-value">--space-4</span>  (12px)
  border-radius     Default → 0px · Round → 40px

<span class="prop-type">States — Default shape</span>
  default           bg transparent
  hover             bg <span class="prop-value">--accent</span>
  chosen            bg <span class="prop-value">--background</span>  + left border 2px <span class="prop-value">--ring</span>

<span class="prop-type">States — Round shape</span>
  default           bg transparent,   no border
  hover             bg transparent,   border 1px <span class="prop-value">--border</span>
  chosen            bg transparent,   border 1px <span class="prop-value">--foreground</span>

<span class="prop-type">Typography</span>
  font-size         <span class="prop-value">--scale-02</span>  (14px)
  font-weight       Default → <span class="prop-value">--weight-semibold</span>  (600)
                    Small   → <span class="prop-value">--weight-regular</span>   (400)</pre>
      </div>
    </div>
  </div>
</div>
