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
import { mapGetters, mapActions } from "vuex";

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
    spinner() {
      const widget = this.widgetList.find((item) => item.id === this.compoId);
      return widget.spinner;
    },
  },
  methods: {
    ...mapActions({
      offSpinner: "WidgetManager/offSpinner",
    }),
  },
  mounted() {
    setTimeout(() => {
      this.offSpinner(this.compoId);
    }, 3000);
    this.$toast.danger("WidgetMenuNotFound");
  },
};
</script>
