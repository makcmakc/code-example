import Vue from 'vue'
import Vuex from 'vuex'
import cart from './cart'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: {},
    countres: {}
  },
  getters: {
    getProducts: state => state.products,
    getCountres: state => state.countres
  },
  mutations: {
    loadProducts(state, payload) {
      state.products = payload
    },
    loadCountres(state, payload) {
      state.countres = payload
    }
  },
  actions: {
    loadProducts(context, products) {
      context.commit('loadProducts', products)
    },
    loadCountres(context, countres) {
      context.commit('loadCountres', countres)
    }
  },
  modules: {
    cart
  }
})
