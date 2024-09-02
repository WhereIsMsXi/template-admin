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
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/dashboard',
    component: () => import('@/views/dashboard/IndexView.vue'),
    meta: {
      title: '首页',
    },
  },
  {
    path: '/ErrorPage401',
    component: () => import('@/pages/error/ErrorPage401.vue'),
    meta: {
      title: '401',
    },
  },
  {
    path: '/ErrorPage403',
    component: () => import('@/pages/error/ErrorPage403.vue'),
    meta: {
      title: '403',
    },
  },
  {
    path: '/ErrorPage404',
    component: () => import('@/pages/error/ErrorPage404.vue'),
    meta: {
      title: '404',
    },
  },
  {
    path: '/ErrorPage500',
    component: () => import('@/pages/error/ErrorPage500.vue'),
    meta: {
      title: '500',
    },
  },
  {
    path: '/:path(.*)*',
    component: () => import('@/pages/error/ErrorPage404.vue'),
    meta: {
      title: '404',
    },
  },
];
