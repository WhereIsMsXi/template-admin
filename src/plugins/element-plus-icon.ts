import type { App } from 'vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

export function setupElementPlusIcon(app: App) {
  Object.entries(ElementPlusIconsVue).forEach((item: any) => {
    const [key, component] = item;
    app.component(key, component);
  });
}
