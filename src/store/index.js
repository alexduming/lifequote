import { createStore } from 'vuex';

export default createStore({
  state: {
    currentUser: null,
    quotes: [],
    authors: [],
    categories: []
  },
  
  mutations: {
    SET_USER(state, user) {
      state.currentUser = user;
    },
    SET_QUOTES(state, quotes) {
      state.quotes = quotes;
    }
  },
  
  actions: {
    async fetchQuotes({ commit }, params) {
      const quotes = await api.getQuotes(params);
      commit('SET_QUOTES', quotes);
    }
  }
}); 