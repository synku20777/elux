<script>
  export let lines = [
    'Crafted from 100% Grade-A Italian cashmere',
    'with a brushed finish. Tailored fit, ribbed cuffs,',
    'and a quarter-zip closure.',
  ];
</script>

<div class="card-description">
  {#each lines as line}
    <p>{line}</p>
  {/each}
</div>

<style lang="scss">
  .card-description {
    width: min(100%, 355px);
    padding-bottom: var(--space-5);
    color: var(--foreground);
    font-family: var(--font-family);
    font-size: var(--scale-00);
    font-weight: var(--weight-regular);
    line-height: 1.2;
  }

  .card-description p {
    margin: 0;
  }
</style>
