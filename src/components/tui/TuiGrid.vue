<template>
  <Grid
    ref="grid"
    :rowHeight="rowHeight"
    :minRowHeight="minRowHeight"
    :header="header"
    :rowHeaders="rowHeaders"
    :columns="columns"
    :data="data"
  />
</template>

<script>
import { Grid } from "@toast-ui/vue-grid";
import { TUI_GRID } from "@/config";

export default {
  name: "CommonGrid",
  components: {
    Grid,
  },
  props: {
    rowHeight: {
      type: Number,
      default: TUI_GRID.ROW_HEIGHT,
    },
    minRowHeight: {
      type: Number,
      default: TUI_GRID.MIN_ROW_HEIGHT,
    },
    header: {
      type: Object,
      default: () => TUI_GRID.HEADER,
    },
    rowHeaders: {
      type: Array,
      default: () => TUI_GRID.ROW_HEADERS,
    },
    columns: Array,
    datas: Array,
    bodyHeight: Number,
    // gridProps: {
    //   type: Object,
    //   required: true,
    // },
  },
  computed: {
    gridInstance() {
      return this.$refs.grid.gridInstance;
    },
  },
};
</script>
