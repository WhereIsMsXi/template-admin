import type { RouteRecordRaw } from 'vue-router';
import { RoleEnum } from '@/store/enums/role';
import { LayoutIndexView } from '../share';
import { I18nModulEnum } from '@/i18n/consts';

const prefixRouter = `${I18nModulEnum.router}.layout`;

const routes: Array<RouteRecordRaw> = [
  {
    path: '/layout',
    component: LayoutIndexView,
    meta: {
      title: `${prefixRouter}.index`,
      roles: [RoleEnum.boss, RoleEnum.assistant, RoleEnum.staff],
      icon: 'CopyDocument',
    },
    children: [
      {
        path: 'body',
        component: () => import('@/views/layout/body/BodyView.vue'),
        meta: {
          title: `${prefixRouter}.body`,
          roles: [RoleEnum.boss, RoleEnum.assistant],
          icon: 'Watermelon',
          keepAlive: true,
        },
      },
      {
        path: 'body-detail',
        component: () => import('@/views/layout/body/BodyDetail.vue'),
        meta: {
          title: `${prefixRouter}.bodyDetail`,
          roles: [RoleEnum.boss, RoleEnum.assistant],
          icon: 'Watermelon',
          activeMenu: '/layout/body',
        },
      },
      {
        path: 'header-body',
        component: () => import('@/views/layout/header-body/HeaderBody.vue'),
        meta: {
          title: `${prefixRouter}.headerBody`,
          roles: [RoleEnum.boss],
          icon: 'Watermelon',
        },
      },
      {
        path: 'join-class',
        component: () => import('@/views/layout/join-class/JoinClass.vue'),
        meta: {
          title: `${prefixRouter}.joinClass`,
          roles: [RoleEnum.boss],
          icon: 'Watermelon',
        },
      },
    ],
  },
];

export default routes;
