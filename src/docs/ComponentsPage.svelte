<script>
  import Button from '../components/Button.svelte';
  import IconButton from '../components/IconButton.svelte';
  import SmallCard from '../components/SmallCard.svelte';
  import ArticleCard from '../components/ArticleCard.svelte';
  import StockIndicator from '../components/StockIndicator.svelte';
</script>

<div>
  <h1 class="docs-page-title">Components</h1>
  <p class="docs-page-desc">Live previews of all components in the system. Each component is shown with its default props and available variants.</p>

  <!-- ═══════════════════════════════════════════════ Button -->
  <div class="docs-section">
    <h2 class="docs-section-title">Button</h2>

    <!-- All types -->
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">All types — default state</span>
        <span class="preview-badge">Button.svelte</span>
      </div>
      <div class="preview-canvas">
        <Button type="Default"   label="Default"   />
        <Button type="Secondary" label="Secondary" />
        <Button type="Border"    label="Border"    />
        <Button type="Ghost"     label="Ghost"     />
        <Button type="Disabled"  label="Disabled"  />
      </div>
      <div class="preview-props">
        <pre><span class="prop-key">type</span>       <span class="prop-type">string</span>   <span class="prop-value">'Default'</span>   — <span class="prop-value">'Default'</span> | <span class="prop-value">'Secondary'</span> | <span class="prop-value">'Border'</span> | <span class="prop-value">'Ghost'</span> | <span class="prop-value">'Disabled'</span>
<span class="prop-key">label</span>      <span class="prop-type">string</span>   <span class="prop-value">'Press me'</span>  — button label text
<span class="prop-key">iconStart</span>  <span class="prop-type">boolean</span>  <span class="prop-value">true</span>        — show icon before label
<span class="prop-key">iconEnd</span>    <span class="prop-type">boolean</span>  <span class="prop-value">true</span>        — show icon after label
<span class="prop-key">onclick</span>    <span class="prop-type">function</span> <span class="prop-value">undefined</span>   — click handler</pre>
      </div>
    </div>

    <!-- Icon variants -->
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Icon variants</span>
        <span class="preview-badge">iconStart · iconEnd · none</span>
      </div>
      <div class="preview-canvas">
        <Button type="Default" label="Icon start" iconStart={true}  iconEnd={false} />
        <Button type="Default" label="Icon end"   iconStart={false} iconEnd={true}  />
        <Button type="Default" label="No icons"   iconStart={false} iconEnd={false} />
        <Button type="Default" label="Both icons" iconStart={true}  iconEnd={true}  />
      </div>
    </div>

    <!-- Secondary & Border detail -->
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Secondary &amp; Border</span>
        <span class="preview-badge">type=Secondary · type=Border · type=Ghost</span>
      </div>
      <div class="preview-canvas" style="background: var(--surface-muted)">
        <Button type="Secondary" label="Secondary" />
        <Button type="Border"    label="Border"    />
        <Button type="Ghost"     label="Ghost"     />
      </div>
    </div>

    <!-- Disabled -->
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Disabled state</span>
        <span class="preview-badge">type=Disabled</span>
      </div>
      <div class="preview-canvas">
        <Button type="Disabled" label="Disabled" />
        <Button type="Disabled" label="Disabled" iconStart={false} iconEnd={false} />
      </div>
    </div>

    <!-- Token reference -->
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Token reference</span>
        <span class="preview-badge">design tokens used</span>
      </div>
      <div class="preview-props">
        <pre><span class="prop-type">Layout</span>
  padding        <span class="prop-value">--space-4</span> (12px) vertical · <span class="prop-value">--space-5</span> (16px) horizontal
  border-radius  <span class="prop-value">--radius-200</span> (8px)
  gap            <span class="prop-value">--space-3</span> (8px)

<span class="prop-type">Typography</span>
  font-family    <span class="prop-value">--font-family</span>
  font-size      <span class="prop-value">--scale-03</span> (16px)
  font-weight    <span class="prop-value">--weight-semibold</span> (600)

<span class="prop-type">Colors — Default</span>
  background     <span class="prop-value">--primary</span>            hover → <span class="prop-value">--primary-hover</span>
  color          <span class="prop-value">--primary-foreground</span>

