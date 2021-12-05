<template lang="pug">
div
	h2 Create Post
	hr
	div.alert.alert-success(v-if="isSuccess") Post Created Successfully
	form(@submit.prevent="onCreatePost")
		div.form-group
			label Title
			input.form-control(type="text" v-model="title")
		div.form-group
			label Description
			textarea.form-control(v-model="description")
		div.mt-3
			button.btn.btn-primary(type="submit") Create Post
</template>

<script>
import axios from 'axios';
export default {
	emits: ['postcreated'],
	data() {
		return {
			title: '',
			description: '',
			isSuccess: false,
		};
	},
	methods: {
		onCreatePost() {
			axios
				.post(`https://vue-completecourse.firebaseio.com/posts.json`, {
					title: this.title,
					description: this.description,
				})
				.then(response => {
					this.isSuccess = true;
					console.log(response);
					this.$emit('postcreated');
				});
		},
	},
};
</script>
