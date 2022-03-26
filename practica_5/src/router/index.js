import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue' //esto dice que esta jalando lo que hay en HomeView 
import AboutView from '../views/AboutView.vue'

//Aqui iran todas las paginas que quiera crear
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pastelero',
    name: 'pastelero',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