<span class="prop-type">Colors — Secondary</span>
  background     <span class="prop-value">--secondary</span>          hover → <span class="prop-value">--secondary-hover</span>
  color          <span class="prop-value">--secondary-foreground</span>

<span class="prop-type">Colors — Border</span>
  background     <span class="prop-value">--card</span>               hover → <span class="prop-value">--surface-sunk</span>
  color          <span class="prop-value">--accent-foreground</span>
  border         1px solid <span class="prop-value">--border</span>

<span class="prop-type">Colors — Ghost</span>
  background     transparent          hover → <span class="prop-value">--surface-sunk</span>
  color          <span class="prop-value">--accent-foreground</span>

<span class="prop-type">Colors — Disabled</span>
  background     <span class="prop-value">--surface-muted</span>
  color          <span class="prop-value">--secondary</span>
  cursor         not-allowed</pre>
      </div>
    </div>
  </div>

  <!-- ═══════════════════════════════════════════════ IconButton -->
  <div class="docs-section">
    <h2 class="docs-section-title">IconButton</h2>

    <!-- All types, Square -->
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">All types — Square</span>
        <span class="preview-badge">IconButton.svelte</span>
      </div>
      <div class="preview-canvas">
        <IconButton type="Default"   shape="Square" label="Default" />
        <IconButton type="Secondary" shape="Square" label="Secondary" />
        <IconButton type="Border"    shape="Square" label="Border" />
        <IconButton type="Ghost"     shape="Square" label="Ghost" />
        <IconButton type="Disabled"  shape="Square" label="Disabled" />
      </div>
      <div class="preview-props">
        <pre><span class="prop-key">type</span>   <span class="prop-type">string</span>   <span class="prop-value">'Default'</span>  — <span class="prop-value">'Default'</span> | <span class="prop-value">'Secondary'</span> | <span class="prop-value">'Border'</span> | <span class="prop-value">'Ghost'</span> | <span class="prop-value">'Disabled'</span>
<span class="prop-key">shape</span>  <span class="prop-type">string</span>   <span class="prop-value">'Square'</span>   — <span class="prop-value">'Square'</span> | <span class="prop-value">'Round'</span>
<span class="prop-key">label</span>  <span class="prop-type">string</span>   <span class="prop-value">''</span>         — aria-label for accessibility
<span class="prop-key">onclick</span> <span class="prop-type">function</span> <span class="prop-value">undefined</span>  — click handler</pre>
      </div>
    </div>

    <!-- All types, Round -->
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">All types — Round</span>
        <span class="preview-badge">shape=Round</span>
      </div>
      <div class="preview-canvas">
        <IconButton type="Default"   shape="Round" label="Default" />
        <IconButton type="Secondary" shape="Round" label="Secondary" />
        <IconButton type="Border"    shape="Round" label="Border" />
        <IconButton type="Ghost"     shape="Round" label="Ghost" />
        <IconButton type="Disabled"  shape="Round" label="Disabled" />
      </div>
    </div>

    <!-- Square vs Round side-by-side -->
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Square vs Round</span>
        <span class="preview-badge">shape comparison</span>
      </div>
      <div class="preview-canvas">
        <div class="shape-pair">
          <IconButton type="Default" shape="Square" label="Default square" />
          <IconButton type="Default" shape="Round"  label="Default round" />
        </div>
        <div class="shape-pair">
          <IconButton type="Secondary" shape="Square" label="Secondary square" />
          <IconButton type="Secondary" shape="Round"  label="Secondary round" />
        </div>
        <div class="shape-pair">
          <IconButton type="Border" shape="Square" label="Border square" />
          <IconButton type="Border" shape="Round"  label="Border round" />
        </div>
      </div>
    </div>

    <!-- Token reference -->
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Token reference</span>
        <span class="preview-badge">design tokens used</span>
      </div>
      <div class="preview-props">
        <pre><span class="prop-type">Layout</span>
  padding        <span class="prop-value">--space-4</span> (12px) all sides
  border-radius  Square → <span class="prop-value">--radius-200</span> (8px) · Round → <span class="prop-value">--radius-full</span> (9999px)

