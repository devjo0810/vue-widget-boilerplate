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
  background-color: map-get($colors, "point");
  color: #eeeeee;
  width: 50px;
  height: 26px;
  border-radius: 13px;
  border: 1px solid map-get($colors, "white-darken1");
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: map-get($colors, "point-darken1");
  }
  &.red {
    background-color: map-get($colors, "red");
    &:hover {
      background-color: map-get($colors, "red-darken1");
    }
  }
}
</style>
