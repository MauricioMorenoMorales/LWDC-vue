<template lang="pug">
div
	h3 Post Details
	table.table
		thead
			tr
				th Id
				th Title
				th Description
		tbody
			tr(v-for="post in postDetails" :key="post[id]")
				td {{post.id}}
				td {{post.title}}
				td {{post.description}}
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
		axios
			.get(`https://vue-completecourse.firebaseio.com/posts.json`)
			.then(response => {
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
