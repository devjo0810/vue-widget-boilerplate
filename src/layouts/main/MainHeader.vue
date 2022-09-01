<template>
  <header class="main-header">
    <ul class="left-section">
      <li
        v-for="(item, i) in widgetMenuList"
        :key="i"
        @click="createWidget(item)"
      >
        <span>{{ item.title }}</span>
      </li>
    </ul>
    <section class="right-section">
      <button @click="openWidgetManagerConfigPopup">
        <font-awesome-icon icon="gear" />
      </button>
    </section>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "MainHeader",
  computed: {
    ...mapGetters({
      widgetMenuList: "Menu/getWidgetMenuList",
    }),
  },
  methods: {
    ...mapActions({
      createWidgetAction: "WidgetManager/createWidget",
      openWidgetManagerConfigPopup: "Popup/openWidgetManagerConfig",
    }),
    createWidget(item) {
      this.createWidgetAction(item);
    },
  },
};
</script>

<style lang="scss">
.main-header {
  width: 100%;
  height: 56px;
  padding: 0 3vw;
  background-color: #222831;
  color: #eeeeee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid #00adb5;

  .left-section {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    font-size: 1.3rem;
    height: 100%;
    li {
      height: 100%;
      list-style: none;
      cursor: pointer;
      padding: 0 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.2s ease-in-out;
      &:hover {
        background-color: #484d55;
      }
    }
  }

  .right-section {
    background-color: inherit;
    button {
      font-size: 2rem;
      background-color: inherit;
      color: inherit;
      cursor: pointer;
    }
  }
}
</style>
