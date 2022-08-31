<template>
  <div class="main-view"><WidgetManager /></div>
</template>

<script>
import WidgetManager from "@/components/widget/WidgetManager";

export default {
  name: "HomeView",
  components: {
    WidgetManager,
  },
};
</script>

<style lang="scss" scoped>
.main-view {
  width: 100%;
  height: calc(100% - 56px);
}
</style>
