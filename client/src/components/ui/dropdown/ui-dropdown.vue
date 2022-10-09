<script setup lang="ts">
import { PropType, ref, computed } from "vue";
import UiInput from "../input/ui-input.vue";
import { DrodpownSizeEnum } from "./enums";
import { OptionModel } from "./models";
const props = defineProps({
  modelValue: { type: Object as PropType<OptionModel>, default: new OptionModel() },
  /**
   * Опции
   */
  options: { type: Array as PropType<OptionModel[]>, default: [] },
  /**
   * Заколнитель
   */
  placeholder: { type: String, default: "" },
  /**
   * Размер
   */
  size: { type: String as PropType<DrodpownSizeEnum>, default: DrodpownSizeEnum.Default },
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
});
/**
 * Есть ли фокус
 */
const isFocus = ref(false);
/**
 * События
 */
const emit = defineEmits(["update:modelValue"]);
/**
 * При выборе
 */
const select = (option: OptionModel) => {
  emit("update:modelValue", option);
};
/**
 * Стили
 */
const style = computed(() => {
  return {
    lineHeight: `var(--wtt-control-${props.size}-size)`,
    minHeight: `var(--wtt-control-${props.size}-size)`,
    padding: `0 var(--wtt-control-${props.size}-px)`,
    columnGap: `calc(var(--wtt-control-${props.size}-px) / 2)`,
  };
});
/**
 * Элемент
 */
const $el = ref<HTMLElement>();
/**
 * Снятие фокуса
 */
const onBlur = (e: MouseEvent) => {
  if (!$el.value || !isFocus.value) return;
  const target = e.target as HTMLElement;
  if (!target) return;
  if (target == $el.value || $el.value.contains(target)) return;
  isFocus.value = false;
};
/**
 * Слушатель кликов
 */
window.addEventListener("click", onBlur);
</script>

<template>
  <span class="ui-dropdown" ref="$el" :class="{ 'is-focus': isFocus }">
    <div
      class="control"
      :style="style"
      :class="{
        'is-focus': isFocus,
        'is-success': success,
        'is-warn': warn,
        'is-error': error,
        'is-disabled': disabled,
      }"
      @click="isFocus = !isFocus"
    >
      <span class="placeholder" v-if="!modelValue.Title">{{ placeholder }}</span>
      <span v-else>
        {{ modelValue.Title }}
      </span>
    </div>
    <transition name="scale_options">
      <div
        class="options"
        v-if="isFocus"
        :class="{
          'is-focus': isFocus,
        }"
      >
        <div
          class="option"
          v-for="option in options"
          :key="option.Id"
          :class="{ 'is-select': option.Id == modelValue.Id }"
          :style="style"
          @click="select(option)"
        >
          {{ option.Title }}
        </div>
      </div>
    </transition>
  </span>
</template>

<style lang="less" scoped>
.ui-dropdown {
  position: relative;
  .control {
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition-duration: var(--wtt-control-transition-duration);
    transition-timing-function: var(--wtt-control-timing-function);
    transition-property: border-color;
    border-radius: var(--wtt-control-br);
    border-color: var(--wtt-control-bc);
    cursor: pointer;
    &::before {
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
      border-color: inherit;
    }
    .placeholder {
      color: var(--wtt-control-placeholder);
    }
    &.is-focus {
      border-color: var(--wtt-control-bc-focus);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
    &.is-success {
      border-color: var(--wtt-control-bc-success);
    }
    &.is-warn {
      border-color: var(--wtt-control-bc-warn);
    }
    &.is-error {
      border-color: var(--wtt-control-bc-error);
    }
    &.is-disabled {
      cursor: not-allowed;
      background-color: var(--wtt-control-bg-disabled);
    }
  }
  .options {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    border-style: solid;
    border-color: var(--wtt-control-bc-focus);
    border-width: var(--wtt-control-bw);
    border-bottom-left-radius: var(--wtt-control-br);
    border-bottom-right-radius: var(--wtt-control-br);
    border-top-width: 0;
    &.is-focus {
      z-index: 1000;
    }
    .option {
      cursor: pointer;
      color: var(--wtt-control-label);
      transition-duration: var(--wtt-control-transition-duration);
      transition-timing-function: var(--wtt-control-timing-function);
      background-color: var(--wtt-control-bg);
      &.is-select {
        background-color: var(--wtt-control-bg-disabled);
        color: var(--wtt-control);
      }
      &:not(.is-select) {
        &:hover {
          filter: brightness(95%);
        }
        &:active {
          filter: brightness(105%);
        }
      }
    }
  }
  .scale_options-enter-active,
  .scale_options-leave-active {
    transition-duration: var(--wtt-control-transition-duration);
    transition-timing-function: var(--wtt-control-timing-function);
    transition-property: opacity;
  }
  .scale_options-enter-from,
  .scale_options-leave-to {
    z-index: 10000;
    opacity: 0;
  }
}
</style>
