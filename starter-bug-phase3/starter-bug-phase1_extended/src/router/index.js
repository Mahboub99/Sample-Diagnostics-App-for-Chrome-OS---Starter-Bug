import Vue from 'vue'
import VueRouter from 'vue-router'


import SystemData from '../views/SystemData.vue'
import SystemManager from '../views/SystemManager.vue'
import SystemState from '../views/SystemState.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SystemData',
    component: SystemData
  },
  {
    path:'/SystemManager',
    name: 'SystemManager',
    component: SystemManager
  },
  {
    path: '/SystemState',
    name: 'SystemState',
    component:SystemState
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
