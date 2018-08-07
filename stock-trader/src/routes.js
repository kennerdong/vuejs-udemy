import Home from "./components/Home.vue";
import Portfolio from "./components/portfolio/Portfolio.vue";
import Stocks from "./components/stocks/Stocks.vue";

export const routes = [
	{
		path: "/",
		name: "home",
		// component: Home
		components: {
			default: Home
		}
	},
	{
		path: "/portfolio",
		name: "portfolio",
		// component: Home
		components: {
			default: Portfolio
		}
	},
	{
		path: "/stocks",
		name: "stocks",
		// component: Home
		components: {
			default: Stocks
		}
	}
];
