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
  props: ["value", "format"],
  data: () => ({
    inputKey: "datepicker_input_" + new Date().getDate(),
    wrapperKey: "datepicker_wrapper_" + new Date().getDate(),
    instance: null,
  }),
  mounted() {
    const vm = this;
    const datePickerInstance = new DatePicker(this.$refs.dateWrapper, {
      language: "ko",
      date: vm.value,
      input: {
        element: vm.$refs.dateInput,
        format: vm.format || "yyyy-MM-dd",
      },
    });

    datePickerInstance.on("change", vm.handleChange);
    this.instance = datePickerInstance;
    this.handleChange();
  },
  methods: {
    handleChange() {
      console.log("handleChange", this.instance.getDate());
      this.$emit("change", this.instance.getDate());
    },
  },
};
</script>

<style lang="scss">
.tui-datepicker {
  z-index: 1;
}
</style>
