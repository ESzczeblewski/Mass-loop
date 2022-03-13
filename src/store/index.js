import { createStore } from 'vuex';

export const store = createStore({
  state () {
    return {
      openMobileNav: false,
      openLangMenu: false,
      currentLanguage: 'PL',
      languages: ['EN', 'DE', 'GB']
    }
  },
  mutations: {
    openNav (state) {
      state.openMobileNav = !state.openMobileNav;
    },

    openLangMenu (state) {
      state.openLangMenu = !state.openLangMenu;
    },

    changeLang(state, lang) {
      state.languages.push(state.currentLanguage);
      state.currentLanguage = lang;
      state.languages = state.languages.filter(e => e !== state.currentLanguage);
    }
  }
})