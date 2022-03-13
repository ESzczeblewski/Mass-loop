<template>
  <app-nav></app-nav>
  <main class="main">
    <h1 class="main__heading">
      {{ $t("heading") }}
    </h1>
    <div class="main__product">
      <img
        class="main__product__img"
        src="../assets/maasloop_orange_open_sm.png"
        srcset="
          ../assets/maasloop_orange_open_sm.png 360w,
          ../assets/maasloop_orange_open_bg.png 861w
        "
        sizes="(min-width: 990px) 861px,
            360px"
        alt="Product photo"
      />
      <img
        class="main__product__bag"
        src="../assets/shop-icon.png"
        alt="Shopping bag icon"
      />
    </div>
    <div class="main__description">
      <h2>{{ $t("description.heading") }}</h2>
      <p>{{ $t("description.paragraph") }}</p>
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
  max-width: 144em;
  margin: auto;

  @media screen and (min-width: 62em) {
    padding-top: 16.6em;
  }

  &__product {
    position: relative;
    margin-top: 6em;

    &__bag {
      position: absolute;
      right: 2em;
      bottom: 3.5em;
      cursor: pointer;

      @media screen and (min-width: 62em) {
        display: none;
      }
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

    @media screen and (min-width: 62em) {
      max-width: 98%;
      height: 32em;
    }

    h2 {
      width: 11.7em;
      margin-bottom: 1.04em;

      @media screen and (min-width: 31em) {
        width: 15em;
      }

      @media screen and (min-width: 62em) {
        width: 20em;
        margin-bottom: 1em;
      }
    }

    p {
      font-size: 1.6rem;
      line-height: 2.5rem;
      width: 20em;

      @media screen and (min-width: 31em) {
        width: 30em;
      }

      @media screen and (min-width: 62em) {
        font-size: 2rem;
        line-height: 3.2rem;
        width: 35em;
      }
    }
  }
}
</style>