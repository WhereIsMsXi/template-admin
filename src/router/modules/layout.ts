import type { RouteRecordRaw } from 'vue-router';
import { RoleEnum } from '@/store/enums/role';
import { LayoutIndexView } from '../share';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/layout',
    component: LayoutIndexView,
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
        path: 'body-detail',
        component: () => import('@/views/layout/BodyDetail.vue'),
        meta: {
          title: `bodyDetail`,
          roles: [RoleEnum.boss, RoleEnum.assistant],
          icon: 'Watermelon',
          activeMenu: '/layout/body',
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
