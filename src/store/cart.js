export default {
	state : {
		cartAmount: ''
	},
	getters : {
		getAmount : state => state.cartAmount
	},
	mutations : {
		countAmount(state, payload) {
			state.cartAmount = payload
		}
	}
}
