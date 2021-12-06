<template lang="pug">
div
	h3 Post Details
	div
		div Id: {{id}}
		div Title: {{post.title}}
		div Description: {{post.description}}
	div
		router-link(to="/posts/-MqF8ss6U9ajzRrPaBML") go to post id -MqF8ss6U9ajzRrPaBML
	div
		router-link.btn.btn-warning(to ="/posts/") Back to posts
</template>

<script>
import axios from 'axios';
export default {
	data() {
		return {
			post: '',
			id: '',
		};
	},
	watch: {
		$route() {
			this.getPostDetails();
		},
	},
	created() {
		// this.$watch(
		// 	() => this.$route.params,
		// 	params => this.getPostDetails(),
		// );
		this.getPostDetails();
	},
	methods: {
		getPostDetails() {
			this.id = this.$route.params.id;
			axios.get(`/posts.json?id=${this.id}`).then(response => {
				this.post = response.data[this.id];
			});
		},
	},
};
</script>
