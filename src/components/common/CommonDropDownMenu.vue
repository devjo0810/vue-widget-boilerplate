<template>
  <li
    class="common-drop-down-menu"
    @mouseover="show = true"
    @mouseleave="show = false"
    @click="$emit('click')"
  >
    <span>{{ options.title }}</span>
    <ul v-if="subMenuShow" :class="subMenuWrapperClass">
      <CommonTreeMenu
        v-for="(subMenu, i) in options.menuList"
        :key="i"
        :options="subMenu"
      />
    </ul>
  </li>
</template>

<script>
import CommonTreeMenu from "./CommonTreeMenu.vue";

export default {
  name: "CommonDropDownMenu",
  components: {
    CommonTreeMenu,
  },
  props: {
    options: Object,
    subMenuWrapperClass: String,
  },
  computed: {
    subMenuShow() {
      const { show, options } = this;
      if (show && options.menuList) {
        return true;
      } else {
        return false;
      }
    },
  },
  data: () => ({
    show: false,
  }),
};
</script>
