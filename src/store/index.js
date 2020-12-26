import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ping: 0,
    username: null,
    room: false,
    rooms: {},
  },
  mutations: {
    setUserProfile(state, val) {
      state.username = val ? val : "anonymous";
    },
    SOCKET_rooms(state, payload) {
      state.rooms = payload;
    },
    SOCKET_gameData(state, payload) {
      state.room = payload;
    },
    setPing(state, ping) {
      state.ping = ping;
    },
    deleteRoom(state) {
      state.room = false;
    },
  },
  actions: {
    async fetchUserProfile({ commit }, user) {
      commit("setUserProfile", user.displayName);
      if (router.currentRoute.path === "/login") {
        router.push("/");
      }
    },
    exitRoom({ commit }) {
      commit("deleteRoom");
    },
  },
  modules: {},
});
