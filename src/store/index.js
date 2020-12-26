import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: null,
  },
  mutations: {
    setUserProfile(state, val) {
      state.username = val ? val : "anonymous";
    },
  },
  actions: {
    async fetchUserProfile({ commit }, user) {
      commit("setUserProfile", user.displayName);
      if (router.currentRoute.path === "/login") {
        router.push("/");
      }
    },
  },
  modules: {},
});
