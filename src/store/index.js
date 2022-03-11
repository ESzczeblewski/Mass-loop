import { createStore } from 'vuex';

export const store = createStore({
  state () {
    return {
      openMobileNav: false
    }
  },
  mutations: {
    openNav (state) {
      state.openMobileNav = !state.openMobileNav;
    }
  }
})