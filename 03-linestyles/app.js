const app = Vue.createApp({
	data() {
		return {
			boxASelected: false,
			boxBSelected: false,
			boxCSelected: false,
			boxDSelected: false,
		};
	},
	methods: {
		onBoxSelected(box) {
			if (box === 'A') this.boxASelected = !this.boxASelected;
			else if (box === 'B') this.boxBSelected = !this.boxBSelected;
			else if (box === 'D') this.boxDSelected = !this.boxDSelected;
			else this.boxCSelected = !this.boxCSelected;
		},
	},
	computed: {
		boxCClases() {
			return { active: this.boxCSelected };
		},
		boxDClases() {
			return { active: this };
		},
	},
});

app.mount('#app');
