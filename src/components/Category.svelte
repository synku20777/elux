<script>
  import { assetPath } from '../assetPath.js';

  /** @type {'Default' | 'Hover'} */
  export let state = 'Default';
  export let label = 'Veļas mazgājamās mašīnas ar žāvēšanu';
  export let href = '#';
  export let imageUrl = assetPath('images/product-washer.svg');
  export let onclick = undefined;

  $: isHover = state === 'Hover';
</script>

<a
  class="category"
  class:is-hover={isHover}
  href={href}
  on:click={onclick}
>
  <span class="figure">
    <span class="image-wrap">
      <img class="image" src={imageUrl} alt="" />
    </span>
  </span>

  <span class="label">{label}</span>
</a>

<style lang="scss">
  .category {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 180px;
    min-height: 233px;
    padding: 0 var(--space-5) var(--space-5);
    border-radius: var(--radius-100);
    background: var(--card);
    color: var(--neutral-foreground);
    text-decoration: none;
    box-sizing: border-box;
    overflow: hidden;
    transition: box-shadow 0.15s ease, color 0.15s ease;

    &:hover,
    &.is-hover {
      color: var(--foreground);
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }

    &:focus-visible {
      outline: 2px solid var(--ring);
      outline-offset: 2px;
    }
  }

  .figure {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: var(--space-5) var(--space-3);
  }

  .image-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 128px;
    height: 128px;
    flex-shrink: 0;
  }

  .image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .label {
    display: -webkit-box;
    width: 152px;
    max-width: 100%;
    min-height: 57px;
    font-family: var(--font-family);
    font-size: var(--scale-02);
    font-weight: var(--weight-semibold);
    line-height: 1.2;
    letter-spacing: var(--kerning-paragraph);
    text-align: center;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
