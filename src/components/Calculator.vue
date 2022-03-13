<template>
  <section class="calc">
    <h2>{{ $t("calculator.heading") }}</h2>
    <p>{{ $t("calculator.paragraph") }}</p>
    <div class="calc__inputs">
      <div class="calc__inputs__containers">
        <h4>{{ $t("calculator.firstQuestion") }}</h4>
        <input
          @click="activate"
          :class="{ active: calcActive }"
          type="number"
          v-model="containers"
        />
      </div>
      <div class="calc__inputs__cost">
        <h4>{{ $t("calculator.secondQuestion") }}</h4>
        <input
          @click="activate"
          :class="{ active: calcActive }"
          type="number"
          v-model="singleCost"
        />
      </div>
    </div>
    <div class="calc__result">
      <h4>{{ $t("calculator.savings1") }}</h4>
      <h4 :class="{ active: calcActive }">
        <span>{{ calcResult }}</span> zł
      </h4>
      <h4>{{ $t("calculator.savings2") }}</h4>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      containers: 20,
      singleCost: 20,
      calcActive: false,
    };
  },

  methods: {
    activate() {
      this.calcActive = true;
    },
  },

  computed: {
    calcResult() {
      return Math.ceil(
        12 *
          (this.containers * this.singleCost -
            (this.containers * this.singleCost) / 5)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../design";

.calc {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2em;
  margin-top: 6em;

  @media screen and (min-width: 64em) {
    margin-top: 9em;
  }

  p {
    font-size: 1.6rem;
    margin-top: 1.56em;

    @media screen and (min-width: 64em) {
      font-size: 2rem;
      margin-top: 1.9em;
    }
  }

  &__inputs {
    @media screen and (min-width: 64em) {
      display: flex;
      align-items: center;
      margin-top: 8.3em;
    }

    &__containers,
    &__cost {
      @include calc-input;
    }

    &__cost {
      margin-top: 2em;

      @media screen and (min-width: 64em) {
        margin-top: 0;
        margin-left: 3em;
      }
    }
  }

  &__result {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 2em;
    background-color: $main-black;
    width: 32em;
    height: 21.3em;
    border-radius: 0.93em;
    color: $reg-white;

    @media screen and (min-width: 64em) {
      flex-direction: row;
      justify-content: center;
      width: 101.2em;
      height: 12.7em;
      margin-top: 3em;
    }

    > h4:first-of-type {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 3.25em;
      text-align: center;
      margin-top: 2.5em;
    }

    > h4:nth-of-type(2) {
      font-size: 2.8rem;
      margin-top: 0.55em;
      opacity: 0.5;

      @media screen and (min-width: 64em) {
        margin-left: 0.85em;
        margin-right: 0.85em;
      }

      &.active {
        color: $main-orange;
        opacity: 1;
      }
    }

    > h4:nth-of-type(3) {
      margin-top: 0.95em;
    }

    > h4:first-of-type,
    > h4:nth-of-type(2),
    > h4:nth-of-type(3) {
      @media screen and (min-width: 64em) {
        margin-top: 0em;
      }
    }
  }
}
</style>