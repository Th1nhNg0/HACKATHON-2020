import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { auth } from "./firebase";
import VueSocketIO from "vue-socket.io";

/* Chat Scroll */
import VueChatScroll from "vue-chat-scroll";
Vue.use(VueChatScroll);
Vue.config.productionTip = false;
Vue.use(
  new VueSocketIO({
    // debug: true,
    debug: false,
    // connection: "thinh-project-x-backend.herokuapp.com",
    connection: "172.16.29.186:3000",
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_",
    },
  })
);

let app;
auth.onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
  if (user) {
    store.dispatch("fetchUserProfile", user);
  }
});
