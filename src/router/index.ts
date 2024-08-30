import type { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { staticRoutes } from './routes/static';
import { createGuard } from './guard';

const router = createRouter({
  history: createWebHashHistory(),
  routes: staticRoutes,
});

export function setupRouter(app: App) {
  createGuard(router);

  app.use(router);
}

export default router;
