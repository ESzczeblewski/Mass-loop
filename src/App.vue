<template>
  <app-main></app-main>
  <app-calculator></app-calculator>
  <app-buy></app-buy>
</template>

<script>
import Main from "./components/Main.vue";
import Calculator from "./components/Calculator.vue";
import Buy from "./components/Buy.vue";

export default {
  name: "App",
  components: {
    appMain: Main,
    appCalculator: Calculator,
    appBuy: Buy,
  },
};
</script>

<style lang="scss">
@import "./design";
</style>
