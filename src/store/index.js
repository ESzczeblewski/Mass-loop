import { createStore } from 'vuex';
import i18n from '../i18n';

export const store = createStore({
  state () {
    return {
      openMobileNav: false,
      openLangMenu: false,
      currentLanguage: 'pl',
      languages: ['en', 'de', 'gb']
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
      i18n.global.locale = lang;
    }
  }
})