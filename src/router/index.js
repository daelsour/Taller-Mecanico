import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InventarioTaller from '../views/InventarioTaller.vue'
import ServiciosTaller from '../views/ServiciosTaller.vue'
import CitasTaller from '../views/CitasTaller.vue'
import LoginTaller from '../views/Auth/LoginTaller.vue'
import DashboardView from '../views/Auth/DashboardView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/inv',
    name: 'inv',
    component: InventarioTaller
  },
  {
    path: '/serv',
    name: 'serv',
    component: ServiciosTaller
  },
  {
    path: '/citas',
    name: '/citas',
    component: CitasTaller
  },
  {
    path: '/login',
    name: '/login',
    component: LoginTaller
  },
  {
    path: '/dashboard',
    name: '/dashboard',
    component: DashboardView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
