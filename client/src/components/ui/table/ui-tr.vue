<template>
  <div class="ui-tr">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="less" scoped>
.ui-tr {
  display: grid;
  min-height: fit-content;
  grid-template-columns: inherit;
  overflow: hidden;
  border-radius: var(--wtt-table-br);
  min-height: var(--wtt-table-row-h);
  font-size: var(--wtt-table-row-fs);
  line-height: var(--wtt-table-row-lh);
  font-weight: var(--wtt-table-row-fw);
  color: var(--wtt-table-row);
  border-width: var(--wtt-table-row-bw);
  border-color: var(--wtt-table-bc);
  &:not(:last-child) {
    border-bottom-style: solid;
  }
  @media (max-width: 720px) {
    border-style: solid;
    // &:not(:last-child) {
    //   border: none;
    // }
  }
}
</style>
