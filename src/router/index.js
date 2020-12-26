import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { auth } from "../firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
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
  {
    path: "/dashboard",
    name: "Dashboard",
    meta: {
      requiresAuth: true,
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Dashboard.vue"),
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
