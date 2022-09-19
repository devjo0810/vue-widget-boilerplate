<template>
  <div class="widget-body" @click="$emit('widgetBodyClick')">
    <component
      ref="bodyComponent"
      v-if="component"
      :is="component"
      v-bind="compoData"
      :compoId="compoId"
    />
  </div>
</template>

<script>
import Loading from "./menus/WidgetMenuLoading";
import NotFound from "./menus/WidgetMenuNotFound";

export default {
  name: "WidgetBody",
  components: {
    Loading,
    NotFound,
    Grid: () => import("./menus/WidgetMenuGrid"),
    Signup: () => import("./menus/WidgetMenuSignup"),
    Tree: () => import("./menus/WidgetMenuTree"),
  },
  props: {
    compoId: {
      // 컴포넌트 고유 Id
      type: String,
      required: true,
    },
    compoName: {
      // Widget 컴포넌트명
      type: String,
      default: "Loading",
    },
    compoData: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    bodyInterval: null,
    refBody: null,
  }),
  computed: {
    component() {
      let menuName = this.compoName;
      if (!this.$options.components[menuName]) {
        // 지정된 컴포넌트가 아닐경우 NotFound로 처리
        menuName = "NotFound";
      }
      return menuName;
    },
    bodyScrollWidth() {
      const refBody = this.refBody;
      if (!refBody) return null;
      return refBody.$el.scrollWidth;
    },
    bodyScrollHeight() {
      const refBody = this.refBody;
      if (!refBody) return null;
      return refBody.$el.scrollHeight;
    },
  },
  watch: {
    refBody() {
      this.ready();
    },
  },
  mounted() {
    this.setCheckBodyInterval();
  },
  methods: {
    setCheckBodyInterval() {
      this.bodyInterval = setInterval(this.checkBodyMount, 250);
    },
    checkBodyMount() {
      if (this.refBody) {
        clearInterval(this.bodyInterval);
        this.bodyInterval = null;
        return;
      }
      if (this.$refs.bodyComponent) {
        this.refBody = this.$refs.bodyComponent;
      }
    },
    ready() {
      if (this.refBody) {
        this.$emit(
          "widgetBodyReady",
          this.bodyScrollWidth,
          this.bodyScrollHeight,
          this.refBody
        );
      }
    },
  },
};
</script>

<style lang="scss">
.widget-body {
  position: relative;
  z-index: 0;
  width: 100%;
  height: calc(100% - map-get($widget, "widget-header-height"));
  overflow: auto;
}
</style>
