<template>
  <div id="app"><DynamicLayout /></div>
</template>

<script>
import DynamicLayout from "@/layouts/DynamicLayout.vue";

export default {
  components: {
    DynamicLayout,
  },
};
</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100%;
}
</style>
