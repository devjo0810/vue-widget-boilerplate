<template>
  <div class="toastManager">
    <transition-group name="slide-up" tag="ul">
      <ToastItem
        v-for="(toast, i) in toastList"
        :key="i"
        v-bind="toast"
        class="slide-up-item"
      />
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ToastItem from "./ToastItem.vue";

export default {
  name: "ToastManager",
  components: {
    ToastItem,
  },
  computed: {
    ...mapGetters({
      toastList: "Toast/getToastList",
    }),
  },
};
</script>

<style lang="scss">
.toastManager {
  position: fixed;
  bottom: map-get($widget, "minimize-wrapper-height");
  right: 10px;
  ul {
    margin: 0;
  }
}
</style>
