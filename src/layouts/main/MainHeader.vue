<template>
  <header class="main-header">
    <ul class="left-section">
      <li
        class="nav-menu"
        v-for="(item, i) in widgetMenuList"
        :key="i"
        @click="createWidget(item)"
      >
        <span>{{ item.title }}</span>
      </li>
    </ul>
    <section class="right-section">
      <button title="위젯설정" @click="openWidgetManagerConfigPopup">
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
  @include flex-between;
  width: 100%;
  height: map-get($main-layout, "header-height");
  padding: 0 3vw;
  background-color: map-get($colors, "black");
  color: map-get($colors, "white");
  border-bottom: 3px solid map-get($colors, "point");

  .left-section {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    font-size: 1.3rem;
    height: 100%;
    .nav-menu {
      @include flex-center;
      @include overflow-ellipsis;
      position: relative;
      height: 100%;
      width: 120px;
      cursor: pointer;
      padding: 0 5px;
      transition: $transition;
      &:hover {
        background-color: map-get($colors, "black-lighten2");
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
