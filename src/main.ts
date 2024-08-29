import { createApp } from 'vue';
import App from './App.vue';

import { setupPinia } from './store';

import '@where_is_mr_li/style/dist/index.scss';

function boot() {
  const app = createApp(App);

  setupPinia(app);

  app.mount('#app');
}

boot();
