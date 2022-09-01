<template>
  <button
    class="common-toggle-button"
    :class="active"
    @click="$emit('click', !active)"
  >
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  name: "CommonToggle",
  props: {
    active: {
      type: Boolean,
      required: true,
    },
    activeText: {
      type: String,
      default: "ON",
    },
    passiveText: {
      type: String,
      default: "OFF",
    },
  },
  computed: {
    buttonText() {
      return this.active ? this.activeText : this.passiveText;
    },
  },
};
</script>

<style lang="scss">
.common-toggle-button {
}
</style>
