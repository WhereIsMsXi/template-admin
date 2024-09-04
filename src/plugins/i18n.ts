import type { App } from 'vue';
import { i18n } from '@/i18n';

export function setupI18n(app: App) {
  app.use(i18n);
}
