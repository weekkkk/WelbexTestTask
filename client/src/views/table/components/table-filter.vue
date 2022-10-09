<script setup lang="ts">
import UiDropdown from "@/components/ui/dropdown/ui-dropdown.vue";
import UiInput from "@/components/ui/input/ui-input.vue";
import UiButton from "@/components/ui/button/ui-button.vue";
import { OptionModel } from "@/components/ui/dropdown/models";
import { reactive, ref } from "vue";
/**
 * Клонки по которым может производиться фильтрация
 */
const columns = reactive([
  new OptionModel({
    Id: 0,
    Title: "Дата",
  }),
  new OptionModel({
    Id: 1,
    Title: "Название",
  }),
  new OptionModel({
    Id: 2,
    Title: "Количество",
  }),
  new OptionModel({
    Id: 3,
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
    Id: 0,
    Title: "Равно",
  }),
  new OptionModel({
    Id: 1,
    Title: "Содержит",
  }),
  new OptionModel({
    Id: 2,
    Title: "Больше",
  }),
  new OptionModel({
    Id: 3,
    Title: "Меньше",
  }),
]);
/**
 * Условие
 */
const condition = ref(new OptionModel());
</script>

<template>
  <div class="table-filter f d-c">
    <h2 class="mb-2">Filter</h2>
    <div class="f cg-3">
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
      <ui-input placeholder="Поиск..."> </ui-input>
      <ui-button class="bold">Поиск</ui-button>
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
