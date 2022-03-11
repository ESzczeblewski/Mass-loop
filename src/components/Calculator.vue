<template>
  <section class="calc">
    <h2>Ile zaoszczędzisz?</h2>
    <p>Rachunek jest prosty.</p>
    <div class="calc__inputs">
      <div class="calc__inputs__containers">
        <h4>Ile pojemników na szkło zapełniasz miesięcznie?</h4>
        <input
          @click="activate"
          :class="{ active: calcActive }"
          type="number"
          v-model="containers"
        />
      </div>
      <div class="calc__inputs__cost">
        <h4>Ile płacisz za wywóz jednego pojemnika na szkło?</h4>
        <input
          @click="activate"
          :class="{ active: calcActive }"
          type="number"
          v-model="singleCost"
        />
      </div>
    </div>
    <div class="calc__result">
      <h4>Dzięki kruszarce zaoszczędzisz</h4>
      <h4 :class="{ active: calcActive }">
        <span>{{ calcResult }}</span> zł
      </h4>
      <h4>rocznie.</h4>
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

  p {
    font-size: 1.6rem;
    margin-top: 1.56em;
  }

  &__inputs {
    &__containers,
    &__cost {
      @include calc-input;
    }

    &__cost {
      margin-top: 2em;
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

      &.active {
        color: $main-orange;
        opacity: 1;
      }
    }

    > h4:nth-of-type(3) {
      margin-top: 0.95em;
    }
  }
}
</style>