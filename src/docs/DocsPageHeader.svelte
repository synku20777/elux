<script>
  export let title = '';
  export let description = '';
  export let figmaUrl = '';
  export let figmaLabel = 'Open in Figma';
</script>

<div class="docs-page-head">
  <div class="docs-page-copy">
    <h1 class="docs-page-title">{title}</h1>
    <p class="docs-page-desc">{description}</p>
  </div>

  {#if figmaUrl}
    <div class="docs-page-actions">
      <a
        class="docs-figma-link"
        href={figmaUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={figmaLabel}
      >
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <path
            d="M5.667 1.333a2.333 2.333 0 0 0 0 4.667h2.666V1.333H5.667Zm0 6a2.333 2.333 0 1 0 0 4.667h2.666V7.333H5.667Zm4 0h1a2.333 2.333 0 1 0 0-4.666h-1v4.666Zm0 1.334V12a2.333 2.333 0 1 0 2.333-2.333H9.667Zm-4 4.666a2.333 2.333 0 1 0 0-4.666h2.666v2.666a2.333 2.333 0 0 1-2.666 2Z"
            fill="currentColor"
          />
        </svg>
        <span>{figmaLabel}</span>
      </a>
    </div>
  {/if}
</div>
