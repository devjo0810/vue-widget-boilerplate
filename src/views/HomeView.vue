<template>
  <div class="main-view">
    <div class="main-widget-wrapper">
      <WidgetManager />
    </div>
    <div class="minimize-widget-wrapper"><MinimizeWidgetManager /></div>
  </div>
</template>

<script>
import WidgetManager from "@/components/widget/WidgetManager";
import MinimizeWidgetManager from "@/components/widget/MinimizeWidgetManager";

export default {
  name: "HomeView",
  components: {
    WidgetManager,
    MinimizeWidgetManager,
  },
};
</script>

<style lang="scss">
.main-view {
  width: 100%;
  height: calc(100% - 56px);
  .main-widget-wrapper {
    width: 100%;
    height: calc(100% - 36px);
    background-color: #ffffff;
  }
  .minimize-widget-wrapper {
    width: 100%;
    height: 36px;
    background-color: #eeeeee;
    border-top: 2px solid #00adb5;
  }
}
</style>
