<script>
  /** @type {string} */
  export let stock = '>10';

  function getStockVariant(value) {
    const normalized = `${value}`.trim();
    const lowered = normalized.toLowerCase();
    const numeric = Number.parseInt(normalized, 10);

    if (lowered === 'low' || lowered === '1 stk.' || (!Number.isNaN(numeric) && numeric <= 1)) {
      return 'Low';
    }

    if (normalized === '<10' || (!Number.isNaN(numeric) && numeric < 10)) {
      return '<10';
    }

    return '>10';
  }

  $: normalizedStock = `${stock}`.trim() || '>10';
  $: variant = getStockVariant(normalizedStock);
  $: dotColor = variant === 'Low'
    ? 'var(--destructive)'
    : variant === '<10'
      ? 'var(--rating)'
      : 'var(--positive-fg)';
  $: displayStock = variant === 'Low' && (normalizedStock === 'Low' || normalizedStock === '1')
    ? '1 stk.'
    : normalizedStock;
</script>

<div
  class="stock-indicator"
  data-stock-variant={variant}
  data-display-stock={displayStock}
  aria-label={`Pieejam\u012bba: ${displayStock}`}
  style="--_dot-color: {dotColor};"
>
  <span class="dot" aria-hidden="true"></span>
  <span class="label">Pieejamība: {stock}</span>
</div>

<style lang="scss">
  .stock-indicator {
    display: inline-flex;
    align-items: center;
    gap: var(--space-3);
    padding: var(--space-3) 0;
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: var(--radius-full);
    background-color: var(--_dot-color);
    flex-shrink: 0;
  }

  .label {
    display: none;
  }

  .stock-indicator::after {
    content: "Pieejam\012B ba: " attr(data-display-stock);
    font-family: var(--font-family);
    font-size: var(--scale-00);
    font-weight: 400;
    color: var(--foreground);
    line-height: 1.2;
    white-space: nowrap;
  }
</style>
