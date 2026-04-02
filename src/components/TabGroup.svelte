<script>
  import { onMount, tick } from 'svelte';
  import Tab from './Tab.svelte';

  /** @type {'Default' | 'Surface2'} */
  export let surface = 'Default';
  export let items = Array.from({ length: 7 }, () => 'Tab Name');
  export let activeIndex = 0;
  export let onselect = undefined;
  export let ariaLabel = 'Tab group';

  $: isSurface2 = surface === 'Surface2';
  $: surfaceBackground = isSurface2 ? 'var(--surface-muted)' : 'var(--surface-raised)';

  let groupElement;
  let tabElements = [];
  let indicatorX = 0;
  let indicatorY = 0;
  let indicatorWidth = 0;
  let indicatorHeight = 0;
  let indicatorReady = false;

  function handleSelect(index) {
    onselect?.(index);
  }

  async function syncIndicator() {
    await tick();

    const activeTab = tabElements[activeIndex];
    if (!groupElement || !activeTab) return;

    indicatorX = activeTab.offsetLeft;
    indicatorY = activeTab.offsetTop;
    indicatorWidth = activeTab.offsetWidth;
    indicatorHeight = activeTab.offsetHeight;
    indicatorReady = true;
  }

  $: if (groupElement && items.length > 0 && activeIndex >= 0 && tabElements[activeIndex]) {
    syncIndicator();
  }

  onMount(() => {
    syncIndicator();

    const handleResize = () => {
      syncIndicator();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
</script>

<div
  class="tab-group"
  role="tablist"
  aria-label={ariaLabel}
  style="--_surface-background: {surfaceBackground};"
  bind:this={groupElement}
>
  <div
    class="tab-group-indicator"
    aria-hidden="true"
    style="
      --_indicator-x: {indicatorX}px;
      --_indicator-y: {indicatorY}px;
      --_indicator-width: {indicatorWidth}px;
      --_indicator-height: {indicatorHeight}px;
      --_indicator-opacity: {indicatorReady ? 1 : 0};
    "
  ></div>
  {#each items as item, index}
    <Tab
      label={item}
      state={index === activeIndex ? 'Active' : 'Default'}
      role="tab"
      ariaSelected={index === activeIndex}
      tabIndex={index === activeIndex ? 0 : -1}
      grouped={true}
      bind:element={tabElements[index]}
      onclick={() => handleSelect(index)}
    />
  {/each}
</div>

<style lang="scss">
  .tab-group {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0;
    width: max-content;
    max-width: 100%;
    padding: var(--space-2);
    border-radius: var(--radius-full);
    background: var(--_surface-background);
  }

  .tab-group-indicator {
    position: absolute;
    left: 0;
    top: 0;
    width: var(--_indicator-width);
    height: var(--_indicator-height);
    border-radius: var(--radius-full);
    background: var(--primary);
    transform: translate(var(--_indicator-x), var(--_indicator-y));
    transition: transform 0.22s ease, width 0.22s ease;
    opacity: var(--_indicator-opacity);
    pointer-events: none;
  }
</style>
