import Vue from 'vue'
import VueRouter from 'vue-router';
import lights from '../components/lights';

Vue.use(VueRouter);


export default new VueRouter({
    mode: 'history',
    router: [
        { path: '/red', component: lights },
        { path: '/yellow', component: lights },
        { path: '/green', component: lights }
    ]
})