<script>
  import { assetPath } from '../assetPath.js';
  export let expertName = 'Vārds Uzvārds';
  export let expertTitle = 'Vārds Uzvārds, ir pro veļas mašīnu eksperts';
  export let linkText = 'Uzzinat vairak';
  export let linkHref = '#';

  const imgBg = assetPath('images/article-card-bg.svg');
</script>

<article class="article-card">
  <div class="bg-image" style="background-image: url({imgBg})"></div>
  <div class="gradient"></div>
  <div class="content">
    <h3 class="expert-name">{expertName} iesaka</h3>
    <div class="expert-description">
      <p class="expert-bio">{expertTitle}</p>
    </div>
    <a href={linkHref} class="link">
      <span>{linkText}</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <polyline points="15,3 21,3 21,9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <line x1="10" y1="14" x2="21" y2="3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>
  </div>
</article>

<style lang="scss">
  .article-card {
    position: relative;
    width: 494px;
    height: 432px;
    border-radius: var(--radius-200);
    overflow: hidden;
    box-shadow: 4px 4px 13.4px 0 rgba(0, 0, 0, 0.25);
    flex-shrink: 0;
    display: flex;
    align-items: flex-end;
  }

  .bg-image {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    border-radius: var(--radius-200);
  }

  .gradient {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 45%, rgba(0,0,0,0.8));
    border-radius: var(--radius-200);
  }

  .content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: var(--space-7);
    padding: var(--space-8);
    width: 100%;
    box-sizing: border-box;
  }

  .expert-name {
    font-family: var(--font-family);
    font-size: var(--scale-05);
    font-weight: 600;
    color: white;
    line-height: 1.2;
    margin: 0;
  }

  .expert-description {
    height: 102px;
    overflow: hidden;
  }

  .expert-bio {
    font-family: var(--font-family);
    font-size: var(--scale-02);
    font-weight: 400;
    color: white;
    line-height: 1.2;
    margin: 0;
  }

  .link {
    display: inline-flex;
    align-items: center;
    gap: 2px;
    text-decoration: none;
    cursor: pointer;

    span {
      font-family: var(--font-family);
      font-size: var(--scale-00);
      font-weight: 400;
      color: white;
      line-height: 1.2;
      white-space: nowrap;
    }
  }
</style>
