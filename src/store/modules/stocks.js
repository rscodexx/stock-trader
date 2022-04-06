import stocks from '../../data/stocks'

export default {
    state: {
        stocks: []
    },
    mutation: {
        setStocks(state, stocks){
            state.stocks = stocks
        }
    },
    actions: {
        buyStock({ commit }, order){
            commit()
        },
        initStocks({ commit }){
            commit('setStock', stocks)
        }
    },
    getters: {
        stocks(state){
            return state.stocks
        }
    }
}
