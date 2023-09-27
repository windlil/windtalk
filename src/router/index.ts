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
        path: 'message',
        component: () => import('@/pages/main/Message/index.vue'),
      },
      {
        path: 'explore',
        component: () => import('@/pages/main/Explore/index.vue'),
      },
      {
        path: 'user',
        component: () => import('@/pages/main/User/index.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
