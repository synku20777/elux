<script>
  /** @type {'Default' | 'Active'} */
  export let state = 'Default';
  export let label = 'Tab Name';
  export let onclick = undefined;
  export let role = undefined;
  export let tabIndex = undefined;
  export let ariaSelected = undefined;
  export let grouped = false;
  export let element = undefined;

  $: isActive = state === 'Active';
</script>

<button
  class="tab"
  class:is-active={isActive}
  class:is-grouped={grouped}
  type="button"
  on:click={onclick}
  {role}
  bind:this={element}
  tabindex={tabIndex}
  aria-pressed={role ? undefined : isActive}
  aria-selected={ariaSelected}
>
  <span class="label">{label}</span>
</button>

<style lang="scss">
  .tab {
    appearance: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-4) var(--space-7);
    border: none;
    border-radius: var(--radius-full);
    background: transparent;
    color: var(--foreground);
    font-family: var(--font-family);
    font-size: var(--scale-02);
    font-weight: var(--weight-regular);
    line-height: 1.2;
    white-space: nowrap;
    cursor: pointer;
    transition: background 0.15s ease, color 0.15s ease;
  }

  .tab.is-active {
    background: var(--primary);
    color: var(--primary-foreground);
  }

  .tab.is-grouped {
    position: relative;
    z-index: 1;
    background: transparent;
  }

  .tab.is-grouped.is-active {
    background: transparent;
    color: var(--primary-foreground);
  }

  .label {
    flex-shrink: 0;
  }
</style>
