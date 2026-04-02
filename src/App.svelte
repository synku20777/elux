<script>
  import { onMount } from 'svelte';
  import ColorsPage          from './docs/ColorsPage.svelte';
  import TypographyPage      from './docs/TypographyPage.svelte';
  import SpacingPage         from './docs/SpacingPage.svelte';
  import LinkPage            from './docs/LinkPage.svelte';
  import TabsPage            from './docs/TabsPage.svelte';
  import TagPage             from './docs/TagPage.svelte';
  import CategoryPage        from './docs/CategoryPage.svelte';
  import ArticlePage         from './docs/ArticlePage.svelte';
  import InputFieldPage      from './docs/InputFieldPage.svelte';
  import ButtonPage          from './docs/ButtonPage.svelte';
  import IconButtonPage      from './docs/IconButtonPage.svelte';
  import StockIndicatorPage  from './docs/StockIndicatorDocsPage.svelte';
  import SmallCardPage       from './docs/SmallCardDocsPage.svelte';
  import BigCardPage         from './docs/BigCardPage.svelte';
  import ArticleCardPage     from './docs/ArticleCardPage.svelte';
  import SectionPage         from './docs/SectionPage.svelte';
  import MenuListItemPage    from './docs/MenuListItemPage.svelte';
  import MenuListItem        from './components/MenuListItem.svelte';

  const nav = [
    {
      group: 'Foundations',
      items: [
        { id: 'colors',      label: 'Colors'      },
        { id: 'typography',  label: 'Typography'  },
        { id: 'spacing',     label: 'Spacing'     },
      ],
    },
    {
      group: 'Components',
      items: [
        { id: 'link',            label: 'Link'          },
        { id: 'tabs',            label: 'Tabs'          },
        { id: 'tag',             label: 'Tag'           },
        { id: 'input-field',     label: 'InputField'    },
        { id: 'button',          label: 'Button'        },
        { id: 'icon-button',     label: 'IconButton'    },
        { id: 'menu-list-item',  label: 'MenuListItem'  },
        { id: 'stock-indicator', label: 'StockIndicator'},
        { id: 'section',         label: 'Section'       },
      ],
    },
    {
      group: 'Organisms',
      items: [
        { id: 'category',        label: 'Category'      },
        { id: 'article',         label: 'Article'       },
        { id: 'small-card',      label: 'SmallCard'     },
        { id: 'big-card',        label: 'BigCard'       },
        { id: 'article-card',    label: 'ArticleCard'   },
      ],
    },
  ];

  const pageMap = {
    colors:            ColorsPage,
    typography:        TypographyPage,
    spacing:           SpacingPage,
    link:              LinkPage,
    tabs:              TabsPage,
    tag:               TagPage,
    category:          CategoryPage,
    article:           ArticlePage,
    'input-field':     InputFieldPage,
    button:            ButtonPage,
    'icon-button':     IconButtonPage,
    'menu-list-item':  MenuListItemPage,
    'stock-indicator': StockIndicatorPage,
    'small-card':      SmallCardPage,
    'big-card':        BigCardPage,
    'article-card':    ArticleCardPage,
    section:           SectionPage,
  };

  const defaultPage = 'colors';
  const pageIds = new Set(Object.keys(pageMap));
  let active = defaultPage;

  function normalizePage(hash) {
    const id = hash.replace(/^#\/?/, '');
    return pageIds.has(id) ? id : defaultPage;
  }

  function syncFromHash() {
    const next = normalizePage(window.location.hash);
    active = next;

    if (window.location.hash !== `#/${next}`) {
      window.history.replaceState(null, '', `#/${next}`);
    }
  }

  function navigateTo(id) {
    active = id;

    if (window.location.hash !== `#/${id}`) {
      window.location.hash = `/${id}`;
    }
  }

  onMount(() => {
    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);

    return () => {
      window.removeEventListener('hashchange', syncFromHash);
    };
  });
</script>

<div class="docs-layout">
  <aside class="docs-sidebar">
    <div class="sidebar-logo">
      <h1>Electrolux DS</h1>
      <span>Design System v1.0</span>
    </div>
    <nav class="sidebar-nav">
      {#each nav as group}
        <div class="nav-group">
          <div class="nav-group-label">{group.group}</div>
          {#each group.items as item}
            <MenuListItem
              label={item.label}
              shape="Default"
              size="Small"
              state={active === item.id ? 'chosen' : 'Default'}
              iconStart={false}
              iconEnd={false}
              fullWidth={true}
              onclick={() => navigateTo(item.id)}
            />
          {/each}
        </div>
      {/each}
    </nav>
  </aside>

  <main class="docs-main">
    <svelte:component this={pageMap[active]} />
  </main>
</div>
