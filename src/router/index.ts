import type { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { staticRoutes } from './routes/static';

const router = createRouter({
  history: createWebHashHistory(),
  routes: staticRoutes,
});

export function setupRouter(app: App) {
  app.use(router);
}

export default router;
