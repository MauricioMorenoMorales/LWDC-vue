<template lang="pug">
div(:class="{'bgcolor-gray': isactive}")
	div.title {{post.title}}
	<post-user ></post-user>
	div {{post.description}}
	a(href="" @click.prevent="changeTitle") Change the title
</template>

<script>
import { Post } from '../services/post.service';
import PostUser from './PostUser.vue';
export default {
	emits: {
		'title-changed': post => {
			if (post instanceof Post) {
				return true;
			} else {
				console.log('Invalid post data');
				return false;
			}
		},
	},
	data() {
		return {
			post: { ...this.postData },
		};
	},
	props: {
		postData: {
			type: Object,
			default: function () {
				return { title: 'New Post', description: 'Default content' };
			},
		},
		isactive: {
			type: Number,
			required: false,
			default: 1,
			validator: function (value) {
				return value === 1 || value === 0;
			},
		},
	},
	methods: {
		changeTitle() {
			this.post.title = 'changed the title';
			const postData = new Post(
				this.post.id,
				this.post.title,
				this.post.description,
			);
			this.$emit('titleChanged', postData);
		},
	},
	components: {
		PostUser,
	},
};
</script>

<style lang="sass" scoped>
@import "../DesignSystem"
.title
	color: red
.bgcolor-gray
	background-color: #cecece
</style>
