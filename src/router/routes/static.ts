import type { RouteRecordRaw } from 'vue-router';

export const staticRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: () => import('@/pages/login/LoginView.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    path: '/dashboard',
    component: () => import('@/views/dashboard/IndexView.vue'),
    meta: {
      title: '首页',
    },
  },
];
