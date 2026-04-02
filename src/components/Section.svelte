<script>
  import { assetPath } from '../assetPath.js';
  import ArticleCard from './ArticleCard.svelte';
  import SmallCard from './SmallCard.svelte';

  const imgArrowLeft = assetPath('images/arrow-left.svg');
  const imgArrowRight = assetPath('images/arrow-right.svg');

  const picks = [1, 2, 3, 4, 5];

  let scrollContainer;

  function scrollLeft()  { scrollContainer?.scrollBy({ left: -263, behavior: 'smooth' }); }
  function scrollRight() { scrollContainer?.scrollBy({ left:  263, behavior: 'smooth' }); }
</script>

<section class="section">
  <div class="grid">
    <ArticleCard />

    <div class="rail">
      <div class="rail-header">
        <div class="rail-headings">
          <p class="rail-subtitle">Curated Rail</p>
          <h2 class="rail-title">Editorial picks from our experts</h2>
        </div>
        <span class="picks-count">{picks.length} picks</span>
      </div>

      <div class="scroll-wrapper">
        <div class="products" bind:this={scrollContainer}>
          {#each picks as id (id)}
            <SmallCard />
          {/each}
        </div>

        <button class="scroll-btn scroll-btn--left" on:click={scrollLeft} aria-label="Scroll left">
          <img src={imgArrowLeft} alt="" width="18" height="18" />
        </button>
        <button class="scroll-btn scroll-btn--right" on:click={scrollRight} aria-label="Scroll right">
          <img src={imgArrowRight} alt="" width="18" height="18" />
        </button>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  .section {
    background: var(--background);
    border-top: var(--stroke-border) solid var(--border);
    padding: var(--space-10) 156px;
  }

  .grid {
    display: grid;
    grid-template-columns: 494px minmax(0, 1fr);
    gap: 15px;
    align-items: start;
    position: relative;
  }

  .rail { display: flex; flex-direction: column; }

  .rail-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-bottom: 15px;
  }

  .rail-headings {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    width: 372px;
  }

  .rail-subtitle {
    font-family: var(--font-family);
    font-size: var(--scale-02);
    font-weight: 600;
    color: var(--muted-foreground);
    line-height: 1.2;
    margin: 0;
  }

  .rail-title {
    font-family: var(--font-family);
    font-size: var(--scale-05);
    font-weight: 600;
    color: var(--foreground);
    line-height: 1.2;
    margin: 0;
  }

  .picks-count {
    font-size: var(--scale-01);
    color: var(--muted-foreground);
    white-space: nowrap;
  }

  .scroll-wrapper {
    position: relative;
    overflow: visible;
    &:hover .scroll-btn { opacity: 1; }
  }

  .products {
    display: flex;
    gap: var(--space-5);
    align-items: flex-start;
    padding-bottom: calc(var(--space-10) + 112px);
    margin-bottom: -112px;
    overflow-x: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }
  }

  .scroll-btn {
    position: absolute;
    top: calc(50% - 24px);
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background: var(--card);
    border: var(--stroke-border) solid var(--border);
    border-radius: var(--radius-full);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.2s ease;
    padding: 1px;

  }

  .scroll-btn--left {
    left: 7px;
  }

  .scroll-btn--right {
    right: 7px;
  }
</style>
