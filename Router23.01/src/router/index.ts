import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/bemvindo',
      name: 'bem vindo',
      component: () => import('../views/BemVindo.vue'),
    },
    {
      path: '/noticias',
      name: 'listagem',
      component: () => import('../views/Noticias.vue'),
    },
    {
      path: '/noticias/:id',
      name: 'detalhe',
      component: () => import('../views/NoticiasDetalhe.vue'),
      props: true,
    },
  ],
})

export default router
