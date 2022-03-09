<template>
  <app-main></app-main>
</template>

<script>
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    appMain: Main,
  },
};
</script>

<style lang="scss">
@import "./design";
</style>
