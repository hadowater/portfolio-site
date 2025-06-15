// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/Home.vue'
import WorkDetail from '@/components/WorkDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/works/:id',
    name: 'WorkDetail',
    component: WorkDetail,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes // ✅ここがポイント
})

export default router
