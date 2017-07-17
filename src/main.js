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
import TwoMovies01 from './components/TwoMovies01'
import TwoMovies02 from './components/TwoMovies02'
import TwoMovies03 from './components/TwoMovies03'
import MenuList from './components/MenuList'
import Moviesdetails from './components/Moviesdetails'
import Discuss from './components/Discuss'
import Icon from './components/Icon'
import DoubanTime from './components/DoubanTime'
import NotePart from './components/NotePart'
import GroupPart from './components/GroupPart'


Vue.config.productionTip = false


Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
	{ path: '*', component: Movies },
    { path: '/movies', component: Movies},
	    { path: '/twoMovies01', component: TwoMovies01 },
	    { path: '/twoMovies02', component: TwoMovies02 },
	    { path: '/twoMovies03', component: TwoMovies03 },
	    { path: '/menuList', component: MenuList },
    { path: '/book', component: Book },
    { path: '/cast', component: Cast },
    { path: '/group', component: Group },
    { path: '/home', component: Home },
    { path: '/search', component: Search },
    { path: '/moviesdetails', component: Moviesdetails },
    { path: '/discuss', component: Discuss },
    { path: '/icon', component: Icon},
    { path: '/home', component: Home},
    { path: '/search', component: Search },
    { path: '/doubantime', component: DoubanTime },
    { path: '/notepart', component: NotePart },
    { path: '/grouppart', component: GroupPart },
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