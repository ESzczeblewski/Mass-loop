<template>
  <app-nav></app-nav>
  <main class="main">
    <h1 class="main__heading">
      Inteligentna kruszarka, która zmienia szkło w piasek.
    </h1>
    <div class="main__product">
      <img
        class="main__product__img"
        src="../assets/maasloop_orange_open_sm.png"
        alt="Product photo"
      />
      <img
        class="main__product__bag"
        src="../assets/shop-icon.png"
        alt="Shopping bag icon"
      />
    </div>
    <div class="main__description">
      <h2>Płać 5 razy mniej za wywóz odpadów szkalnych.</h2>
      <p>
        Kruszarka zmniejsza gabaryty szklanych śmieci, a Ty płacisz
        PIĘ-CIO-KROT-NIE niższe rachunki za ich wywóz.
      </p>
    </div>
  </main>
</template>

<script>
import Navigation from "./Navigation.vue";

export default {
  components: {
    appNav: Navigation,
  },
};
</script>

<style lang="scss" scoped>
@import "../design";

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 13.8em;
  text-align: center;
  line-height: 4.3rem;

  &__heading {
    width: 9.15em;
  }

  &__product {
    position: relative;
    margin-top: 6em;

    &__bag {
      position: absolute;
      right: 2.9em;
      bottom: 3.5em;
      cursor: pointer;
    }
  }

  &__description {
    background-color: $main-orange;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 31.3em;
    border-radius: 1em;

    h2 {
      width: 11.7em;
      margin-bottom: 1.04em;
    }

    p {
      font-size: 1.6rem;
      line-height: 2.5rem;
      width: 20em;
    }
  }
}
</style>