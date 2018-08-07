import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";

import axios from "axios";

axios.defaults.baseURL = "https://vuejs-udemy-course-8712f.firebaseio.com";
axios.defaults.headers.common["Authorization"] = "";
axios.defaults.headers.get["Accepts"] = "application/json";

axios.interceptors.request.use(config => {
  console.log(config);
  return config;
});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
