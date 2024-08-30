import type { Router } from 'vue-router';
import { StaticRouterEnum } from './enums';
import { useUserStore } from '@/store/user';

export function createGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const { token } = useUserStore();

    if (token) {
      if (to.path === StaticRouterEnum.login) {
        next('/dashboard');
        return;
      }
      next();
    } else {
      if (to.path !== StaticRouterEnum.login) {
        next({ path: StaticRouterEnum.login });
        return;
      }
      next();
    }
  });

  router.onError((error) => {
    console.log(error, '路由错误');
  });
}
