import { createRouter, createWebHashHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import PasteleroView from '../views/Pastelero.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: InicioView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AcercaDeView.vue')
  },
  {
    path: '/pastelero',
    name: 'pastelero',
    component: PasteleroView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
