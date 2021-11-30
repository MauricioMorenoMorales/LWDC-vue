const app = Vue.createApp({
	data() {
		return {
			hobbies: [],
			enteredHobbyValue: '',
			userDetails: {
				firsName: 'Leela',
				lastName: 'Web Dev',
				age: 34,
			},
		};
	},
	methods: {
		onHobbySubmit() {
			if (this.enteredHobbyValue === '') return;
			this.hobbies.push(this.enteredHobbyValue);
			this.enteredHobbyValue = '';
		},
		removeHobby(index) {
			this.hobbies.splice(index, 1);
		},
	},
});

app.mount('#app');
