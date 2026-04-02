<script>
  import Tab from '../components/Tab.svelte';
  import TabGroup from '../components/TabGroup.svelte';
  import DocsPageHeader from './DocsPageHeader.svelte';
  import { figmaLinks } from './figmaLinks.js';

  const figmaItems = Array.from({ length: 7 }, () => 'Tab Name');
  const demoItems = ['Overview', 'Specs', 'Reviews', 'Support', 'Delivery'];

  let defaultSurfaceIndex = 0;
  let surfaceTwoIndex = 4;
</script>

<div>
  <DocsPageHeader
    title="Tab & TabGroup"
    description="Pill-style tab controls documented from the Figma component and group sets. This page covers the single tab first, then the tab group surfaces and selection behavior."
  />

  <div class="docs-page-link-row tabs-link-row">
    <a
      class="docs-figma-link"
      href={figmaLinks.tab.url}
      target="_blank"
      rel="noreferrer"
      aria-label={figmaLinks.tab.label}
    >
      <span>{figmaLinks.tab.label}</span>
    </a>

    <a
      class="docs-figma-link"
      href={figmaLinks.tabGroup.url}
      target="_blank"
      rel="noreferrer"
      aria-label={figmaLinks.tabGroup.label}
    >
      <span>{figmaLinks.tabGroup.label}</span>
    </a>
  </div>

  <div class="docs-section">
    <h2 class="docs-section-title">Tab</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Default and active states</span>
        <span class="preview-badge">2 Figma variants</span>
      </div>
      <div class="preview-canvas preview-canvas--tab">
        <div class="tab-state-card">
          <span class="tab-state-label">State: Default</span>
          <Tab state="Default" />
        </div>

        <div class="tab-state-card">
          <span class="tab-state-label">State: Active</span>
          <Tab state="Active" />
        </div>
      </div>
      <div class="preview-props">
        <pre><span class="prop-key">state</span>    <span class="prop-type">string</span>   <span class="prop-value">'Default'</span>   - <span class="prop-value">'Default'</span> | <span class="prop-value">'Active'</span>
<span class="prop-key">label</span>    <span class="prop-type">string</span>   <span class="prop-value">'Tab Name'</span>  - visible tab text
<span class="prop-key">onclick</span>  <span class="prop-type">function</span> <span class="prop-value">undefined</span>   - optional click handler</pre>
      </div>
    </div>
  </div>

  <div class="docs-section">
    <h2 class="docs-section-title">TabGroup</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Figma surfaces</span>
        <span class="preview-badge">Default | Surface2</span>
      </div>
      <div class="preview-canvas preview-canvas--groups">
        <div class="group-card">
          <div class="group-meta">
            <span class="group-title">Surface: Default</span>
            <span class="group-note">Raised surface with the first tab active.</span>
          </div>
          <div class="group-shell">
            <TabGroup
              items={figmaItems}
              surface="Default"
              activeIndex={0}
              ariaLabel="Default surface tab group"
            />
          </div>
        </div>

        <div class="group-card">
          <div class="group-meta">
            <span class="group-title">Surface: Surface2</span>
            <span class="group-note">Muted surface with the fifth tab active.</span>
          </div>
          <div class="group-shell">
            <TabGroup
              items={figmaItems}
              surface="Surface2"
              activeIndex={4}
              ariaLabel="Surface2 tab group"
            />
          </div>
        </div>
      </div>
      <div class="preview-props">
        <pre><span class="prop-key">surface</span>     <span class="prop-type">string</span>   <span class="prop-value">'Default'</span>   - <span class="prop-value">'Default'</span> | <span class="prop-value">'Surface2'</span>
<span class="prop-key">items</span>       <span class="prop-type">string[]</span> <span class="prop-value">['Tab Name', ...]</span> - ordered tab labels
<span class="prop-key">activeIndex</span> <span class="prop-type">number</span>   <span class="prop-value">0</span>            - currently active tab
<span class="prop-key">onselect</span>    <span class="prop-type">function</span> <span class="prop-value">undefined</span>    - receives the clicked tab index
<span class="prop-key">ariaLabel</span>   <span class="prop-type">string</span>   <span class="prop-value">'Tab group'</span>  - accessible label for the tablist</pre>
      </div>
    </div>

    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Interactive selection</span>
        <span class="preview-badge">click tabs to change active state</span>
      </div>
      <div class="preview-canvas preview-canvas--groups">
        <div class="group-card">
          <div class="group-meta">
            <span class="group-title">Default surface</span>
            <span class="group-note">Selectable example with custom labels.</span>
          </div>
          <div class="group-shell">
            <TabGroup
              items={demoItems}
              surface="Default"
              activeIndex={defaultSurfaceIndex}
              onselect={(index) => defaultSurfaceIndex = index}
              ariaLabel="Interactive default surface tab group"
            />
          </div>
        </div>

        <div class="group-card">
          <div class="group-meta">
            <span class="group-title">Surface2</span>
            <span class="group-note">Same interaction model on the muted surface.</span>
          </div>
          <div class="group-shell">
            <TabGroup
              items={demoItems}
              surface="Surface2"
              activeIndex={surfaceTwoIndex}
              onselect={(index) => surfaceTwoIndex = index}
              ariaLabel="Interactive surface2 tab group"
            />
          </div>
        </div>
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
        <pre><span class="prop-type">Tab layout</span>
  padding-y      <span class="prop-value">--space-4</span> (12px)
  padding-x      <span class="prop-value">--space-7</span> (24px)
  border-radius  <span class="prop-value">--radius-full</span>

<span class="prop-type">Tab typography</span>
  font-family    <span class="prop-value">--font-family</span>
  font-size      <span class="prop-value">--scale-02</span> (14px)
  font-weight    <span class="prop-value">--weight-regular</span> (400)

<span class="prop-type">Tab colors</span>
  default text   <span class="prop-value">--foreground</span>
  active fill    <span class="prop-value">--primary</span>
  active text    <span class="prop-value">--primary-foreground</span>

<span class="prop-type">TabGroup surface</span>
  container pad  <span class="prop-value">--space-2</span> (4px)
  radius         <span class="prop-value">--radius-full</span>
  default bg     <span class="prop-value">--surface-raised</span>
  surface2 bg    <span class="prop-value">--surface-muted</span></pre>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .tabs-link-row {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3);
  }

  .preview-canvas--tab {
    justify-content: stretch;
  }

  .tab-state-card {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    min-width: 200px;
    padding: var(--space-5);
    background: var(--card);
    border: var(--stroke-border) solid var(--border);
    border-radius: var(--radius-200);
  }

  .tab-state-label,
  .group-title {
    font-size: var(--scale-01);
    font-weight: var(--weight-semibold);
    color: var(--foreground);
  }

  .preview-canvas--groups {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: var(--space-5);
    width: 100%;
  }

  .group-card {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    padding: var(--space-5);
    background: var(--card);
    border: var(--stroke-border) solid var(--border);
    border-radius: var(--radius-200);
  }

  .group-meta {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  .group-note {
    font-size: var(--scale-00);
    color: var(--muted-foreground);
    line-height: 1.2;
  }

  .group-shell {
    width: 100%;
    overflow-x: auto;
    padding-bottom: var(--space-1);
  }

  @media (max-width: 640px) {
    .tabs-link-row {
      flex-direction: column;
    }

    .tab-state-card {
      min-width: 0;
      width: 100%;
    }
  }
</style>
