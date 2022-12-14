<script setup lang="ts">
import { PropType, ref, computed, InputHTMLAttributes } from "vue";
import { InputSizeEnum } from "./enums";
const props = defineProps({
  /**
   * Значение
   */
  modelValue: { type: [String, Number], default: "" },
  /**
   * Заполнитель
   */
  placeholder: { type: String, default: "" },
  /**
   * Тип значения
   */
  type: { type: String as PropType<"text" | "number">, default: "text" },
  /**
   * Размер
   */
  size: { type: String as PropType<InputSizeEnum>, default: InputSizeEnum.Default },
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
   * Aктивность
   */
  disabled: { type: Boolean, default: false },
  /**
   * Только для чтения
   */
  readonly: { type: Boolean, default: false },
});
/**
 * События
 */
const emit = defineEmits(["update:modelValue", "focus", "blur"]);
/**
 * Поле
 */
const $input = ref<HTMLInputElement>();
/**
 * Установить фокус
 */
const focus = () => {
  if (!$input.value) return;
  $input.value.focus();
};
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
  <div
    class="ui-input"
    @click="focus"
    :style="style"
    :class="{
      'is-success': success,
      'is-warn': warn,
      'is-error': error,
      'is-disabled': disabled,
    }"
  >
    <slot name="left"></slot>
    <input
      :value="modelValue"
      @input="emit('update:modelValue', ($event.target as any).value)"
      @focus="emit('focus')"
      @blur="emit('blur')"
      :type="type"
      ref="$input"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
    />
    <span class="border"></span>
    <slot name="right"></slot>
  </div>
</template>

<style lang="less" scoped>
.ui-input {
  display: flex;
  align-items: center;
  position: relative;
  transition-duration: var(--wtt-control-transition-duration);
  transition-timing-function: var(--wtt-control-timing-function);
  transition-property: border-color;
  border-radius: var(--wtt-control-br);
  width: 100%;
  font-size: inherit;
  font-family: inherit;
  .border {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    transition-duration: inherit;
    transition-timing-function: inherit;
    transition-property: inherit;
    border-style: solid;
    border-radius: inherit;
    border-width: var(--wtt-control-bw);
    border-color: var(--wtt-control-bc);
    z-index: 0;
  }
  input {
    cursor: inherit;
    outline: none;
    border: none;
    background: none;
    line-height: inherit;
    font-size: inherit;
    font-family: inherit;
    z-index: 2;
    width: 100%;
    &:focus ~ .border {
      border-color: var(--wtt-control-bc-focus);
    }
    &::placeholder {
      color: var(--wtt-control-placeholder);
      font-size: inherit;
      font-family: inherit;
    }
  }
  &.is-success .border {
    border-color: var(--wtt-control-bc-success);
  }
  &.is-warn .border {
    border-color: var(--wtt-control-bc-warn);
  }
  &.is-error .border {
    border-color: var(--wtt-control-bc-error);
  }
  &.is-disabled {
    cursor: not-allowed;
    background-color: var(--wtt-control-bg-disabled);
  }
}
</style>
