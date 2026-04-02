<script>
  /** @type {'Default' | 'Outlined' | 'Primary'} */
  export let style = 'Outlined';
  /** @type {'Akcija' | 'Info' | 'neutral' | 'Positive' | 'Jaunums'} */
  export let type = 'Akcija';
  export let label = 'Sale';

  const variants = {
    Akcija: {
      Default: {
        background: 'var(--promo)',
        color: 'var(--promo-fg)',
        border: 'none',
      },
      Outlined: {
        background: 'var(--card)',
        color: 'var(--promo-fg)',
        border: '1px solid var(--promo-fg)',
      },
    },
    Info: {
      Default: {
        background: 'var(--info)',
        color: 'var(--info-fg)',
        border: 'none',
      },
      Outlined: {
        background: 'var(--card)',
        color: 'var(--info-fg)',
        border: '1px solid var(--info-fg)',
      },
      Primary: {
        background: 'var(--info-fg)',
        color: 'var(--background)',
        border: 'none',
      },
    },
    neutral: {
      Default: {
        background: 'var(--accent)',
        color: 'var(--accent-foreground)',
        border: 'none',
      },
      Outlined: {
        background: 'var(--card)',
        color: 'var(--accent-foreground)',
        border: '1px solid var(--accent-foreground)',
      },
      Primary: {
        background: 'var(--accent-foreground)',
        color: 'var(--accent)',
        border: 'none',
      },
    },
    Positive: {
      Default: {
        background: 'var(--positive)',
        color: 'var(--positive-fg)',
        border: 'none',
      },
      Outlined: {
        background: 'var(--card)',
        color: 'var(--positive-fg)',
        border: '1px solid var(--positive-fg)',
      },
      Primary: {
        background: 'var(--positive-fg)',
        color: 'var(--background)',
        border: 'none',
      },
    },
    Jaunums: {
      Default: {
        background: 'var(--rating)',
        color: 'var(--foreground)',
        border: 'none',
      },
      Outlined: {
        background: 'var(--card)',
        color: 'var(--accent-foreground)',
        border: '1px solid var(--rating)',
      },
    },
  };

  $: typeVariants = variants[type] ?? variants.Akcija;
  $: currentVariant = typeVariants[style] ?? typeVariants.Default;
</script>

<span
  class="tag"
  style="
    --_tag-background: {currentVariant.background};
    --_tag-color: {currentVariant.color};
    --_tag-border: {currentVariant.border};
  "
>
  {label}
</span>

<style lang="scss">
  .tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-1) var(--space-3);
    border-radius: var(--radius-100);
    border: var(--_tag-border);
    background: var(--_tag-background);
    color: var(--_tag-color);
    font-family: var(--font-family);
    font-size: var(--scale-00);
    font-weight: var(--weight-semibold);
    line-height: 1.2;
    white-space: nowrap;
  }
</style>
