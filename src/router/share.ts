import type { RouteRecordRaw } from 'vue-router';

export const LayoutIndexView = () => import('@/layouts/IndexView.vue');

export const RootRoute: RouteRecordRaw = {
  path: '/',
  redirect: '/dashboard',
};
