<template>
  <nav class="nav">
    <div class="wrapper">
      <img class="nav__logo" src="../assets/logo.png" alt="Company logo" />
      <div
        class="nav__menu"
        :class="{ 'nav__menu--active': this.$store.state.openMobileNav }"
      >
        <ul class="nav__menu__list">
          <li>{{ $t("nav.profits") }}</li>
          <li>{{ $t("nav.aboutProduct") }}</li>
          <li>{{ $t("nav.contact") }}</li>
          <li>{{ $t("nav.faq") }}</li>
        </ul>
        <button class="nav__menu__btn btn">{{ $t("nav.buy") }}</button>
      </div>
      <div class="nav__container">
        <div
          class="nav__container__lang"
          :class="{ 'lang--active': this.$store.state.openLangMenu }"
        >
          <div class="lang__current" @click="openLangMenu()">
            {{ this.$store.state.currentLanguage.toUpperCase() }}
            <img src="../assets/dropdown-arrow.png" alt="Dropdown arrow" />
          </div>
          <template v-for="item in this.$store.state.languages" :key="item">
            <div
              :class="{ active: this.$store.state.openLangMenu }"
              class="lang__select"
              @click="changeLang(item)"
            >
              {{ item.toUpperCase() }}
            </div>
          </template>
        </div>
        <button
          class="nav__container__hamburger"
          :class="{
            'nav__container__hamburger--active':
              this.$store.state.openMobileNav,
          }"
          @click="openNav()"
        >
          <span class="nav__container__hamburger__box">
            <span class="nav__container__hamburger__inner"></span>
          </span>
        </button>
        <button class="nav__container__btn btn">{{ $t("nav.buy") }}</button>
      </div>
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
    ...mapMutations(["openNav", "openLangMenu", "changeLang"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../design";

.nav {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 999;
  widows: 100vw;
  box-shadow: 0px 4px 24px -5px rgba(0, 0, 0, 0.15);
  background-color: $reg-white;

  .wrapper {
    transform: scaleX(0);
    transform-origin: left;
    animation: grow-left cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.5s forwards;
    animation-delay: 0.4s;
    max-width: 122em;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 2.2em;
    padding-bottom: 2.6em;
    padding-left: 2em;
    padding-right: 2em;

    @media screen and (min-width: 62em) {
      padding-top: 2em;
      padding-bottom: 2em;
    }

    @media screen and (min-width: 80em) {
      padding-left: 11em;
      padding-right: 11em;
    }
  }

  &__logo {
    width: 9.7em;

    @media screen and (min-width: 62em) {
      width: 11.9em;
    }
  }

  &__container {
    position: relative;
    display: flex;

    &__lang {
      position: absolute;
      top: -0.5em;
      right: 3.5em;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 2.1em;
      cursor: pointer;

      @media screen and (min-width: 62em) {
        right: 15em;
        top: 0.43em;
      }

      div {
        font-size: 1.6rem;
      }

      > div:first-of-type {
        margin-right: 0.3em;
        display: flex;
        align-items: center;
      }

      .lang__current,
      .lang__select {
        padding-top: 0.75em;
        padding-bottom: 0.75em;
        padding-left: 0.1em;
        padding-right: 0.6em;
        margin-right: 0.7em;
        margin-left: 0.7em;
      }

      .lang__current {
        img {
          margin-left: 0.5em;
        }
      }

      .lang__select {
        padding-right: 1.2em;
        border-top: 1px solid #c2c2c2;
        opacity: 0;
        pointer-events: none;
      }

      .active {
        opacity: 1;
        pointer-events: all;
        transition: all 0.2s ease;
      }
    }

    .lang--active {
      background-color: $reg-white;
      box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.1);
    }

    &__btn {
      display: none;

      @media screen and (min-width: 62em) {
        display: block;
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
    top: 9em;
    right: 0;
    left: -100%;
    opacity: 0;
    pointer-events: none;
    height: 100vh;
    transition: all 0.2s ease;

    @media screen and (min-width: 62em) {
      position: relative;
      opacity: 1;
      flex-direction: row;
      left: auto;
      top: auto;
      height: 3em;
      pointer-events: all;
      transition: none;

      button {
        display: none;
      }
    }

    &--active {
      left: 0;
      opacity: 1;
      pointer-events: all;
      transition: all 0.2s ease;
    }

    &__list {
      color: $main-black;
      margin-top: 4.4em;

      @media screen and (min-width: 62em) {
        margin-top: 0;
        display: flex;
      }

      li {
        position: relative;
        font-size: 1.5rem;
        margin-bottom: 4.8em;
        cursor: pointer;

        @media screen and (min-width: 62em) {
          font-size: 1.6rem;
          margin-bottom: 0;
          margin-right: 2.95em;

          &::before {
            content: "";
            position: absolute;
            display: block;
            width: 100%;
            height: 2px;
            bottom: -0.5em;
            left: 0;
            background-color: $main-orange;
            transform: scaleX(0);
            transform-origin: top left;
            transition: transform 0.3s ease;
          }

          &:hover::before {
            transform: scaleX(1);
          }
        }
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
  @media screen and (min-width: 62em) {
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