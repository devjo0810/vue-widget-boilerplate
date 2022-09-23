<template>
  <!-- <div ref="dateBox"></div> -->
  <div>
    <div class="tui-datepicker-input tui-datetime-input tui-has-focus">
      <input type="text" :id="key" aria-label="Date-Time" />
      <span class="tui-ico-date" />
    </div>
    <div ref="dateBox" style="margin-top: -1px" />
  </div>
</template>

<script>
import DatePicker from "tui-date-picker";

export default {
  name: "SearchDateBox",
  data: () => ({
    key: "datepicker_" + new Date().getDate(),
  }),
  mounted() {
    console.log(DatePicker);
    console.log(this.$refs.dateBox);
    const vm = this;
    new DatePicker(this.$refs.dateBox, {
      language: "ko",
      input: {
        element: vm.key,
        format: "yyyy-MM-dd",
      },
    });
  },
};
</script>
