<script lang="ts" setup>
import { computed, ref, watch } from "vue";
import UiButton from "../button/ui-button.vue";

const props = defineProps({
  modelValue: { type: Number, default: 1 },
  limit: { type: Number, default: 2 },
  length: { type: Number, default: 20 },
  start: { type: Number, default: 0 },
  end: { type: Number, default: 0 },
});
/**
 * Кол-во страниц
 */
const pages = computed(() => {
  return Math.ceil(props.length / props.limit);
});
/**
 * События
 */
const emit = defineEmits(["update:modelValue", "update:start", "update:end"]);
/**
 * При выборе страницы
 */
const onSelect = (n: number | string) => {
  if (typeof n == "string") return;
  if (n < 1 || n > pages.value) return;
  page.value = n;
};
/**
 * Текущая страница
 */
const page = computed({
  get: (): number => {
    return props.modelValue;
  },
  set: (value: number) => {
    emit("update:modelValue", value);
  },
});
/**
 * Установка стартового индекса
 */
const setStart = () => {
  console.log("setStart", page.value);
  emit("update:start", (page.value - 1) * props.limit);
};
/**
 * Установка конечного индекса
 */
const setEnd = () => {
  console.log("setEnd", page.value, "props.start", props.start);
  emit("update:end", props.start + props.limit);
};
/**
 * Установка стартового индекса
 */
setStart();
/**
 * Установка конечного индекса
 */
setEnd();
/**
 * Стартовая позиция
 */
const start = computed(() => props.start);
/**
 * Следить за страницей
 */
watch(page, setStart);
/**
 * Следить за начальным индексом
 */
watch(start, setEnd);
/**
 * Страницы для пагинации
 */
const range = computed(() => {
  const delta = 2,
    left = page.value - delta,
    right = page.value + delta + 1,
    range = [],
    rangeWithEllipsis = [];
  let l = 0,
    t = 0;
  range.push(1);
  for (var i = page.value - delta; i <= page.value + delta; i++) {
    if (i >= left && i < right && i < pages.value && i > 1) {
      range.push(i);
    }
  }
  range.push(pages.value);
  for (let i of range) {
    if (l) {
      if (i - l === 2) {
        t = l + 1;
        rangeWithEllipsis.push(t);
      } else if (i - l !== 1) {
        rangeWithEllipsis.push("...");
      }
    }
    rangeWithEllipsis.push(i);
    l = i;
  }
  return rangeWithEllipsis;
});
</script>

<template>
  <div class="tir-pagination">
    <ui-button
      class="page medium"
      secondary
      :disabled="page == 1"
      @click="onSelect(page - 1)"
    >
      Назад
    </ui-button>
    <ui-button
      class="page medium"
      secondary
      @click="onSelect(n)"
      :disabled="n == '...'"
      v-for="n in range"
      :color="n == page ? 'blue' : 'gray'"
    >
      {{ n }}
    </ui-button>
    <ui-button
      class="page medium"
      secondary
      :disabled="page == pages"
      @click="onSelect(page + 1)"
    >
      Вперед
    </ui-button>
  </div>
</template>

<style lang="less" scoped>
.tir-pagination {
  display: inline-flex;
  column-gap: 8px;
  .page {
    min-width: var(--wtt-control-default-size) !important;
  }
}
</style>
