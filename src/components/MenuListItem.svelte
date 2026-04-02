<script>
  export let label     = 'Menu item';
  export let shape     = 'Default';   // 'Default' | 'Round'
  export let size      = 'Default';   // 'Default' | 'Small'
  export let state     = 'Default';   // 'Default' | 'hover' | 'chosen'
  export let iconStart = true;
  export let iconEnd   = true;
  export let fullWidth = false;
  export let onclick   = undefined;

  $: height      = size === 'Small' ? '36px' : '48px';
  $: fontWeight  = size === 'Small' ? 'var(--weight-regular)' : 'var(--weight-semibold)';
  $: radius      = shape === 'Round' ? '40px' : '0px';
  $: width       = fullWidth ? '100%' : '190px';

  // Background
  $: bg = (() => {
    if (state === 'chosen' && shape === 'Default') return 'var(--background)';
    if (state === 'hover'  && shape === 'Default') return 'var(--accent)';
    return 'transparent';
  })();

  // Border
  $: border = (() => {
    if (state === 'chosen' && shape === 'Round')  return '1px solid var(--foreground)';
    if (state === 'hover'  && shape === 'Round')  return '1px solid var(--border)';
    return 'none';
  })();

  // Left accent border (chosen + Default shape only)
  $: accentBorder = (state === 'chosen' && shape === 'Default') ? '2px solid var(--ring)' : 'none';
</script>

<button
  class="mli"
  class:is-chosen={state === 'chosen'}
  class:is-default-state={state === 'Default'}
  class:is-round={shape === 'Round'}
  style="
    --_height: {height};
    --_fw: {fontWeight};
    --_radius: {radius};
    --_width: {width};
    --_bg: {bg};
    --_border: {border};
    --_accent-border: {accentBorder};
  "
  type="button"
  on:click={onclick}
  aria-pressed={state === 'chosen'}
>
  {#if iconStart}
    <span class="mli-icon">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="5" width="16" height="1.5" rx="0.75" fill="currentColor"/>
        <rect x="2" y="9.25" width="16" height="1.5" rx="0.75" fill="currentColor"/>
        <rect x="2" y="13.5" width="16" height="1.5" rx="0.75" fill="currentColor"/>
      </svg>
    </span>
  {/if}

  <span class="mli-label">{label}</span>

  {#if iconEnd}
    <span class="mli-icon mli-icon--end">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.5 4.5L13 10L7.5 15.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
  {/if}
</button>

<style lang="scss">
  .mli {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    width: var(--_width);
    min-width: 48px;
    height: var(--_height);
    padding: 0 var(--space-5);
    background: var(--_bg);
    border: var(--_border);
    border-radius: var(--_radius);
    border-left: var(--_accent-border);
    color: var(--foreground);
    font-family: var(--font-family);
    font-size: var(--scale-02);
    font-weight: var(--_fw);
    cursor: pointer;
    transition: background 0.15s ease, border-color 0.15s ease;
    text-align: left;
    box-sizing: border-box;
  }

  .mli.is-default-state:not(.is-chosen):hover {
    background: var(--accent);
  }

  .mli.is-default-state.is-round:not(.is-chosen):hover {
    background: transparent;
    border: 1px solid var(--border);
  }

  .mli-label {
    flex: 1;
  }

  .mli-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    color: var(--foreground);
  }

  .mli-icon--end {
    margin-left: auto;
  }
</style>
