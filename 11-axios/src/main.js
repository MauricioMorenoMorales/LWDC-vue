import { createApp } from 'vue';
import App from './App.vue';
import Axios from 'axios';

// Axios Configuration
Axios.defaults.baseURL = `https://vue-completecourse.firebaseio.com`;
Axios.defaults.headers.common['leela'] = 'Leela Web Dev Config';
Axios.defaults.headers.get['getHeader'] = 'Leela Get';
Axios.defaults.headers.post['postHeader'] = 'Leela Post';

Axios.interceptors.request.use(
	config => {
		config.headers.common['interceptorHeader'] = 'Interceptor Header';
		return config;
	},
	error => Promise.reject(error),
);

Axios.interceptors.response.use(
	response => {
		response.data = { hai: 'hai' };
		console.log(response);
		return response;
	},
	error => Promise.reject(error),
);

createApp(App).mount('#app');
