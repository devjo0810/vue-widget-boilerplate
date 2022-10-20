<template>
  <div>
    <div class="tui-datepicker-input tui-datetime-input tui-has-focus">
      <input ref="dateInput" type="text" aria-label="Date-Time" />
      <span class="tui-ico-date" />
    </div>
    <div ref="dateWrapper" style="margin-top: -1px" />
  </div>
</template>

<script>
import DatePicker from "tui-date-picker";
import dayjs from "dayjs";
import { TUI_TO_DAYJS } from "@/config";

export default {
  name: "SearchDateBox",
  props: {
    value: [String, Object, Date],
    format: {
      type: String,
      default: "yyyy-MM-dd",
    },
  },
  data: () => ({
    instance: null,
  }),
  mounted() {
    const vm = this;
    const datePickerInstance = new DatePicker(vm.$refs.dateWrapper, {
      language: "ko",
      date: new Date(vm.value),
      input: {
        element: vm.$refs.dateInput,
        format: vm.format,
      },
    });

    datePickerInstance.on("change", vm.handleChange);
    this.instance = datePickerInstance;
    this.handleChange();
  },
  methods: {
    handleChange() {
      const date = this.instance.getDate();
      this.$emit("change", dayjs(date).format(TUI_TO_DAYJS[this.format]));
    },
  },
};
</script>

<style lang="scss">
.tui-datepicker {
  z-index: 100;
}
.tui-datepicker-input > input {
  padding: 6px 27px 6px 10px !important;
  &:focus {
    border-color: #00adb5;
    border-width: 2px;
  }
}
</style>
