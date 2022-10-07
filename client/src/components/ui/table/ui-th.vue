<template>
  <div class="ui-th" ref="$el">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, PropType, ref } from "vue";
/**
 * Элемент
 */
const $el = ref<HTMLElement>();
/**
 * Усановка подписей строкам
 */
const setLabelRow = () => {
  if (!$el.value) return;
  const rows = $el.value.parentElement?.children || [];
  for (let i = 0; i < rows.length; i++) {
    if (!rows[i].classList.contains("ui-th")) {
      if (rows[i]) {
        const cells = rows[i]?.children;
        for (let j = 0; j < cells.length; j++) {
          if (cells[j]) {
            const cell = cells[j] as HTMLElement;
            const label = cell.firstElementChild;
            if (label) label.innerHTML = $el.value.children[j].innerHTML;
          }
        }
      }
    }
  }
};
/**
 * При загрузке dom
 */
onMounted(() => {
  setLabelRow();
});
</script>

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
