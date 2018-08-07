import Vue from "vue";
import VueRouter from "vue-router";

import WelcomePage from "./components/welcome/welcome.vue";
import DashboardPage from "./components/dashboard/dashboard.vue";
import SignupPage from "./components/auth/signup.vue";
import SigninPage from "./components/auth/signin.vue";

import store from "./store";
Vue.use(VueRouter);

const routes = [
  { path: "/", component: WelcomePage },
  { path: "/signup", component: SignupPage },
  { path: "/signin", component: SigninPage },
  {
    path: "/dashboard",
    component: DashboardPage,
    beforeEnter(to, from, next) {
      console.log("beforeEnter token:", store.state.idToken);
      if (store.state.idToken) {
        next();
      } else {
        console.log("Router cannot find token, redirect to signin");
        next("/signin");
      }
    }
  }
];

export default new VueRouter({ mode: "history", routes });
