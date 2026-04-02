<script>
  /** @type {'Default' | 'Round'} */
  export let shape = 'Default';
  /** @type {'Default' | 'Mouse-down' | 'Error' | 'Disabled'} */
  export let state = 'Default';
  export let value = 'sdadadada';
  export let iconStart = true;
  export let iconEnd = true;

  const isDisabled = state === 'Disabled';
  const isError = state === 'Error';
  const isDefaultState = state === 'Default';
  const isRound = shape === 'Round';

  $: radius = isRound ? '32px' : 'var(--radius-200)';
  $: paddingX = isRound ? '24px' : 'var(--space-5)';
  $: borderColor = isError ? 'var(--destructive)' : 'var(--border)';
  $: tone = isDefaultState ? 'var(--primary)' : 'var(--foreground)';
  $: opacity = isDisabled ? '0.4' : '1';
</script>

<label
  class="input-field"
  style="
    --_radius: {radius};
    --_padding-x: {paddingX};
    --_border: {borderColor};
    --_tone: {tone};
    --_opacity: {opacity};
  "
>
  {#if iconStart}
    <span class="icon" aria-hidden="true">
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8.75" cy="8.75" r="4.75" stroke="currentColor" stroke-width="1.5" />
        <path d="M12.5 12.5L16 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
      </svg>
    </span>
  {/if}

  <input
    class="input"
    type="text"
    {value}
    aria-label="Input field"
    aria-invalid={isError}
    disabled={isDisabled}
  />

  {#if iconEnd}
    <span class="icon" aria-hidden="true">
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.75 10.5L8 13.75L15.25 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </span>
  {/if}
</label>

<style lang="scss">
  .input-field {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    width: 339px;
    height: 44px;
    padding: var(--space-4) var(--_padding-x);
    background: var(--surface-raised);
    border: var(--stroke-border) solid var(--_border);
    border-radius: var(--_radius);
    color: var(--_tone);
    opacity: var(--_opacity);
    box-sizing: border-box;
    overflow: hidden;
  }

  .input {
    flex: 1 1 auto;
    min-width: 0;
    border: none;
    background: transparent;
    color: currentColor;
    font-family: var(--font-family);
    font-size: var(--scale-02);
    font-weight: var(--weight-regular);
    line-height: 1.2;
    outline: none;
    padding: 0;

    &::placeholder {
      color: currentColor;
      opacity: 1;
    }
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    color: currentColor;
  }
</style>
