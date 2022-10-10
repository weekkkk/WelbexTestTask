<script setup lang="ts">
import { ref, computed } from "vue";
/**
 * Содели для таблицы
 */
import { TestTableColumnEnum } from "./enums";
import { TestModel } from "./models";
/**
 * Модели для компонентов
 */
import { CellModel, RowModel, TableModel } from "@/components/ui/table/models";
import { FilterRequestModel } from "./components/table-filter/models";
import { FilterConditionEnum } from "./components/table-filter/enums";
/**
 * Компоненты
 */
import UiPagination from "@/components/ui/pagination/ui-pagination.vue";
import UiTable from "@/components/ui/table/ui-table.vue";
import UiTh from "@/components/ui/table/ui-th.vue";
import UiTr from "@/components/ui/table/ui-tr.vue";
import UiTd from "@/components/ui/table/ui-td.vue";
import TableFilter from "./components/table-filter/table-filter.vue";
import TableSort from "./components/table-sort/table-sort.vue";
import SortRequestModel from "./components/table-sort/models/SortRequestModel";
import { SortConditionEnum } from "./components/table-sort/enums";
/**
 * Массив моделей
 */
const tests: TestModel[] = [];
/**
 * Инициализация массива
 */
for (let i = 1; i < 117; i++) {
  tests.push(
    new TestModel({
      Id: i,
      Date: new Date(),
      Name: `Name ${i}`,
      Count: i,
      Distance: i * 10,
    })
  );
}
/**
 * Массив моделей после сортировки
 */
const sortedTests = ref<TestModel[]>(tests);
/**
 * Массив моделей после фильтрации
 */
const filteredTests = ref<TestModel[]>(sortedTests.value);
/**
 * Текущая страница
 */
const page = ref(1);
/**
 * Кол-во строк на одной странице
 */
const limit = 5;
/**
 * Стартовый индекс (с которого начать вырезать из массива данные)
 */
const start = ref(0);
/**
 * Конечный индекс (на котром заканчивать вырезать из массива данные)
 */
const end = ref(0);
/**
 * Шапка талицы
 */
const header: RowModel = new RowModel({
  Cells: [
    new CellModel({
      Id: TestTableColumnEnum.Date,
      Title: "Дата",
    }),
    new CellModel({
      Id: TestTableColumnEnum.Name,
      Title: "Название",
    }),
    new CellModel({
      Id: TestTableColumnEnum.Count,
      Title: "Количество",
    }),
    new CellModel({
      Id: TestTableColumnEnum.Distance,
      Title: "Расстояние",
    }),
  ],
});
/**
 * Строки таблицы
 */
const rows = computed(() => {
  if (!tests) return [];
  return filteredTests.value.slice(start.value, end.value).map(
    (test) =>
      new RowModel({
        Id: test.Id,
        Cells: [
          new CellModel({
            Id: TestTableColumnEnum.Date,
            Title: test.DateString,
          }),
          new CellModel({
            Id: TestTableColumnEnum.Name,
            Title: test.Name,
          }),
          new CellModel({
            Id: TestTableColumnEnum.Count,
            Title: test.CountString,
          }),
          new CellModel({
            Id: TestTableColumnEnum.Distance,
            Title: test.DistanceString,
          }),
        ],
      })
  );
});
/**
 * Старый запрос на фильтрацию
 */
const oldFilterRequest = ref<FilterRequestModel>();
/**
 * При фильтрации
 */
const onFilter = (req: FilterRequestModel) => {
  oldFilterRequest.value = req;
  filteredTests.value = sortedTests.value.filter((test) => {
    switch (req.Column) {
      case TestTableColumnEnum.Name:
        return getIncludesInFilteredByCondition(
          test.Name,
          req.Value.toString(),
          req.Condition
        );
      case TestTableColumnEnum.Count:
        return getIncludesInFilteredByCondition(
          test.Count,
          Number(req.Value),
          req.Condition
        );
      case TestTableColumnEnum.Distance:
        return getIncludesInFilteredByCondition(
          test.Distance,
          Number(req.Value),
          req.Condition
        );
    }
  });
};
/**
 * Содержится ли отфильтрованных
 */
const getIncludesInFilteredByCondition = (
  value: string | number,
  reqValue: string | number,
  condition: FilterConditionEnum
): boolean => {
  switch (condition) {
    case FilterConditionEnum.Equals:
      return value == reqValue;
    case FilterConditionEnum.Contains:
      return value.toString().includes(reqValue.toString());
    case FilterConditionEnum.More:
      return value > reqValue;
    case FilterConditionEnum.Less:
      return value < reqValue;
    default:
      return true;
  }
};
/**
 *
 * При сортировке
 */
const onSort = (req: SortRequestModel) => {
  switch (req.Column) {
    case TestTableColumnEnum.Name:
      sortByCondition("Name", req.Condition);
      break;
    case TestTableColumnEnum.Count:
      sortByCondition("Count", req.Condition);
      break;
    case TestTableColumnEnum.Distance:
      sortByCondition("Distance", req.Condition);
      break;
  }
  if (oldFilterRequest.value) onFilter(oldFilterRequest.value);
  else filteredTests.value = sortedTests.value;
};
/**
 * Сортировать по условию
 */
const sortByCondition = (
  key: "Name" | "Count" | "Distance",
  condition: SortConditionEnum
) => {
  switch (condition) {
    case SortConditionEnum.More:
      sortedTests.value.sort((a, b) => -compare(a[key], b[key]));
      break;
    case SortConditionEnum.Less:
      sortedTests.value.sort((a, b) => compare(a[key], b[key]));
      break;
  }
};
const compare = (a: string | number, b: string | number) => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
};
</script>

<template>
  <h1 class="bold mb-3">Welbex Test Task</h1>
  <table-filter class="mb-3" @filter="onFilter" />
  <table-sort class="mb-3" @sort="onSort"></table-sort>
  <ui-pagination
    class="mb-3"
    v-model="page"
    :limit="limit"
    :length="filteredTests.length"
    v-model:start="start"
    v-model:end="end"
  />
  <ui-table :columns="['1fr', '1fr', '1fr', '1fr']">
    <ui-th>
      <ui-td v-for="cell in header.Cells" :key="cell.Id">{{ cell.Title }}</ui-td>
    </ui-th>
    <ui-tr v-for="row in rows" :key="row.Id">
      <ui-td v-for="cell in row.Cells" :key="cell.Id">{{ cell.Title }}</ui-td>
    </ui-tr>
  </ui-table>
</template>

<style lang="less" scoped></style>
