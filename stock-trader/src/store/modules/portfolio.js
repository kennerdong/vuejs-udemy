const state = {
	funds: 10000,
	myStocks: []
};

const getters = {
	portfolio(state, getters) {
		return state.myStocks.map(stock => {
			const record = getters.stocks.find(elem => elem.id == stock.id);
			return {
				id: stock.id,
				quantity: stock.quantity,
				name: record.name,
				price: record.price
			};
		});
	},
	funds(state) {
		return state.funds;
	}
};

const mutations = {
	buyStock(state, { id, quantity, stockPrice }) {
		let stock = state.myStocks.find(elem => elem.id == id);
		if (stock) {
			stock.quantity += quantity;
			return;
		}
		state.myStocks.push({ id, quantity, stockPrice });
		state.funds -= stockPrice * quantity;
	},
	sellStock(state, { id, quantity, stockPrice }) {
		let stock = state.myStocks.find(elem => elem.id == id);
		if (stock.quantity > quantity) {
			stock.quantity -= quantity;
		} else {
			state.myStocks.splice(state.myStocks.indexOf(stock), 1);
		}
		state.funds += stockPrice * quantity;
	},
	loadPortfolio(state, { funds, myStocks, stocks }) {
		Object.assign(state, { funds, myStocks });
		this.dispatch("initStocks", Object.assign(stocks));
	}
};

const actions = {
	buyStock: ({ commit }, order) => {
		commit("buyStock", order);
	},
	sellStock: ({ commit }, order) => {
		commit("sellStock", order);
	},
	loadPortfolio: ({ commit }, portfolio) => {
		commit("loadPortfolio", portfolio);
	}
};

export default {
	state,
	mutations,
	actions,
	getters
};
