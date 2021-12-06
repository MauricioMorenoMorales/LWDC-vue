<template lang="pug">
div
	h3 Create Post
	form(@submit.prevent="onCreatePost()")
		.form-group
			label Title
			input.form-control(type="text", v-model="title")
		.form-group
			label Description
			textarea.form-control(type="text", v-model="description")
		div
			button.btn.btn-primary.my-4(type="submit") Create Post
</template>

<script>
import axios from 'axios';
export default {
	data() {
		return {
			title: '',
			description: '',
		};
	},
	methods: {
		onCreatePost() {
			axios
				.post(`/posts.json`, {
					title: this.title,
					description: this.description,
				})
				.then(response => {
					console.log(response);
					this.$router.push('/posts');
				});
		},
	},
};
</script>
