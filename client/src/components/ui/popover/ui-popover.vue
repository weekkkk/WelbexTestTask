<script setup lang="ts">
import { useSlots, ref, computed, watch } from "vue";

const slots = useSlots();
const $el = ref<HTMLElement>();
const $pop = ref<HTMLElement>();
const position = ref({ x: 0, y: 0 });
const setPosition = () => {
  if (!$el.value || !$pop.value) return;
  let x = 0;
  let y = 0;
  const elRect = $el.value.getBoundingClientRect();
  const popRect = $pop.value.getBoundingClientRect();
  if (elRect.top - popRect.height > 0) {
    x = elRect.left + elRect.width / 2 - popRect.width / 2;
    y = elRect.top - popRect.height;
  }
  position.value = { x, y };
};
watch($el, () => {
  setTimeout(setPosition);
});
const style = computed(() => {
  if (!position.value) return;
  return {
    left: `${position.value.x}px`,
    top: `${position.value.y}px`,
  };
});
</script>

<template>
  <teleport to="body">
    <span class="ui-popover" ref="$pop" :style="style">
      <slot name="content"></slot>
    </span>
  </teleport>
  <span ref="$el">
    <slot></slot>
  </span>
</template>

<style lang="less" scoped>
.ui-popover {
  position: fixed;
  // transform: translateX(-50%) translateY(-100%);
  background-color: aquamarine;
  padding: 32px;
}
</style>
