/*
 * @Author: YJ
 * @Date: 2020-08-31 14:33:32
 * @
# Description: 
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home/Home.vue' //引入方式

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue') //引入方式
  },
  {
    path: '/video',
    name: 'Video',
    component: () => import('@/views/video.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
