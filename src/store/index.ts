import Vue from "vue";
import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    cont: 0,
  },
  mutations: {
    increment: (state, n) => {
      state.cont += n;
    },
  },
  actions: {
    increment: ({ commit }, n) => {
      setTimeout(() => {
        commit("increment", n);
      }, 2000);
    },
  },
  getters: {
    doublecont: (state) => {
      return state.cont * 2;
    },
  },
});
