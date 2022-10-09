<script setup lang="ts">
import { ref } from "vue";
import UiInput from "@/components/ui/input/ui-input.vue";
import UiDropdown from "@/components/ui/dropdown/ui-dropdown.vue";
import UiPopover from "@/components/ui/popover/ui-popover.vue";
import { OptionModel } from "@/components/ui/dropdown/models";

const options: OptionModel[] = [
  new OptionModel({
    Id: 1,
    Title: "Title 1",
  } ),
  new OptionModel({
    Id: 2,
    Title: "Title 2",
  }),
];
const option = ref(new OptionModel());
</script>

<template>
  <div style="height: 200px"></div>
  <ui-dropdown v-model="option" placeholder='Placeholder' :options="options"></ui-dropdown>
  <ui-dropdown v-model="option" placeholder='Placeholder' :options="options"></ui-dropdown>
  <!-- <ui-input error></ui-input> -->
</template>

<style lang="less" scoped></style>
