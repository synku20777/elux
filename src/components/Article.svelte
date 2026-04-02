<script>
  export let title = 'Prec\u012bza apr\u016bpe ar "AutoDose"';
  export let body = 'P\u0101r\u0101k daudz mazg\u0101\u0161anas l\u012bdzek\u013cu lieto\u0161ana var saboj\u0101t dr\u0113b\u0113s eso\u0161\u0101s \u0161\u0137iedras. Atcerieties, ka ve\u013cas daudzums un \u016bdens veids j\u016bsu apk\u0101rtn\u0113 ietekm\u0113s mazg\u0101\u0161anas l\u012bdzek\u013ca lieto\u0161anu.';
  export let linkText = 'Uzzinat vairak';
  export let href = '#';
  export let imageUrl = '/images/article-41-4239.png';
  export let showTitle = true;
  export let showBody = true;
  export let showLink = true;
</script>

<article class="article">
  <div class="article-media" style="background-image: url('{imageUrl}')"></div>
  <div class="article-overlay"></div>

  <div class="article-content">
    {#if showTitle}
      <h3 class="article-title">{title}</h3>
    {/if}

    {#if showBody}
      <p class="article-body">{body}</p>
    {/if}

    {#if showLink}
      <a href={href} class="article-link">
        <span>{linkText}</span>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <polyline points="15,3 21,3 21,9" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <line x1="10" y1="14" x2="21" y2="3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    {/if}
  </div>
</article>

<style lang="scss">
  .article {
    position: relative;
    display: flex;
    align-items: flex-end;
    width: min(100%, 323px);
    aspect-ratio: 323 / 460;
    border-radius: var(--radius-200);
    overflow: hidden;
    flex-shrink: 0;
  }

  .article-media,
  .article-overlay {
    position: absolute;
    inset: 0;
    border-radius: var(--radius-200);
  }

  .article-media {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .article-overlay {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 45%, rgba(0, 0, 0, 0.8));
  }

  .article-content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: clamp(var(--space-5), 6vw, var(--space-7));
    width: 100%;
    padding: clamp(var(--space-5), 8vw, var(--space-8));
    box-sizing: border-box;
  }

  .article-title,
  .article-body {
    margin: 0;
    color: var(--primary-foreground);
  }

  .article-title {
    font-family: var(--font-family);
    font-size: clamp(var(--scale-03), 5vw, var(--scale-05));
    font-weight: var(--weight-semibold);
    line-height: 1.2;
  }

  .article-body {
    font-family: var(--font-family);
    font-size: clamp(var(--scale-01), 3.5vw, var(--scale-02));
    font-weight: var(--weight-regular);
    line-height: 1.2;
  }

  .article-link {
    display: inline-flex;
    align-items: center;
    gap: var(--space-1);
    color: var(--primary-foreground);
    text-decoration: none;
    font-family: var(--font-family);
    font-size: clamp(var(--scale-01), 3.5vw, var(--scale-02));
    font-weight: var(--weight-regular);
    line-height: 1.2;
    white-space: nowrap;
    max-width: 100%;
  }

  .article-link svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
</style>
