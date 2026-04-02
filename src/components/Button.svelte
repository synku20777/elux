<script>
  /** @type {'Default' | 'Secondary' | 'Border' | 'Ghost' | 'Disabled'} */
  export let type = 'Default';
  /** @type {'Default' | 'Hover'} */
  export let state = 'Default';
  export let label = 'Press me';
  export let iconStart = true;
  export let iconEnd = true;
  export let onclick = undefined;

  const variants = {
    Default:   { bg: 'var(--primary)',       hover: 'var(--primary-hover)',   color: 'var(--primary-foreground)',   border: 'none' },
    Secondary: { bg: 'var(--secondary)',     hover: 'var(--secondary-hover)', color: 'var(--secondary-foreground)', border: 'none' },
    Border:    { bg: 'transparent',          hover: 'var(--surface-raised)',  color: 'var(--neutral-foreground)',   border: '1px solid var(--border)' },
    Ghost:     { bg: 'transparent',          hover: 'var(--surface-muted)',   color: 'var(--neutral-foreground)',   border: 'none' },
    Disabled:  { bg: 'var(--surface-muted)', hover: 'var(--surface-muted)',  color: 'var(--secondary)',            border: 'none' },
  };

  $: disabled = type === 'Disabled';
  $: isHover = state === 'Hover' && !disabled;
  $: variant = variants[type] ?? variants.Default;
  $: background = isHover ? variant.hover : variant.bg;
</script>

<button
  class="btn"
  class:is-disabled={disabled}
  class:is-hover={isHover}
  style="--_bg:{background}; --_hover:{variant.hover}; --_color:{variant.color}; --_border:{variant.border}"
  {disabled}
  on:click={!disabled ? onclick : undefined}
>
  {#if iconStart}
    <span class="icon" aria-hidden="true">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 3.5H4l1.8 8.1a1 1 0 0 0 1 .9h7.4a1 1 0 0 0 .98-.8L8.2 7H5.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="8"  cy="15.5" r="1" fill="currentColor"/>
        <circle cx="14" cy="15.5" r="1" fill="currentColor"/>
      </svg>
    </span>
  {/if}

  <span class="label">{label}</span>

  {#if iconEnd}
    <span class="icon" aria-hidden="true">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 3.5H4l1.8 8.1a1 1 0 0 0 1 .9h7.4a1 1 0 0 0 .98-.8L8.2 7H5.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="8"  cy="15.5" r="1" fill="currentColor"/>
        <circle cx="14" cy="15.5" r="1" fill="currentColor"/>
      </svg>
    </span>
  {/if}
</button>

<style lang="scss">
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-3);
    min-height: 44px;
    padding: var(--space-4) var(--space-5);
    border-radius: var(--radius-200);
    border: var(--_border);
    background: var(--_bg);
    color: var(--_color);
    font-family: var(--font-family);
    font-size: var(--scale-03);
    font-weight: var(--weight-semibold);
    line-height: 1.2;
    letter-spacing: var(--kerning-paragraph);
    white-space: nowrap;
    cursor: pointer;
    transition: background 0.15s ease;
    overflow: hidden;

    &:not(.is-disabled):not(.is-hover):hover {
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
    flex-shrink: 0;
    width: 20px;
    height: 20px;
  }

  .label {
    flex-shrink: 0;
  }
</style>
