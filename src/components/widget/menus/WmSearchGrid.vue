<template>
  <div class="wm-search-grid">
    <div class="header"><SearchArea v-bind="searchAreaProps" /></div>
    <div class="body">
      <TuiGrid ref="grid" v-bind="gridProps" />
    </div>
    <WidgetSpinner :id="compoId" />
    <WidgetDialog :id="compoId" />
  </div>
</template>

<script>
import Base from "./BaseComponent.vue";
import SearchArea from "@/components/search/SearchArea";
import { Grid as TuiGrid } from "@toast-ui/vue-grid";
import { TUI_GRID } from "@/config";
import { mapGetters } from "vuex";

export default {
  extends: Base,
  name: "WmSearchGrid",
  components: {
    TuiGrid,
    SearchArea,
  },
  computed: {
    ...mapGetters({
      widgetList: "WidgetManager/getWidgetList",
    }),
    widgetSizeReset() {
      const { compoId, widgetList } = this;
      const widget = widgetList.find((item) => item.id === compoId);
      return widget.sizeReset;
    },
    gridInstance() {
      const grid = this.$refs.grid;
      return grid.gridInstance;
    },
  },
  watch: {
    widgetSizeReset: "gridAutoResizing",
  },
  data: () => ({
    searchAreaProps: {
      colCount: 8,
      rows: [
        [
          {
            label: "테스트1",
            type: "text",
            searchKey: "text1",
            value: "text1",
          },
          {
            label: "테스트2",
            colspan: "3",
            type: "text",
            searchKey: "text2",
            value: "text2",
          },
          {
            label: "테스트3",
            type: "date",
            searchKey: "date1",
            value: "",
          },
        ],
      ],
    },
    gridProps: {
      ...TUI_GRID.default(),
      bodyHeight: "fitToParent",
      columns: [
        {
          header: "Name",
          name: "name",
        },
        {
          header: "Artist",
          name: "artist",
        },
        {
          header: "menuId",
          name: "menuId",
        },
        {
          header: "sortSqnc",
          name: "sortSqnc",
        },
        {
          header: "title",
          name: "title",
        },
      ],
      data: [
        {
          name: "Beautiful Lies",
          artist: "Birdy",
          menuId: "1",
          sortSqnc: 1,
          title: "사용자관리",
        },
        {
          name: "X",
          artist: "Ed Sheeran",
          menuId: "2",
          sortSqnc: 2,
          title: "사용자추가",
        },
      ],
    },
  }),
  methods: {
    gridAutoResizing() {
      this.gridInstance.refreshLayout();
    },
  },
};
</script>

<style lang="scss">
.wm-search-grid {
  padding: 10px;
  height: 100%;
  .header {
    height: 26px;
  }
  .body {
    height: calc(100% - 26px);
  }
}
</style>
