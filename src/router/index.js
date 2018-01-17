import Vue from 'vue'
import Router from 'vue-router'
const home = r => require.ensure([], () => r(require('@/components/pages/home/home')), 'home')
const login = r => require.ensure([], () => r(require('@/components/pages/login/login')), 'login')
Vue.use(Router)


export default new Router({
    mode: "history",
    routes: [{
        path: '/',
        name: 'home',
        component: home
    }, {
        path: '/login',
        name: 'login',
        component: login
    }]
})