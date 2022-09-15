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
          <div class="row between">
            <p>위젯 화면 이동 제한 여부</p>
            <CommonToggle
              :value="isParent"
              @click="toggleWidgetParent(!isParent)"
            />
          </div>
          <div class="row between">
            <p>위젯 전체 삭제</p>
            <CommonIconButton icon="trash" color="red" @click="initWidget" />
          </div>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CommonToggle from "@/components/common/CommonToggle";
import CommonIconButton from "@/components/common/CommonIconButton";

export default {
  name: "WidgetManagerConfigPopup",
  components: {
    CommonToggle,
    CommonIconButton,
  },
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
      initWidget: "WidgetManager/initWidget",
    }),
  },
};
</script>

<style lang="scss" scoped>
.popup-background {
  @include flex-center;
  @include fixed-cover(9991);
  .widget-config-popup {
    background-color: map-get($colors, "white-lighten1");
    padding: 10px;
    border-radius: 10px;
    width: 300px;
    .header {
      display: flex;
      margin-bottom: 20px;
      color: map-get($colors, "black");
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
        margin-bottom: 15px;
        padding: 0 10px;
        &.between {
          justify-content: space-between;
        }
        &:last-child {
          margin-bottom: 0;
        }
        p {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
