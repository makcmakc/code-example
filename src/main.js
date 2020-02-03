import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vuelidate from 'vuelidate'
import dateFilter from '@/filters/date.filter'

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

import vSelect from 'vue-select'
Vue.component('v-select', vSelect)

Vue.use(Loading);
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
