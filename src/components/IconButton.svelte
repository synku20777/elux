<script>
  /** @type {'Default' | 'Secondary' | 'Border' | 'Ghost' | 'Disabled'} */
  export let type = 'Default';
  /** @type {'Square' | 'Round'} */
  export let shape = 'Square';
  export let label = '';   // aria-label
  export let onclick = undefined;

  const disabled = type === 'Disabled';

  const variants = {
    Default:   { bg: 'var(--primary)',       hover: 'var(--primary-hover)',   color: 'var(--primary-foreground)',   border: 'none' },
    Secondary: { bg: 'var(--secondary)',     hover: 'var(--secondary-hover)', color: 'var(--secondary-foreground)', border: 'none' },
    Border:    { bg: 'var(--card)',          hover: 'var(--surface-sunk)',    color: 'var(--accent-foreground)',    border: '1px solid var(--border)' },
    Ghost:     { bg: 'transparent',          hover: 'var(--surface-sunk)',    color: 'var(--accent-foreground)',    border: 'none' },
    Disabled:  { bg: 'var(--surface-muted)', hover: 'var(--surface-muted)',  color: 'var(--secondary)',            border: 'none' },
  };

  $: v = variants[type] ?? variants.Default;
  $: radius = shape === 'Round' ? 'var(--radius-full)' : 'var(--radius-200)';
</script>

<button
  class="icon-btn"
  class:is-disabled={disabled}
  style="--_bg:{v.bg}; --_hover:{v.hover}; --_color:{v.color}; --_border:{v.border}; --_radius:{radius}"
  aria-label={label}
  {disabled}
  on:click={!disabled ? onclick : undefined}
>
  <span class="icon" aria-hidden="true">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 3.5H4l1.8 8.1a1 1 0 0 0 1 .9h7.4a1 1 0 0 0 .98-.8L8.2 7H5.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="8"  cy="15.5" r="1" fill="currentColor"/>
      <circle cx="14" cy="15.5" r="1" fill="currentColor"/>
    </svg>
  </span>
</button>

<style lang="scss">
  .icon-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-4);
    border-radius: var(--_radius);
    border: var(--_border);
    background: var(--_bg);
    color: var(--_color);
    cursor: pointer;
    transition: background 0.15s ease;
    overflow: hidden;
    flex-shrink: 0;

    &:not(.is-disabled):hover {
      background: var(--_hover);
    }

    &.is-disabled {
      cursor: not-allowed;
      pointer-events: none;
    }
  }

  .icon {
    display: flex;
    align-items: center;
    width: 20px;
    height: 20px;
  }
</style>
