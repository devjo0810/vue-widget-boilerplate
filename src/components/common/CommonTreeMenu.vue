<template>
  <li
    class="common-tree-menu"
    @mouseover="show = true"
    @mouseleave="show = false"
  >
    <span>{{ options.title }}</span>
    <ul v-if="subMenuShow">
      <common-tree-menu
        v-for="(subMenu, i) in options.menuList"
        :key="i"
        :options="subMenu.options"
      />
    </ul>
  </li>
</template>

<script>
export default {
  name: "CommonTreeMenu",
  props: {
    options: Object,
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
