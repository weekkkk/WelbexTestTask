<script setup lang="ts">
import { getCurrentInstance, reactive, ref, watch } from "vue";
import UiPagination from "@/components/ui/pagination/ui-pagination.vue";
import UiTable from "@/components/ui/table/ui-table.vue";
import UiTh from "@/components/ui/table/ui-th.vue";
import UiTr from "@/components/ui/table/ui-tr.vue";
import UiTd from "@/components/ui/table/ui-td.vue";
import { CellModel, RowModel, TableModel } from "@/components/ui/table/models";
import { OptionModel } from "@/components/ui/dropdown/models";
import TableFilter from "./components/table-filter.vue";

import { fetchTests, createTest } from "@/http/testAPI";

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

const page = ref(1);
const limit = 10;
const length = ref(0);
const name = ref("");
const count = ref(0);
const distance = ref(0);
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
const rows = ref<RowModel[]>([]);
const $table = ref<any>();
const instance = getCurrentInstance();
const fetch = () => {
  fetchTests(name.value, count.value, distance.value, page.value, limit).then((res) => {
    if (res) {
      length.value = res.length;
      rows.value = res.tests.map(
        (test: {
          id: number;
          date: string;
          name: string;
          count: number;
          distance: number;
        }) => {
          if (test) {
            return new RowModel({
              Id: test.id,
              Cells: [
                new CellModel({
                  Id: 0,
                  Title: new Date(test.date).toLocaleDateString(),
                }),
                new CellModel({
                  Id: 1,
                  Title: test.name,
                }),
                new CellModel({
                  Id: 2,
                  Title: test.count + "",
                }),
                new CellModel({
                  Id: 3,
                  Title: test.distance + "",
                }),
              ],
            });
          }
        }
      );
    }
  });
};
fetch();
watch(page, fetch);
const onSearch = ( data: { columnId: number; conditionId: number; search: string } ) => {
  
};
</script>

<template>
  <h1 class="bold mb-3">Welbex Test Task</h1>
  <table-filter class="mb-3" @search="onSearch" />
  <ui-pagination class="mb-3" v-model="page" :limit="limit" :length="length" />
  <ui-table ref="$table" :columns="['1fr', '1fr', '1fr', '1fr']">
    <ui-th>
      <ui-td v-for="cell in header.Cells" :key="cell.Id">{{ cell.Title }}</ui-td>
    </ui-th>
    <ui-tr v-for="row in rows" :key="row.Id">
      <ui-td v-for="cell in row.Cells" :key="cell.Id">{{ cell.Title }}</ui-td>
    </ui-tr>
  </ui-table>
</template>

<style lang="less" scoped></style>
