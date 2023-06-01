import '../index.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';

import App from './App.vue';
import router from './router';
import axios from 'axios';
import messages from './locales/export.js';
import VueAxios from 'vue-axios';

const i18n = createI18n({
  locale: localStorage.getItem('locale') || 'en',
  messages,
});

const app = createApp(App);

app.use(VueAxios, axios);
app.use(i18n);
app.use(createPinia());
app.use(router);

app.mount('#app');