<template>
  <div>
    <p>WidgetMenuGrid</p>
    <WidgetSpinner :id="compoId" />
    <WidgetDialog :id="compoId" />
  </div>
</template>

<script>
import Base from "./BaseComponent.vue";
export default {
  extends: Base,
  name: "WidgetMenuGrid",
};
</script>
