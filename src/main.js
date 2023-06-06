import '../index.css';

import '@mdi/font/css/materialdesignicons.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import messages from './locales/export.js';

// Set the base URL for all Axios requests to the value of the 'VUE_APP_RESET_API' environment variable.
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get = {
  'Content-Type': 'application/json',
  Tempaccess: window.btoa('bac436b32a36431bb437b9509b6d3495'),
};
axios.defaults.headers.delete['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.headers.patch['Content-Type'] = 'application/json';

const i18n = createI18n({
  locale: localStorage.getItem('locale') || 'en',
  legacy: false,
  messages,
});

const app = createApp(App);

app.use(i18n);
app.use(createPinia());
app.use(router);

app.mount('#app');
