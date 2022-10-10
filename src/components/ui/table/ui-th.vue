<template>
  <div class="ui-th" ref="$el">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less">
.ui-th {
  display: grid;
  min-height: fit-content;
  grid-template-columns: inherit;
  min-height: var(--wtt-table-header-h);
  background-color: var(--wtt-table-header-bg);
  font-size: var(--wtt-table-header-fs);
  line-height: var(--wtt-table-header-lh);
  font-weight: var(--wtt-table-header-fw);
  color: var(--wtt-table-header);
  @media (max-width: 720px) {
    display: none;
  }
}
</style>
