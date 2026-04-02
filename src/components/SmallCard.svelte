<script>
  import StockIndicator from './StockIndicator.svelte';
  import Tag from './Tag.svelte';

  export let akcija = true;
  export let oldPrice = true;
  export let title = 'Veļas mašīna , 600.sērija „SensiCare" , ar „AutoDose" funkciju , ietilpība 9kg';
  export let price = '€45.52';
  export let originalPrice = '€56.904';
  export let rating = 4;
  export let reviewCount = 211;
  export let stock = '>10';
  /** @type {'Default' | 'Hover'} */
  export let state = 'Default';
  export let interactive = true;
  export let showWashEfficiency = true;
  export let showDryerEfficiency = true;
  export let showProductSheetLink = true;

  const imgProduct = '/images/product-washer.svg';
  const imgStarFull = '/images/star-full.svg';
  const imgStarHalf = '/images/star-half.svg';
  const imgEnergyLabel = '/images/energy-label-a.png';
  const fallbackTitle = 'Ve\u013cas ma\u0161\u012bna, 600.s\u0113rija "SensiCare", ar "AutoDose" funkciju, ietilp\u012bba 9kg';
  const fallbackPrice = '\u20ac45.52';
  const fallbackOriginalPrice = '\u20ac56.904';
  const addToCartLabel = 'Pievienot grozam';
  const washEfficiencyLabel = 'Mazg\u0101\u0161anas energoeffiktivit\u0101te';
  const dryerEfficiencyLabel = '\u017d\u0101v\u0113t\u0101ja energoeffiktivit\u0101te';
  const productSheetLabel = 'Ra\u017eojuma inform\u0101cijas lapa';
  let isPointerHovering = false;
  let cardHeight = 0;
  let collapsedHeight = 0;
  const hoverHeight = 367;

  function normalizeCopy(value, fallback) {
    const normalized = `${value ?? ''}`.trim();

    if (!normalized || /[\u00C2-\u00C5]/.test(normalized)) {
      return fallback;
    }

    if (!normalized || /[ÃÄÅâ]/.test(normalized)) {
      return fallback;
    }

    return normalized;
  }

  function handlePointerEnter() {
    if (interactive && state !== 'Hover') {
      isPointerHovering = true;
    }
  }

  function handlePointerLeave() {
    isPointerHovering = false;
  }

  $: isHover = state === 'Hover' || (interactive && isPointerHovering);
  $: if (!isHover && cardHeight > 0) {
    collapsedHeight = cardHeight;
  }
  $: frameHeight = interactive && state !== 'Hover'
    ? (collapsedHeight || cardHeight || null)
    : (isHover ? hoverHeight : (collapsedHeight || cardHeight || null));
  $: stars = Array.from({ length: 5 }, (_, i) => i < rating ? 'full' : 'half');
  $: displayTitle = normalizeCopy(title, fallbackTitle);
  $: displayPrice = normalizeCopy(price, fallbackPrice);
  $: displayOriginalPrice = normalizeCopy(originalPrice, fallbackOriginalPrice);
</script>

