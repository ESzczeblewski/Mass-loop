<template>
  <nav class="nav">
    <img class="nav__logo" src="../assets/logo.png" alt="Company logo" />
    <div class="nav__container">
      <div class="nav__container__lang">
        <p>PL</p>
        <img src="../assets/dropdown-arrow.png" alt="Dropdown arrow" />
      </div>
      <button
        class="nav__container__hamburger"
        :class="{
          'nav__container__hamburger--active': this.$store.state.openMobileNav,
        }"
        @click="openNav()"
      >
        <span class="nav__container__hamburger__box">
          <span class="nav__container__hamburger__inner"></span>
        </span>
      </button>
    </div>
    <div
      class="nav__menu"
      :class="{ 'nav__menu--active': this.$store.state.openMobileNav }"
    >
      <ul class="nav__menu__list">
        <li>Policz zyski</li>
        <li>O produkcie</li>
        <li>Kontakt</li>
        <li>FAQ</li>
      </ul>
      <button class="nav__menu__btn btn">KUP</button>
    </div>
  </nav>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Navigation",

  data() {
    return {
      hamburgerActive: false,
    };
  },
  methods: {
    ...mapMutations(["openNav"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../design";

.nav {
  position: fixed;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2.6em;
  padding-bottom: 2.6em;
  padding-left: 2em;
  padding-right: 2em;
  box-shadow: 0px 4px 24px -5px rgba(0, 0, 0, 0.15);
  background-color: $reg-white;
  z-index: 999;

  &__logo {
    width: 9.7em;
  }

  &__container {
    display: flex;

    &__lang {
      display: flex;
      align-items: center;
      margin-right: 3.3em;

      p {
        font-size: 1.6rem;
        margin-right: 0.3em;
      }
    }
  }

  &__menu {
    background-color: $reg-white;
    font-weight: $font-med;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    top: 9.3em;
    right: 0;
    left: -100%;
    opacity: 0;
    pointer-events: none;
    height: 100vh;
    transition: all 0.2s ease;

    &--active {
      left: 0;
      opacity: 1;
      pointer-events: all;
      transition: all 0.2s ease;
    }

    &__list {
      color: $main-black;
      margin-top: 4.4em;

      li {
        font-size: 1.5rem;
        margin-bottom: 4.8em;
        cursor: pointer;
      }
    }
  }
}

.nav__container__hamburger {
  font-size: $default-font-size;
  display: inline-block;
  cursor: pointer;
  padding: 0;
  background-color: transparent;
  border: 0;
  transition: transform 0.3s 0.1s ease-in-out, visibility 0s 0.4s;
  @media screen and (min-width: 60em) {
    display: none;
  }
  &__box {
    width: 3.6em;
    height: 2.6em;
    display: inline-block;
    position: relative;
  }
  &__inner {
    @include hamburger-line;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: background-color 0.1s ease-in-out;
  }
  &__inner::before,
  &__inner::after {
    @include hamburger-line;
    content: "";
    left: 0;
    transition: transform 0.2s ease-in-out;
  }
  &__inner::before {
    top: -10px;
  }
  &__inner::after {
    top: 10px;
  }
  &--active .nav__container__hamburger__inner {
    background-color: transparent;
  }
  &--active .nav__container__hamburger__inner:before {
    transform: translateY(10px) rotate(45deg);
  }
  &--active .nav__container__hamburger__inner:after {
    transform: translateY(-10px) rotate(-45deg);
  }
}
</style>