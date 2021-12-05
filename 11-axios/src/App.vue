<template lang="pug">
div.container
  div.row
    div.col-md-12
      div
        post(@postcreated="onCreatePost")
      div.my-2
        post-details(v-if="showPosts")
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Post from './components/Post.vue';
import PostDetails from './components/PostDetails.vue';

export default {
	name: 'App',
	data() {
		return {
			showPosts: true,
		};
	},
	components: {
		HelloWorld,
		Post,
		PostDetails,
	},
	methods: {
		onCreatePost() {
			this.showPosts = false;
			setTimeout(() => {
				this.showPosts = true;
			}, 50);
		},
	},
};
</script>
