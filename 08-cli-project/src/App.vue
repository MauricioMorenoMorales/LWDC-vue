<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<button @click="changeTitle">Click To change The Title</button>
				<h2>Posts</h2>
				<div v-for="post in posts" :key="post.title">
					<single-post :post-data="post" :isactive="1" />
				</div>
			</div>
		</div>
		<single-post />
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			posts: [
				{
					title: 'New post 1',
					description: 'Post description',
				},
				{
					title: 'New post 2',
					description: 'Post description',
				},
			],
		};
	},
	methods: {
		changeTitle() {
			this.posts[0].title = 'Change the title in parent';
			this.posts[1].title = 'Change the title in parent';
		},
	},
};
</script>

<style lang="sass" scoped></style>
