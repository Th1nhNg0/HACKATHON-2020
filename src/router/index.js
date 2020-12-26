import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import { auth } from "../firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/questions",
    name: "Questions",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Forum.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/single",
    name: "Single",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SinglePlay.vue"),
  },
  {
    path: "/multiplay",
    name: "Multiplay",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MultiPlay"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      requiresAuth: false,
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
  if (requiresAuth && !auth.currentUser) {
    next("login");
  } else {
    next();
  }
});
export default router;
