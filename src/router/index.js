import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InventarioTaller from '../views/InventarioTaller.vue'
import ServiciosTaller from '../views/ServiciosTaller.vue'
import CitasTaller from '../views/CitasTaller.vue'
import PagosTaller from '../views/PagosTaller.vue'
import ReportesTaller from '../views/ReportesTaller.vue'
import TeamTaller from '../views/TeamTaller.vue'

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
    path: '/pago',
    name: '/pago',
    component: PagosTaller
  },
  {
    path: '/repo',
    name: '/repo',
    component: ReportesTaller
  },
  {
    path: '/meet',
    name: '/meet',
    component: TeamTaller
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
