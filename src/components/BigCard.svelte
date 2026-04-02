<script>
  import { assetPath } from '../assetPath.js';
  import CardDescription from './CardDescription.svelte';
  import CardSpecsTable from './CardSpecsTable.svelte';
  import StockIndicator from './StockIndicator.svelte';
  import Tag from './Tag.svelte';

  export let title = 'Ve\u013cas ma\u0161\u012bna, 600.s\u0113rija \u201eSensiCare\u201c, ar \u201eAutoDose\u201c funkciju, ietilp\u012bba 9kg sadads';
  export let price = '\u20ac45.52';
  export let originalPrice = '\u20ac56.904';
  export let rating = 4;
  export let reviewCount = 211;
  export let stock = '>10';
  /** @type {'table' | 'description' | 'none'} */
  export let contentVariant = 'table';
  export let showLowestPrice = true;
  export let showOldPrice = true;
  export let showPriceTag = true;
  export let showDryerEfficiency = true;
  export let specRows = [
    { label: 'Ietilp\u012bba (kg)', value: '9' },
    { label: 'MAX. centrif\u016bgas apgriezieni', value: '1400rpm' },
    { label: 'Dzi\u013cums (mm)', value: '658' },
  ];
  export let descriptionLines = [
    'Crafted from 100% Grade-A Italian cashmere',
    'with a brushed finish. Tailored fit, ribbed cuffs,',
    'and a quarter-zip closure.',
  ];
  export let lowestPriceText = 'Zem\u0101k\u0101 cena p\u0113d\u0113jo 30 dienu laik\u0101:';
  export let lowestPriceValue = '\u20ac56.904';
  export let lowestPriceDiscountLabel = '-20%';
  export let addToCartLabel = 'Pievienot grozam';
  export let washEfficiencyLabel = 'Mazg\u0101\u0161anas energoeffiktivit\u0101te';
  export let dryerEfficiencyLabel = '\u017d\u0101v\u0113t\u0101ja energoeffiktivit\u0101te';
  export let productSheetLabel = 'Ra\u017eojuma inform\u0101cijas lapa';

  const imgProduct = assetPath('images/product-washer.svg');
  const imgStarFull = assetPath('images/star-full.svg');
  const imgStarHalf = assetPath('images/star-half.svg');
  const imgEnergyLabel = assetPath('images/energy-label-a.png');

  $: stars = Array.from({ length: 5 }, (_, index) => index < rating ? 'full' : 'half');
  $: hasContent = contentVariant !== 'none';
</script>

