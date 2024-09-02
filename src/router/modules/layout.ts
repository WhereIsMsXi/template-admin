import type { RouteRecordRaw } from 'vue-router';
import { RoleEnum } from '@/store/enums/role';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/layout',
    meta: {
      title: `111`,
      roles: [RoleEnum.boss, RoleEnum.assistant, RoleEnum.staff],
      icon: 'CopyDocument',
    },
    children: [
      {
        path: 'body',
        component: () => import('@/views/layout/BodyView.vue'),
        meta: {
          title: `body`,
          roles: [RoleEnum.boss, RoleEnum.assistant],
          icon: 'Watermelon',
        },
      },
      {
        path: 'header-body',
        component: () => import('@/views/layout/HeaderBody.vue'),
        meta: {
          title: `headerBody`,
          roles: [RoleEnum.boss],
          icon: 'Watermelon',
        },
      },
      {
        path: 'join-class',
        component: () => import('@/views/layout/JoinClass.vue'),
        meta: {
          title: `joinClass`,
          roles: [RoleEnum.boss],
          icon: 'Watermelon',
        },
      },
    ],
  },
];

export default routes;
