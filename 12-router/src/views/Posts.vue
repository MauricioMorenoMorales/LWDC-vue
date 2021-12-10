<template lang="pug">
.row
	.col-md-8
		div
			h3 Post Details
			table.table
				thead
					tr
						th Id
						th Title
						th Description
						th Actions
				tbody
					tr(v-for="post in postDetails" :key="post[id]")
						td {{post.id}}
						td {{post.title}}
						td {{post.description}}
						td: router-link.btn.btn-primary(:to="{name: 'single-post', params: {id: post.id}, query: {sort: 'asc'}}") Show Details
	.col-md-4
		router-view
</template>

<script>
import axios from 'axios';
export default {
	data() {
		return {
			postDetails: [],
		};
	},
	mounted() {
		axios.get(`/posts.json`).then(response => {
			this.formatPosts(response.data);
		});
	},
	methods: {
		formatPosts(postsData) {
			for (const key in postsData) {
				this.postDetails.push({ ...postsData[key], id: key });
			}
		},
	},
};
</script>
