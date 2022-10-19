<template>
  <div>
    <div class="tui-datepicker-input tui-datetime-input tui-has-focus">
      <input
        :id="inputKey"
        ref="dateInput"
        type="text"
        aria-label="Date-Time"
      />
      <span class="tui-ico-date" />
    </div>
    <div :id="wrapperKey" ref="dateWrapper" style="margin-top: -1px" />
  </div>
</template>

<script>
import DatePicker from "tui-date-picker";

export default {
  name: "SearchDateBox",
  data: () => ({
    inputKey: "datepicker_input_" + new Date().getDate(),
    wrapperKey: "datepicker_wrapper_" + new Date().getDate(),
  }),
  mounted() {
    const vm = this;
    new DatePicker(this.$refs.dateWrapper, {
      language: "ko",
      input: {
        element: vm.$refs.dateInput,
        format: "yyyy-MM-dd",
      },
    });
  },
};
</script>

<style lang="scss">
.tui-datepicker {
  z-index: 1;
}
</style>
