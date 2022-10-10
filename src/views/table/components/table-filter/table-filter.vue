<script setup lang="ts">
import { reactive, ref, computed } from "vue";
/**
 * Компоненты
 */
import UiDropdown from "@/components/ui/dropdown/ui-dropdown.vue";
import UiInput from "@/components/ui/input/ui-input.vue";
import UiButton from "@/components/ui/button/ui-button.vue";
/**
 * Модели для компонентов
 */
import { OptionModel } from "@/components/ui/dropdown/models";
import { FilterConditionEnum } from "./enums";
import { TestTableColumnEnum } from "../../enums";
import { FilterRequestModel } from "./models";
/**
 * Клонки по которым может производиться фильтрация
 */
const columns = reactive([
  new OptionModel({
    Id: TestTableColumnEnum.Name,
    Title: "Название",
  }),
  new OptionModel({
    Id: TestTableColumnEnum.Count,
    Title: "Количество",
  }),
  new OptionModel({
    Id: TestTableColumnEnum.Distance,
    Title: "Дистанция",
  }),
]);
/**
 * Клонка
 */
const column = ref(new OptionModel());
/**
 * Условия по которым может производиться фильтрация
 */
const conditions = reactive([
  new OptionModel({
    Id: FilterConditionEnum.Equals,
    Title: "Равно",
  }),
  new OptionModel({
    Id: FilterConditionEnum.Contains,
    Title: "Содержит",
  }),
  new OptionModel({
    Id: FilterConditionEnum.More,
    Title: "Больше",
  }),
  new OptionModel({
    Id: FilterConditionEnum.Less,
    Title: "Меньше",
  }),
]);
/**
 * Условие
 */
const condition = ref(new OptionModel());
/**
 * Занчение, c которым происходит сравнение
 */
const value = ref<string | number>("");
/**
 * Тип значения
 */
const valueType = computed(() => {
  switch (column.value.Id) {
    case TestTableColumnEnum.Name:
      return "text";
    case TestTableColumnEnum.Count:
      return "number";
    case TestTableColumnEnum.Distance:
      return "number";
  }
});
/**
 * События
 */
const emit = defineEmits(["filter"]);
/**
 * При поиске
 */
const onFilter = () => {
  emit(
    "filter",
    new FilterRequestModel({
      Column: column.value.Id,
      Condition: condition.value.Id,
      Value: valueType.value == "number" ? Number(value.value) : value.value.toString(),
    })
  );
};
</script>

<template>
  <div class="table-filter f d-c">
    <h2 class="mb-2">Фильтр</h2>
    <ui-input class="mb-3" placeholder="Значение для фильтра" v-model="value" :type="valueType">
    </ui-input>
    <div class="f f-w cg-3 rg-2">
      <ui-dropdown
        placeholder="Колонка"
        v-model="column"
        class="columns"
        :options="columns"
      ></ui-dropdown>
      <ui-dropdown
        placeholder="Условие"
        v-model="condition"
        class="conditions"
        :options="conditions"
      ></ui-dropdown>
      <ui-button
        class="bold"
        @click="onFilter"
        :disabled="!column.Title || !condition.Title"
        >Фильтрация</ui-button
      >
    </div>
  </div>
</template>

<style lang="less" scoped>
.table-filter {
  .columns,
  .conditions {
    min-width: 124px;
    max-width: 124px;
  }
}
</style>
