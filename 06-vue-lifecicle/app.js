const app = Vue.createApp({
	data() {
		return {
			count: 0,
		};
	},
	beforeCreate() {
		console.log('Before create');
	},
	created() {
		console.log('Created');
	},
	beforeMount() {
		console.log('before Mounted');
	},
	mounted() {
		console.log('mounted');
	},
	beforeUpdated() {
		console.log('beforeUpdated');
	},
	updated() {
		console.log('updated');
	},
	beforeUnmount() {
		console.log('before unmount');
	},
	unmounted() {
		console.log('unmounted');
	},
});

app.mount('#app');

setTimeout(() => app.unmount(), 1000);
