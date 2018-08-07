import Stocks from "../../data/stocks";

const state = {
	stocks: []
};

const getters = {
	stocks: state => {
		return state.stocks;
	}
};

const mutations = {
	setStocks(state, stocks) {
		state.stocks = stocks;
	},
	rndStocks(state) {
		state.stocks.map(elem => {
			return (elem.price += Math.round(1 + (Math.random() - 0.5) * elem.price));
		});
	}
};

const actions = {
	// buyStock: ({ commit }, order) => {
	// 	commit("setStocks", order);
	// },
	initStocks: ({ commit }, stocks = Stocks) => {
		commit("setStocks", stocks);
	},
	randomizeStocks: ({ commit }) => {
		commit("rndStocks");
	}
};

export default {
	state,
	mutations,
	actions,
	getters
};
