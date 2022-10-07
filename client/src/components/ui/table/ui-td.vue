<template>
  <div class="ui-td">
    <label></label>
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.ui-td {
  display: grid;
  > label {
    display: none;
    padding: var(--wtt-table-cell-py) var(--wtt-table-cell-px);
  }
  > span {
    display: flex;
    align-items: center;
    padding: var(--wtt-table-cell-py) var(--wtt-table-cell-px);
  }
  @media (max-width: 720px) {
    grid-template-columns: var(--wtt-table-row-label-w) 1fr;
    // &:not(:last-child) {
    //   border-bottom-style: solid;
    //   border-width: var(--wtt-table-row-bw);
    //   border-color: var(--wtt-table-bc);
    // }
    > label {
      display: flex;
      align-items: center;
      font-size: var(--wtt-table-header-fs);
      line-height: var(--wtt-table-header-lh);
      font-weight: var(--wtt-table-header-fw);
      color: var(--wtt-table-header);
      background-color: var(--wtt-table-header-bg);
    }
  }
}
</style>
