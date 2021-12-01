<template lang="pug">
div.container
	div.row
		div.col-md-8
			div.my-4
				select-component(
					data-status="1"
					id="selectbox"
					@change="selectChange"
				)
			button(@click="changeTitle") Clic to Change The Title
			h2 Posts
			div(v-for="post in posts" :key="post.title")
				single-post(
					:post-data="post"
					:isactive="1"
					@title-changed="onTitleChanged"
				)
		div.col-md-4
			h3 Latest posts
			ul.list-group
				li.list-group-item(v-for="post in posts" :key="post.title") {{post.title}}
</template>

<script>
import { SelectComponent } from './components';
export default {
	name: 'App',
	data() {
		return {
			posts: [
				{
					id: 1,
					title: 'New post 1',
					description: 'Post description',
				},
				{
					id: 2,
					title: 'New post 2',
					description: 'Post description',
				},
			],
		};
	},
	methods: {
		onTitleChanged(event) {
			let index = this.posts.findIndex(post => post.id === event.id);
			this.posts[index].title = event.title;
		},
		changeTitle() {
			this.posts[0].title = 'Change the title in parent';
			this.posts[1].title = 'Change the title in parent';
		},
		selectChange(event) {
			console.log(event.target.value);
		},
	},
	components: {
		SelectComponent,
	},
};
</script>

<style lang="sass" scoped></style>
