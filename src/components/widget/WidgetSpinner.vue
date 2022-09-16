<template>
  <CommonSpinnerWrapper v-if="spinner">
    <CommonSpinner1 />
  </CommonSpinnerWrapper>
</template>

<script>
import CommonSpinnerWrapper from "@/components/common/CommonSpinnerWrapper.vue";
import CommonSpinner1 from "@/components/common/CommonSpinner1.vue";
import { mapGetters } from "vuex";

export default {
  name: "WidgetSpinner",
  components: {
    CommonSpinnerWrapper,
    CommonSpinner1,
  },
  props: ["id"],
  computed: {
    ...mapGetters({
      widgetList: "WidgetManager/getWidgetList",
    }),
    spinner() {
      const widget = this.widgetList.find((item) => item.id === this.id);
      return widget.spinner;
    },
  },
};
</script>
