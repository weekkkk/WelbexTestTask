<script setup lang="ts">
import { ref } from "vue";
import UiTable from "@/components/ui/table/ui-table.vue";
import UiTh from "@/components/ui/table/ui-th.vue";
import UiTr from "@/components/ui/table/ui-tr.vue";
import UiTd from "@/components/ui/table/ui-td.vue";
import { CellModel, RowModel, TableModel } from "@/components/ui/table/models";
import { OptionModel } from "@/components/ui/dropdown/models";

import TableFilter from "./components/table-filter.vue";

const options: OptionModel[] = [
  new OptionModel({
    Id: 1,
    Title: "Title 1",
  }),
  new OptionModel({
    Id: 2,
    Title: "Title 2",
  }),
];
const option = ref(new OptionModel());

const header: RowModel = new RowModel({
  Cells: [
    new CellModel({
      Id: 0,
      Title: "Дата",
    }),
    new CellModel({
      Id: 1,
      Title: "Название",
    }),
    new CellModel({
      Id: 2,
      Title: "Количество",
    }),
    new CellModel({
      Id: 3,
      Title: "Расстояние",
    }),
  ],
});
</script>

<template>
  <h1 class="bold mb-3">Welbex Test Task</h1>
  <table-filter class="mb-3"></table-filter>
  <ui-table :columns="['1fr', '1fr', '1fr', '1fr']">
    <ui-th>
      <ui-td v-for="cell in header.Cells" :key="cell.Id">{{ cell.Title }}</ui-td>
    </ui-th>
  </ui-table>
</template>

<style lang="less" scoped></style>
