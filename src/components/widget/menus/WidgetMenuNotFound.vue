<template>
  <div>
    WidgetMenuNotFound
    <CommonSpinnerWrapper v-if="spinner">
      <CommonSpinner1 />
    </CommonSpinnerWrapper>
  </div>
</template>

<script>
import CommonSpinnerWrapper from "@/components/common/CommonSpinnerWrapper.vue";
import CommonSpinner1 from "@/components/common/CommonSpinner1.vue";
import { mapGetters } from "vuex";

export default {
  name: "WidgetMenuNotFound",
  components: {
    CommonSpinnerWrapper,
    CommonSpinner1,
  },
  props: {
    compoId: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      widgetList: "WidgetManager/getWidgetList",
    }),
    compoName() {
      const widget = this.widgetList.find((item) => item.id === this.compoId);
      return widget.compoName;
    },
    spinner() {
      const widget = this.widgetList.find((item) => item.id === this.compoId);
      return widget.spinner;
    },
  },
  mounted() {
    this.$toast.danger(
      `${this.compoName} 일치하는 위젯 컴포넌트를 찾을 수 없습니다.`
    );
  },
};
</script>
