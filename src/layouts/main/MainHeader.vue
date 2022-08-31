<template>
  <header class="main-header">
    <ul class="left-section">
      <li v-for="(item, i) in menuList" :key="i" @click="createWidget(item)">
        {{ item.title }}
      </li>
    </ul>
    <section class="right-section"></section>
  </header>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "MainHeader",
  data: () => ({
    menuList: [
      {
        title: "Signup",
        compoName: "Signup",
        w: 500,
        h: 500,
      },
      {
        title: "Grid",
        compoName: "Grid",
        w: 500,
        h: 300,
      },
      {
        title: "Tree",
        compoName: "Tree",
        w: 300,
        h: 500,
      },
      {
        title: "Card",
        compoName: "Card",
        w: 250,
        h: 250,
      },
    ],
  }),
  methods: {
    ...mapActions({
      createWidgetAction: "WidgetManager/createWidget",
    }),
    createWidget(item) {
      this.createWidgetAction(item);
    },
  },
};
</script>

<style lang="scss" scoped>
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
    li {
      list-style: none;
      margin-right: 5px;
      cursor: pointer;
    }
  }
}
</style>
