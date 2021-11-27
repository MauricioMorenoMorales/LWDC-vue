const app = Vue.createApp({
	data() {
		return {
			count: 0,
			secondCount: 0,
			name: '',
			name2: '',
			name3: 'leela web dev',
			name4: 'Vbind name',
			confirmedName: '',
		};
	},
	computed: {
		fullName() {
			console.log('executing code');
			return this.name4 + 'Web Dev';
		},
	},
	methods: {
		onIncrement() {
			// this.count = this.count++;
			this.count++;
		},
		onDecrement() {
			// this.count = this.count--;
			this.count--;
		},
		setName(event) {
			this.name = event.target.value;
		},
		setName2(event, title) {
			this.name2 = event.target.value + title;
		},
		setName3(event, title) {
			this.name3 = event.target.value;
		},
		submitForm(event) {
			event.preventDefault();
			alert('submitted');
		},
		setConfirmedName() {
			this.confirmedName = this.name3;
		},
		outputFullName4() {
			console.log('Executing full name');
			return this.name4 + ' web dev';
		},
	},
});

app.mount('#app');
