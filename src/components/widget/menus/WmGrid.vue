<template>
  <div class="wm-grid">
    <CommonGrid :gridProps="gridProps" />
    <WidgetSpinner :id="compoId" />
    <WidgetDialog :id="compoId" />
  </div>
</template>

<script>
import Base from "./BaseComponent.vue";
import CommonGrid from "@/components/common/CommonGrid.vue";

export default {
  extends: Base,
  name: "WmGrid",
  components: {
    CommonGrid,
  },
  data: () => ({
    gridProps: {
      bodyHeight: 500,
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
    },
  }),
};
</script>

<style lang="scss">
.wm-grid {
  min-width: 500px;
  padding: 5px;
}
</style>
