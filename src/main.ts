import { createApp } from 'vue';
import App from './App.vue';

import { setupPinia } from './store';
import { setupRouter } from './router';

import { setupElementPlusIcon, setupI18n } from './plugins';

import '@where_is_mr_li/style/dist/index.scss';
import './styles/index.scss';

function boot() {
  const app = createApp(App);

  setupPinia(app);
  setupRouter(app);

  setupElementPlusIcon(app);
  setupI18n(app);

  app.mount('#app');
}

boot();
