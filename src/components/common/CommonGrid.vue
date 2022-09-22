<template>
  <Grid
    :rowHeight="rowHeight"
    :minRowHeight="minRowHeight"
    :header="header"
    v-bind="gridProps"
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
    gridProps: {
      type: Object,
      required: true,
    },
  },
};
</script>
