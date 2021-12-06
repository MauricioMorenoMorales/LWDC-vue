<template lang="pug">
div
	h2 Post Details
	table.table
		thead
			tr
				th id
				th Title
				th Description
		tbody
			tr(v-for="post in postDetails" :key="post.id")
				td {{post.id}}
				td {{post.title}}
				td {{post.description}}
</template>

<script>
import axiosInstance from '../services/axiosInstance.service';
export default {
	data() {
		return {
			postDetails: [],
		};
	},
	mounted() {
		this.getPostDetails();
	},
	methods: {
		getPostDetails() {
			axiosInstance
				.get(`/posts.json`)
				.then(response => {
					this.formatPostDetails(response.data);
				})
				.catch(error => console.log(error));
		},
		formatPostDetails(posts) {
			for (let key in posts) {
				this.postDetails.push({ ...posts[key], id: key });
			}
			console.log(this.postDetails);
		},
	},
};
</script>
