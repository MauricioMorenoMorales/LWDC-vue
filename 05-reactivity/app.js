const commonData = {
	commonMessage: 'Changing the second message',
};

const app1 = Vue.createApp({
	data() {
		return {
			message: 'first message',
			data: commonData,
			text: '',
			textMessage: '',
		};
	},
	methods: {
		setText() {
			this.textMessage = this.$refs.userText.value;
		},
	},
});

const app2 = Vue.createApp({
	data() {
		return {
			anotherMessage: 'secondMessage',
			data: commonData,
		};
	},
	methods: {
		changeMessage() {
			this.data.commonMessage = 'Changied the message';
		},
	},
});

app1.mount('#app1');
app2.mount('#app2');
