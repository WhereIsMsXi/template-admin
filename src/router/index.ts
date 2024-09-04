import type { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { staticRoutes } from './routes/static';
import { createGuard } from './guard';
import { initRoute } from './route';

const router = createRouter({
  history: createWebHashHistory(),
  routes: staticRoutes,
  scrollBehavior(to) {
    const elMainDom = document.getElementById('h100');
    if (elMainDom) {
      (elMainDom as any).scrollTop = to.meta.savedPosition || 0;
    }
  },
});

export function setupRouter(app: App) {
  initRoute(router);

  createGuard(router);

  app.use(router);
}

export default router;
