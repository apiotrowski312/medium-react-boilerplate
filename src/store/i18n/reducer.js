const reduxI18nState = {
  lang: 'en',
  translations: {},
  forceRefresh: false,
};

const i18n = function i18nState(state = reduxI18nState, action) {
  switch (action.type) {
    case 'REDUX_I18N_SET_LANGUAGE':
      return { ...state, lang: action.lang };
    case 'REDUX_I18N_SET_TRANSLATIONS':
      return { ...state, translations: action.translations };
    case 'REDUX_I18N_SET_FORCE_REFRESH':
      return { ...state, forceRefresh: action.force };
    default:
      return state;
  }
};

export default i18n;
