import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/main',
  },
  {
    path: '/main',
    redirect: '/main/home',
    children: [
      {
        path: 'home',
        component: () => import('@/pages/main/Home/index.vue'),
      },
      {
        path: 'Message',
        component: () => import('@/pages/main/Message/index.vue'),
      },
      {
        path: 'Explore',
        component: () => import('@/pages/main/Explore/index.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
