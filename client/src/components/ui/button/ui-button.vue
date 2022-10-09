<script lang="ts" setup>
import { PropType, computed } from "vue";
import { ButtonSizeEnum } from "./enums";
const props = defineProps({
  /**
   * Значение
   */
  modelValue: { type: String, default: "" },
  /**
   * Заполнитель
   */
  placeholder: { type: String, default: "" },
  /**
   * Размер
   */
  size: { type: String as PropType<ButtonSizeEnum>, default: ButtonSizeEnum.Default },
  /**
   * Успех
   */
  success: { type: Boolean, default: false },
  /**
   * Предупреждение
   */
  warn: { type: Boolean, default: false },
  /**
   * Ошибка
   */
  error: { type: Boolean, default: false },
  /**
   * Кнопка отмены
   */
  secondary: { type: Boolean, default: false },
  /**
   * Aктивность
   */
  disabled: { type: Boolean, default: false },
  /**
   * Только для чтения
   */
  readonly: { type: Boolean, default: false },
});
/**
 * Стили
 */
const style = computed(() => {
  return {
    lineHeight: `var(--wtt-control-${props.size}-size)`,
    padding: `0 var(--wtt-control-${props.size}-px)`,
    columnGap: `calc(var(--wtt-control-${props.size}-px) / 2)`,
  };
});
</script>

<template>
  <button
    class="ui-button"
    :style="style"
    :class="{
      'is-secondary': secondary,
      'is-success': success,
      'is-warn': warn,
      'is-error': error,
      'is-disabled': disabled,
    }"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<style lang="less" scoped>
.ui-button {
  display: inline-flex;
  border: none;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  border-radius: var(--wtt-control-br);
  background-color: var(--wtt-main);
  color: var(--wtt-bg-1);
  &.is-secondary {
    background-color: var(--wtt-control-bg-disabled);
  }
  &.is-success {
    background-color: var(--wtt-success);
  }
  &.is-warn {
    background-color: var(--wtt-warn);
  }
  &.is-error {
    background-color: var(--wtt-error);
  }
  &.is-disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &:hover {
    filter: brightness(105%);
  }
  &:active {
    filter: brightness(95%);
  }
}
</style>
