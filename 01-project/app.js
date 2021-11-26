const app = Vue.createApp({
	data() {
		return {
			title: 'Create a Post XD',
			text1: '<h1>This is another text</h1>',
			text2: 'Master the vue',
			link: 'https://vuejs.org',
		};
	},
	methods: {
		getText() {
			return this.text1;
		},
		getAnotherText() {
			return this.text2;
		},
	},
});

app.mount('#app');
