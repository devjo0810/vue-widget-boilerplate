<template>
  <transition name="fade" v-if="isOpen">
    <div class="popup-background">
      <div class="widget-config-popup">
        <section class="header">
          <p>위젯 설정</p>
          <button @click="closePopup">
            <font-awesome-icon icon="xmark" />
          </button>
        </section>
        <section class="body">
          <div class="row"></div>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "WidgetManagerConfigPopup",
  computed: {
    ...mapGetters({
      isOpen: "Popup/getWidgetManagerConfig",
      isParent: "WidgetManager/getIsParent",
    }),
  },
  methods: {
    ...mapActions({
      closePopup: "Popup/closeWidgetManagerConfig",
      toggleWidgetParent: "WidgetManager/toggleWidgetParent",
    }),
  },
};
</script>

<style lang="scss" scoped>
.popup-background {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  z-index: 9991;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  .widget-config-popup {
    background-color: #ffffff;
    padding: 10px;
    border-radius: 10px;
    width: 360px;
    height: 360px;
    .header {
      display: flex;
      margin-bottom: 10px;
      p {
        font-size: 1.5rem;
        font-weight: 500;
      }
      button {
        font-size: 2rem;
        margin-left: auto;
      }
    }
    .body {
      .row {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
