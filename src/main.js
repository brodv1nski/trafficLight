import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/router'
import lights from './components/lights'
import timer from './components/timer'

Vue.config.productionTip = false

Vue.component('timer', timer)
Vue.component('lights', lights)
Vue.use(VueRouter)

new Vue({
    render: h => h(App),
    router
}).$mount('#app')