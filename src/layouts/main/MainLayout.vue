<template>
  <div class="main-layout">
    <MainHeader />
    <router-view />
    layout
  </div>
</template>

<script>
import MainHeader from "./MainHeader";

export default {
  name: "MainLayout",
  components: {
    MainHeader,
  },
};
</script>

<style lang="scss" scoped>
.main-layout {
  width: 100%;
  height: 100%;
}
</style>