<div class="card-frame" style:height={frameHeight ? `${frameHeight}px` : null}>
  <div
    class="card"
    class:is-hover={isHover}
    class:is-floating={interactive && isHover}
    role="group"
    aria-label="Small product card"
    on:pointerenter={handlePointerEnter}
    on:pointerleave={handlePointerLeave}
  >
    <div class="card-inner" bind:clientHeight={cardHeight}>
      <div class="image-area">
      <div class="tags">
        <Tag type="Jaunums" style="Default" label="Jaunums" />
        {#if akcija}
          <Tag type="Akcija" style="Default" label="Atlaide -20%" />
        {/if}
        <Tag type="Positive" style={isHover ? 'Default' : 'Primary'} label="Eksperti iesaka" />
      </div>
      <div class="image-container">
        <img src={imgProduct} alt={displayTitle} class="product-image" />
      </div>
    </div>

    <div class="content">
      <div class="title-wrap">
        <p class="title">{displayTitle}</p>
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

      <div class="pricing">
        <div class="price-row">
          <span class="price-current">{displayPrice}</span>
          {#if oldPrice}
            <span class="price-original">{displayOriginalPrice}</span>
          {/if}
        </div>
        {#if akcija}
          <div class="price-tag-row">
            <Tag type="Akcija" style="Default" label="Atlaide -20%" />
          </div>
        {/if}
        <span class="vat">Ieskaitot PVN</span>
      </div>

      <StockIndicator {stock} />

      {#if isHover}
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

        <div class="specs">
          {#if showWashEfficiency}
            <div class="spec-row spec-row--bordered">
              <span class="spec-label">Mazgāšanas energoeffiktivitāte</span>
              <span class="energy-badge" aria-label="Energy rating A">
                <img src={imgEnergyLabel} alt="Energy label A" class="energy-badge-image" />
              </span>
            </div>
          {/if}

          {#if showDryerEfficiency}
            <div class="spec-row">
              <span class="spec-label">Žāvētāja energoeffiktivitāte</span>
              <span class="energy-badge" aria-label="Energy rating A">
                <img src={imgEnergyLabel} alt="Energy label A" class="energy-badge-image" />
              </span>
            </div>
          {/if}

          {#if showProductSheetLink}
            <a href="#product-sheet" class="product-sheet-link">
              <span>Ražojuma informācijas lapa</span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <polyline points="15,3 21,3 21,9" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="10" y1="14" x2="21" y2="3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          {/if}
        </div>
      {/if}
    </div>
  </div>
</div>
</div>

<style lang="scss">
  .card-frame {
    min-width: 247px;
    max-width: 387px;
    width: 247px;
    flex: 0 0 247px;
    position: relative;
    overflow: visible;
  }

  .card {
    width: 100%;
    border-radius: var(--radius-200);
    isolation: isolate;
  }

  .card.is-floating {
    position: absolute;
    inset: 0 auto auto 0;
    z-index: 2;
  }

  .card-inner {
    display: flex;
    flex-direction: column;
    width: 100%;
    background: var(--card);
    border-radius: var(--radius-200);
    overflow: hidden;
    transition: box-shadow 0.2s ease, transform 0.2s ease;
  }

  .card.is-hover .card-inner {
    min-height: 367px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }

  .image-area {
    aspect-ratio: 387 / 287;
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    align-items: center;
    padding: var(--space-5);
    position: relative;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3);
    align-items: flex-start;
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
    width: 100%;
    box-sizing: border-box;
  }

  .card.is-hover .content {
    flex: 1;
    min-height: 0;
  }

  .title-wrap {
    padding-bottom: var(--space-2);
    overflow: hidden;
  }

  .title {
    font-family: var(--font-family);
    font-size: var(--scale-03);
    font-weight: var(--weight-semibold);
    color: var(--foreground);
    line-height: 1.2;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    min-height: calc(1.2em * 2);
    max-height: calc(1.2em * 2);
    word-break: break-word;
  }

  .card.is-hover .title {
    -webkit-line-clamp: 4;
    min-height: calc(1.2em * 4);
    max-height: calc(1.2em * 4);
  }

  .rating-row {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    padding-bottom: var(--space-2);
  }

  .stars {
    display: flex;
    align-items: center;
    gap: 2px;
  }

  .star {
    display: flex;
    align-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    img { width: 100%; height: 100%; object-fit: contain; }
  }

  .review-count {
    font-family: var(--font-family);
    font-size: var(--scale-00);
    font-weight: 400;
    color: var(--muted-foreground);
    line-height: 1.2;
    padding-left: var(--space-2);
    white-space: nowrap;
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

  .price-tag-row {
    display: flex;
    align-items: center;
  }

  .price-current {
    font-family: var(--font-family);
    font-size: var(--scale-03);
    font-weight: 600;
    color: var(--foreground);
    line-height: 1.2;
    white-space: nowrap;
  }

  .price-original {
    font-family: var(--font-family);
    font-size: var(--scale-02);
    font-weight: 400;
    color: var(--muted-foreground);
    line-height: 1.2;
    text-decoration: line-through;
    white-space: nowrap;
  }

  .vat {
    font-family: var(--font-family);
    font-size: var(--scale-00);
    font-weight: 400;
    color: var(--muted-foreground);
    line-height: 1.2;
  }

  .add-to-cart {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-3);
    width: 100%;
    margin-top: var(--space-2);
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

  .specs {
    display: flex;
    flex-direction: column;
    gap: 0;
    margin-top: var(--space-3);
  }

  .spec-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-3);
    padding: var(--space-3) 0;
  }

  .spec-row--bordered {
    border-bottom: var(--stroke-border) solid var(--border);
  }

  .spec-label {
    flex: 1;
    min-width: 0;
    font-family: var(--font-family);
    font-size: var(--scale-00);
    font-weight: var(--weight-regular);
    color: var(--muted-foreground);
    line-height: 1.2;
  }

  .energy-badge {
    display: inline-flex;
    align-items: stretch;
    height: 34px;
    flex-shrink: 0;
  }

  .energy-badge-image {
    display: block;
    width: 61px;
    height: 34px;
    object-fit: contain;
  }

  .card.is-hover .spec-label,
  .card.is-hover .product-sheet-link span {
    font-size: 0;
  }

  .card.is-hover .spec-row--bordered .spec-label::after {
    content: "Mazg\0101\0161anas energoeffiktivit\0101te";
  }

  .card.is-hover .spec-row:not(.spec-row--bordered) .spec-label::after {
    content: "\017D\0101v\0113t\0101ja energoeffiktivit\0101te";
  }

  .card.is-hover .product-sheet-link span::after {
    content: "Ra\017Eojuma inform\0101cijas lapa";
  }

  .card.is-hover .spec-label::after,
  .card.is-hover .product-sheet-link span::after {
    font-size: var(--scale-00);
    font-weight: var(--weight-regular);
    line-height: 1.2;
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
