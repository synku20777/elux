<script>
  /** @type {'Default' | 'Hover'} */
  export let state = 'Default';
  /** @type {'Default' | 'Inverted'} */
  export let surface = 'Default';
  /** @type {'Default' | 'Small'} */
  export let size = 'Default';
  export let label = 'Link';
  export let href = '#';
  export let iconStart = true;
  export let iconEnd = true;
  export let current = false;
  export let onclick = undefined;

  const isStaticHover = state === 'Hover';
  const isInverted = surface === 'Inverted';
  const isDefaultSize = size === 'Default';

  $: baseColor = isInverted ? 'var(--primary-foreground)' : 'var(--primary)';
  $: hoverColor = isInverted ? 'var(--primary-foreground)' : 'var(--primary-hover)';
  $: activeColor = isInverted ? 'var(--secondary)' : 'var(--foreground)';
  $: fontSize = isDefaultSize ? 'var(--scale-02)' : 'var(--scale-00)';
</script>

<a
  class="link"
  class:is-static-hover={isStaticHover}
  class:is-current={current}
  href={href}
  aria-current={current ? 'page' : undefined}
  style="
    --_base-color: {baseColor};
    --_hover-color: {hoverColor};
    --_active-color: {activeColor};
    --_font-size: {fontSize};
  "
  on:click={onclick}
>
  {#if iconStart}
    <span class="icon" aria-hidden="true">
      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 8H12M3 8L6.5 4.5M3 8L6.5 11.5"
          fill="none"
          stroke="currentColor"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
  {/if}

  <span class="label">{label}</span>

  {#if iconEnd}
    <span class="icon" aria-hidden="true">
      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 8H12M3 8L6.5 4.5M3 8L6.5 11.5"
          fill="none"
          stroke="currentColor"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
  {/if}
</a>

<style lang="scss">
  .link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-1);
    color: var(--_base-color);
    text-decoration: none;
    transition: color 0.15s ease;
  }

  .label {
    font-family: var(--font-family);
    font-size: var(--_font-size);
    font-weight: var(--weight-regular);
    line-height: 1.2;
    text-decoration: none;
    text-underline-offset: 2px;
    white-space: nowrap;
    transition: text-decoration-color 0.15s ease;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: currentColor;
  }

  .icon svg {
    width: 16px;
    height: 16px;
    display: block;
  }

  .link.is-static-hover,
  .link:not(.is-static-hover):hover {
    color: var(--_hover-color);
  }

  .link.is-static-hover .label,
  .link:not(.is-static-hover):hover .label {
    text-decoration: underline;
  }

  .link:not(.is-static-hover):active,
  .link.is-current {
    color: var(--_active-color);
  }

  .link:not(.is-static-hover):active .label,
  .link.is-current .label {
    text-decoration: underline;
  }

  .link:focus-visible {
    outline: var(--stroke-focus-ring) solid var(--ring);
    outline-offset: 4px;
    border-radius: var(--radius-100);
  }
</style>
