<template>
  <div class="minimize-widget-manager">
    <div
      class="minimize-widget"
      v-for="item in minimizeWidgetList"
      :key="item.id"
      @click="cancelMinimizingWidget(item.id)"
    >
      <p>{{ item.title }}</p>
      <button @click="closeWidget(item.id)">
        <font-awesome-icon icon="xmark" />
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "MinimizeWidgetManager",
  computed: {
    ...mapGetters({
      widgetList: "WidgetManager/getWidgetList",
    }),
    minimizeWidgetList() {
      const widgetList = this.widgetList;
      return widgetList.filter((item) => item.isMinimize);
    },
  },
  methods: {
    ...mapActions({
      cancelMinimizingWidget: "WidgetManager/cancelMinimizingWidget",
      closeWidget: "WidgetManager/closeWidget",
    }),
  },
};
</script>

<style lang="scss">
.minimize-widget-manager {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 5px;
  .minimize-widget {
    min-width: 80px;
    cursor: pointer;
    margin-right: 5px;
    padding: 3px;
    display: flex;
    align-items: center;
    background-color: #222831;
    color: #ffffff;
    button {
      border: 0;
      margin: 0;
      padding: 0;
      margin-left: auto;
      cursor: pointer;
      background-color: #222831;
      color: #ffffff;
    }
  }
}
</style>
