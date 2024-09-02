import type { RouteRecordRaw } from 'vue-router';
import { RoleEnum } from '@/store/enums/role';
import { LayoutIndexView } from '../share';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    component: LayoutIndexView,
    meta: {
      isRoot: true,
      isAffix: true,
      roles: [RoleEnum.boss, RoleEnum.assistant, RoleEnum.staff],
      icon: 'House',
    },
    children: [
      {
        path: '',
        component: () => import('@/views/dashboard/IndexView.vue'),
        meta: {
          title: `index`,
          roles: [RoleEnum.boss, RoleEnum.assistant, RoleEnum.staff],
        },
      },
    ],
  },
];

export default routes;
