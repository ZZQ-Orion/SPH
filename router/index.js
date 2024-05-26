import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/views/Home'
import Search from '@/pages/views/Search'
import Login from '@/pages/views/Login'
import Register from '@/pages/views/Register'
import Detail from '@/pages/views/Detail'
import AddCartSuccess from '@/pages/views/AddCartSuccess'
import ShopCart from '@/pages/views/ShopCart'

Vue.use(VueRouter)

let originPush = VueRouter.prototype.push

VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => { }, () => { })
  }
}

let originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(this, location, () => { }, () => { })
  }
}

export default new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home, meta: { show: true } },
    { path: '/search/:keyword?', component: Search, meta: { show: true }, name: "search" },
    { path: '/login', component: Login, meta: { show: false } },
    { path: '/register', component: Register, meta: { show: false } },
    { path: '/detail/:skuid', component: Detail, meta: { show: true } },
    { path: '/addcartsuccess', component: AddCartSuccess, meta: { show: true }, name: "addcartsuccess" },
    { path: '/shopcart', component: ShopCart, meta: { show: true } }

  ],
  scrollBehavior() {
    // 始终滚动到顶部
    return { y: 0 }
  },
})