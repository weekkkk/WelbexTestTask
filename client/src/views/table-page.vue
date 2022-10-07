<script setup lang="ts">
import { CellModel, RowModel, TableModel } from "@/components/ui/table/models";
import UiTable from "@/components/ui/table/ui-table.vue";
import UiTd from "@/components/ui/table/ui-td.vue";
import UiTh from "@/components/ui/table/ui-th.vue";
import UiTr from "@/components/ui/table/ui-tr.vue";

const table = new TableModel();
for (let i = 0; i < 4; i++) {
  table.Header.Cells.push(new CellModel({ Id: i, Title: "Header " + i }));
}
for (let i = 0; i < 21; i++) {
  table.Rows.push(
    new RowModel({
      Id: i,
    })
  );
  for (let j = 0; j < 4; j++) {
    table.Rows[i].Cells.push({
      Id: j,
      Title: "Col " + j + " Row " + i,
    });
  }
}
</script>

<template>
  <ui-table :columns="['300px', '1fr', '1fr', '1fr']">
    <ui-th>
      <ui-td v-for="cell in table.Header.Cells" :key="cell.Id">{{ cell.Title }}</ui-td>
    </ui-th>
    <ui-tr v-for="row in table.Rows" :key="row.Id">
      <ui-td v-for="cell in row.Cells" :key="cell.Id">
        {{ cell.Title }}
      </ui-td>
    </ui-tr>
  </ui-table>
</template>

<style lang="less" scoped></style>
