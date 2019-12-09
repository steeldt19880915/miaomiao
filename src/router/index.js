import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './movie' // 电影模块化模块路由
import cinemaRouter from './cinema' // 影院模块化模块路由
import mineRouter from './mine' // 我的模块化模块路由


Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }

  movieRouter,
  cinemaRouter,
  mineRouter
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
