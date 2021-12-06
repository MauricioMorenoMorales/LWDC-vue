import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.routes.js';
import Axios from 'axios';

Axios.defaults.baseURL = 'https://vue-completecourse.firebaseio.com';

createApp(App).use(router).mount('#app');
