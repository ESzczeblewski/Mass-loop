<template>
  <app-main></app-main>
  <app-calculator></app-calculator>
</template>

<script>
import Main from "./components/Main.vue";
import Calculator from "./components/Calculator.vue";

export default {
  name: "App",
  components: {
    appMain: Main,
    appCalculator: Calculator,
  },
};
</script>

<style lang="scss">
@import "./design";
</style>
