<template>
  <div class="ui-table" :style="style">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from "vue";
const props = defineProps({
  /**
   * Массив с ширинами колонок
   */
  columns: { type: Array as PropType<String[]>, default: [] },
});
const style = computed(() => {
  return { gridTemplateColumns: props.columns.toString().replaceAll(",", " ") };
});
</script>

<style lang="less" scoped>
.ui-table {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  border-radius: var(--wtt-table-br);

  @media (max-width: 720px) {
    row-gap: 16px;
    grid-template-columns: 1fr !important;
  }
}
</style>
