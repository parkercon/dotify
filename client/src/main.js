import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCompositionApi from '@vue/composition-api'
import Multiselect from 'vue-multiselect'
import 'selectize/dist/css/selectize.css'
import VSelectize from '@isneezy/vue-selectize'

Vue.config.productionTip = false
Vue.use((VueCompositionApi))
Vue.component('multiselect', Multiselect)
Vue.component('v-selectize', VSelectize)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
