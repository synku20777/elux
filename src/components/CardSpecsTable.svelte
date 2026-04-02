<script>
  export let rows = [
    { label: 'Ietilpība (kg)', value: '9' },
    { label: 'MAX. centrifūgas apgriezieni', value: '1400rpm' },
    { label: 'Dziļums (mm)', value: '658' },
  ];
</script>

<div class="card-specs-table">
  <table class="table">
    <tbody>
      {#each rows as row, index}
        <tr class:table-row--bordered={index < rows.length - 1}>
          <td class="table-cell table-cell--label">{row.label}</td>
          <td class="table-cell table-cell--value">{row.value}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style lang="scss">
  .card-specs-table {
    width: min(100%, 355px);
    padding-bottom: var(--space-5);
  }

  .table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
  }

  .table-row--bordered {
    border-bottom: var(--stroke-border) solid var(--border);
  }

  .table-cell {
    padding: var(--space-3) 0;
    font-family: var(--font-family);
    font-size: var(--scale-00);
    font-weight: var(--weight-regular);
    line-height: 1.2;
    vertical-align: middle;
  }

  .table-cell--label {
    color: var(--foreground);
    text-align: left;
  }

  .table-cell--value {
    color: var(--accent-foreground);
    text-align: right;
    white-space: nowrap;
  }
</style>
