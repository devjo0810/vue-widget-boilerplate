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
import { mapActions } from "vuex";

export default {
  name: "WidgetMenuNotFound",
  components: {
    CommonSpinnerWrapper,
    CommonSpinner1,
  },
  props: {
    compoId: {
      type: String,
    },
    spinner: {
      type: Boolean,
      default: false,
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
  },
};
</script>
