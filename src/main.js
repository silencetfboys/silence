// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import $ from 'jquery'
import App from './App'
import Movies from './views/Movies'
import Book from './views/Book'
import Cast from './views/Cast'
import Group from './views/Group'
import Home from './views/Home'
import Search from './views/Search'


Vue.config.productionTip = false


Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
	{ path: '*', component: Movies },
    { path: '/movies', component: Movies },
    { path: '/book', component: Book },
    { path: '/cast', component: Cast },
    { path: '/group', component: Group },
    { path: '/home', component: Home },
    { path: '/search', component: Search }
]
const router = new VueRouter({
    routes
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router
})