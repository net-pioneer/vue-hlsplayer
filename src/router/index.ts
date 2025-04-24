import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/view/:sid/:episode',
      name: 'video-view',
      component: () => import("@/views/view.vue"),
      props: true
    },
  ],
})

export default router