<span class="prop-type">Colors — same mapping as Button</span>
  Default    bg <span class="prop-value">--primary</span>        hover → <span class="prop-value">--primary-hover</span>     color <span class="prop-value">--primary-foreground</span>
  Secondary  bg <span class="prop-value">--secondary</span>      hover → <span class="prop-value">--secondary-hover</span>   color <span class="prop-value">--secondary-foreground</span>
  Border     bg <span class="prop-value">--card</span>           hover → <span class="prop-value">--surface-sunk</span>      color <span class="prop-value">--accent-foreground</span>  border 1px <span class="prop-value">--border</span>
  Ghost      bg transparent      hover → <span class="prop-value">--surface-sunk</span>      color <span class="prop-value">--accent-foreground</span>
  Disabled   bg <span class="prop-value">--surface-muted</span>  no hover                 color <span class="prop-value">--secondary</span></pre>
      </div>
    </div>
  </div>

  <!-- StockIndicator -->
  <div class="docs-section">
    <h2 class="docs-section-title">StockIndicator</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">StockIndicator</span>
        <span class="preview-badge">StockIndicator.svelte</span>
      </div>
      <div class="preview-canvas">
        <StockIndicator stock=">10" />
        <StockIndicator stock="5" />
        <StockIndicator stock="1" />
      </div>
      <div class="preview-props">
        <pre><span class="prop-key">stock</span>  <span class="prop-type">string</span>  <span class="prop-value">'>10'</span>   — availability count label</pre>
      </div>
    </div>
  </div>

  <!-- SmallCard -->
  <div class="docs-section">
    <h2 class="docs-section-title">SmallCard</h2>

    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Default</span>
        <span class="preview-badge">akcija=true · oldPrice=true</span>
      </div>
      <div class="preview-canvas">
        <SmallCard />
      </div>
      <div class="preview-props">
        <pre><span class="prop-key">akcija</span>      <span class="prop-type">boolean</span>  <span class="prop-value">true</span>   — show discount tag
<span class="prop-key">oldPrice</span>    <span class="prop-type">boolean</span>  <span class="prop-value">true</span>   — show struck-through original price
<span class="prop-key">title</span>       <span class="prop-type">string</span>           — product name
<span class="prop-key">price</span>       <span class="prop-type">string</span>           — current price
<span class="prop-key">originalPrice</span> <span class="prop-type">string</span>         — pre-discount price
<span class="prop-key">rating</span>      <span class="prop-type">number</span>  <span class="prop-value">4</span>      — stars out of 5
<span class="prop-key">reviewCount</span> <span class="prop-type">number</span>           — review count
<span class="prop-key">stock</span>       <span class="prop-type">string</span>           — availability label</pre>
      </div>
    </div>

    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">No discount</span>
        <span class="preview-badge">akcija=false · oldPrice=false</span>
      </div>
      <div class="preview-canvas">
        <SmallCard akcija={false} oldPrice={false} />
      </div>
    </div>

    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">Side by side</span>
        <span class="preview-badge">multiple instances</span>
      </div>
      <div class="preview-canvas" style="justify-content:flex-start; overflow-x:auto; flex-wrap:nowrap">
        <SmallCard />
        <SmallCard akcija={false} oldPrice={false} rating={3} reviewCount={42} />
        <SmallCard rating={5} reviewCount={890} />
      </div>
    </div>
  </div>

  <!-- ArticleCard -->
  <div class="docs-section">
    <h2 class="docs-section-title">ArticleCard</h2>
    <div class="component-preview">
      <div class="preview-header">
        <span class="preview-name">ArticleCard</span>
        <span class="preview-badge">ArticleCard.svelte</span>
      </div>
      <div class="preview-canvas" style="min-height: 480px; align-items:center;">
        <ArticleCard />
      </div>
      <div class="preview-props">
        <pre><span class="prop-key">expertName</span>   <span class="prop-type">string</span>  — expert's display name
<span class="prop-key">expertTitle</span>  <span class="prop-type">string</span>  — expert's description line
<span class="prop-key">linkText</span>     <span class="prop-type">string</span>  — CTA link label
<span class="prop-key">linkHref</span>     <span class="prop-type">string</span>  — CTA link destination</pre>
      </div>
    </div>
  </div>
</div>
