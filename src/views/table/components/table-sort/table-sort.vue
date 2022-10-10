<script lang="ts" setup>
import { reactive, ref, computed } from "vue";
/**
 * Компоненты
 */
import UiDropdown from "@/components/ui/dropdown/ui-dropdown.vue";
import UiButton from "@/components/ui/button/ui-button.vue";
/**
 * Модели для компонентов
 */
import { OptionModel } from "@/components/ui/dropdown/models";
import { TestTableColumnEnum } from "../../enums";
import { SortConditionEnum } from "./enums";
import { SortRequestModel } from "./models";
/**
 * Клонки по которым может производиться сортировка
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
 * Условия по которым может производиться сортировка
 */
const conditions = reactive([
  new OptionModel({
    Id: SortConditionEnum.More,
    Title: "От большего к меньшему",
  }),
  new OptionModel({
    Id: SortConditionEnum.Less,
    Title: "От меньшего к большему",
  }),
]);
/**
 * Условие
 */
const condition = ref(new OptionModel());
/**
 * События
 */
const emit = defineEmits(["sort"]);
/**
 * При поиске
 */
const onFilter = () => {
  emit(
    "sort",
    new SortRequestModel({
      Column: column.value.Id,
      Condition: condition.value.Id,
    })
  );
};
</script>

<template>
  <div class="table-sort f d-c">
    <h2 class="mb-2">Сортировка</h2>
    <div class="f f-w cg-3 rg-3">
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
        >Сортировка</ui-button
      >
    </div>
  </div>
</template>

<style lang="less" scoped>
.table-sort {
  .columns,
  .conditions {
    min-width: 284px;
    max-width: 284px;
  }
}
</style>
