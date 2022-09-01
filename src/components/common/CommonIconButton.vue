<template>
  <button class="common-icon-button" :class="color" @click="$emit('click')">
    <font-awesome-icon :icon="icon" />
  </button>
</template>

<script>
export default {
  name: "CommonIconButton",
  props: {
    icon: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss">
.common-icon-button {
  background-color: #00adb5;
  color: #eeeeee;
  width: 50px;
  height: 26px;
  border-radius: 13px;
  border: 1px solid #aaaaaa;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #009198;
  }
  &.red {
    background-color: #dc3c3c;
    &:hover {
      background-color: #b63f3f;
    }
  }
}
</style>
