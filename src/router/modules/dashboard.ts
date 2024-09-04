import type { RouteRecordRaw } from 'vue-router';
import { RoleEnum } from '@/store/enums/role';
import { LayoutIndexView } from '../share';
import { I18nModulEnum } from '@/i18n/consts';

const prefixRouter = `${I18nModulEnum.router}.dashboard`;

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
          title: `${prefixRouter}.index`,
          roles: [RoleEnum.boss, RoleEnum.assistant, RoleEnum.staff],
        },
      },
    ],
  },
];

export default routes;
