import { createStore } from 'vuex';

export const store = createStore({
  state () {
    return {
      openMobileNav: false,
      openLangMenu: false,
    }
  },
  mutations: {
    openNav (state) {
      state.openMobileNav = !state.openMobileNav;
    },

    openLangMenu (state) {
      state.openLangMenu = !state.openLangMenu;
    }
  }
})