<div class="big-card">
  <div class="image-area">
    <div class="tags">
      <Tag type="Jaunums" style="Default" label="Jaunums" />
      <Tag type="Akcija" style="Default" label="Atlaide -20%" />
      <Tag type="Positive" style="Primary" label="Eksperti iesaka" />
    </div>

    <div class="image-container">
      <img src={imgProduct} alt={title} class="product-image" />
    </div>
  </div>

  <div class="content">
    <div class="title-wrap">
      <p class="title">{title}</p>
    </div>

    <div class="rating-row">
      <div class="stars" aria-hidden="true">
        {#each stars as type}
          <span class="star">
            <img src={type === 'full' ? imgStarFull : imgStarHalf} alt="" />
          </span>
        {/each}
      </div>
      <span class="review-count">({reviewCount})</span>
    </div>

    {#if hasContent}
      {#if contentVariant === 'description'}
        <CardDescription lines={descriptionLines} />
      {:else}
        <CardSpecsTable rows={specRows} />
      {/if}
    {/if}

    <div class="pricing">
      <div class="price-row">
        <div class="price-main">
          <span class="price-current">{price}</span>
          {#if showOldPrice}
            <span class="price-original">{originalPrice}</span>
          {/if}
        </div>

        {#if showPriceTag}
          <Tag type="Akcija" style="Default" label="Atlaide -20%" />
        {/if}
      </div>
      <span class="vat">Ieskaitot PVN</span>
    </div>

    <div class="stock-row">
      <StockIndicator {stock} />
    </div>

    <button class="add-to-cart" type="button">
      <span class="add-to-cart-icon" aria-hidden="true">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 3.5H4l1.8 8.1a1 1 0 0 0 1 .9h7.4a1 1 0 0 0 .98-.8L8.2 7H5.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="8" cy="15.5" r="1" fill="currentColor"/>
          <circle cx="14" cy="15.5" r="1" fill="currentColor"/>
        </svg>
      </span>
      <span>{addToCartLabel}</span>
    </button>

    {#if showLowestPrice}
      <div class="lowest-price">
        <span class="lowest-price-copy">{lowestPriceText}</span>
        <span class="lowest-price-value">{lowestPriceValue}</span>
        <Tag type="Akcija" style="Default" label={lowestPriceDiscountLabel} />
      </div>
    {/if}

    <div class="energy-section">
      <div class="energy-row energy-row--bordered">
        <span class="energy-label">{washEfficiencyLabel}</span>
        <img src={imgEnergyLabel} alt="Energy label A" class="energy-badge" />
      </div>

      {#if showDryerEfficiency}
        <div class="energy-row">
          <span class="energy-label">{dryerEfficiencyLabel}</span>
          <img src={imgEnergyLabel} alt="Energy label A" class="energy-badge" />
        </div>
      {/if}

      <a href="#product-sheet" class="product-sheet-link">
        <span>{productSheetLabel}</span>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <polyline points="15,3 21,3 21,9" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <line x1="10" y1="14" x2="21" y2="3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>
  </div>
</div>

<style lang="scss">
  .big-card {
    width: min(100%, 387px);
    min-width: min(315px, 100%);
    background: var(--card);
    border-radius: var(--radius-200);
    overflow: hidden;
  }

  .image-area {
    aspect-ratio: 387 / 287;
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    align-items: center;
    padding: var(--space-5);
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3);
    width: 100%;
  }

  .image-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 0;
  }

  .product-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    display: block;
  }

  .content {
    display: flex;
    flex-direction: column;
    padding: var(--space-5);
  }

  .title-wrap {
    padding-bottom: var(--space-2);
  }

  .title {
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    min-height: calc(1.2em * 3);
    max-height: calc(1.2em * 3);
    font-family: var(--font-family);
    font-size: var(--scale-02);
    font-weight: var(--weight-semibold);
    color: var(--foreground);
    line-height: 1.2;
    word-break: break-word;
  }

  .rating-row {
    display: flex;
    align-items: center;
    gap: var(--space-1);
    padding-bottom: var(--space-2);
  }

  .stars {
    display: flex;
    align-items: center;
    gap: 2px;
  }

  .star {
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .star img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .review-count {
    font-family: var(--font-family);
    font-size: var(--scale-00);
    font-weight: var(--weight-regular);
    color: var(--muted-foreground);
    line-height: 1.2;
    padding-left: var(--space-2);
  }

  .pricing {
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
    padding-bottom: var(--space-3);
  }

  .price-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space-3);
  }

  .price-main {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space-3);
  }

  .price-current {
    font-family: var(--font-family);
    font-size: var(--scale-03);
    font-weight: var(--weight-semibold);
    color: var(--foreground);
    line-height: 1.2;
    white-space: nowrap;
  }

  .price-original {
    font-family: var(--font-family);
    font-size: var(--scale-02);
    font-weight: var(--weight-regular);
    color: var(--muted-foreground);
    line-height: 1.2;
    text-decoration: line-through;
    white-space: nowrap;
  }

  .vat {
    font-family: var(--font-family);
    font-size: var(--scale-00);
    font-weight: var(--weight-regular);
    color: var(--muted-foreground);
    line-height: 1.2;
  }

  .stock-row {
    width: 100%;
  }

  .add-to-cart {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-3);
    width: 100%;
    margin-top: var(--space-3);
    padding: var(--space-4) var(--space-5);
    border: none;
    border-radius: var(--radius-200);
    background: var(--primary);
    color: var(--primary-foreground);
    font-family: var(--font-family);
    font-size: var(--scale-03);
    font-weight: var(--weight-semibold);
    line-height: 1.2;
    cursor: pointer;
  }

  .add-to-cart-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }

  .add-to-cart-icon svg {
    width: 20px;
    height: 20px;
    display: block;
  }

  .lowest-price {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space-2);
    padding-top: var(--space-3);
  }

  .lowest-price-copy,
  .lowest-price-value {
    font-family: var(--font-family);
    font-size: var(--scale-00);
    font-weight: var(--weight-regular);
    line-height: 1.2;
    color: var(--muted-foreground);
  }

  .lowest-price-value {
    text-decoration: line-through;
  }

  .energy-section {
    display: flex;
    flex-direction: column;
    padding-top: var(--space-3);
  }

  .energy-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-3);
    padding: var(--space-3) 0;
  }

  .energy-row--bordered {
    border-bottom: var(--stroke-border) solid var(--border);
  }

  .energy-label {
    flex: 1;
    min-width: 0;
    font-family: var(--font-family);
    font-size: var(--scale-00);
    font-weight: var(--weight-regular);
    color: var(--foreground);
    line-height: 1.2;
  }

  .energy-badge {
    width: 61px;
    height: 34px;
    object-fit: contain;
    flex-shrink: 0;
    display: block;
  }

  .product-sheet-link {
    display: inline-flex;
    align-items: center;
    gap: var(--space-1);
    width: fit-content;
    padding-top: var(--space-3);
    color: var(--primary);
    text-decoration: none;
    font-family: var(--font-family);
    font-size: var(--scale-00);
    font-weight: var(--weight-regular);
    line-height: 1.2;
  }

  .product-sheet-link svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
</style>
