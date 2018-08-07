import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { routes } from "./routes";
import { store } from "./store/store";
import VueResource from "vue-resource";

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.root =
	"https://vuejs-udemy-course-8712f.firebaseio.com/stock-portfolio.json";

Vue.filter("currency", value => {
	return "$" + value.toLocaleString();
});

const router = new VueRouter({
	routes,
	mode: "history"
});

new Vue({
	el: "#app",
	render: h => h(App),
	router,
	store
});
