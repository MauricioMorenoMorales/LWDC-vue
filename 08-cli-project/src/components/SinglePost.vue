<template lang="pug">
div(:class="{'bgcolor-gray': isactive}")
	div.title {{post.title}}
	div {{post.description}}
	a(href="" @click.prevent="changeTitle") Change the title
</template>

<script>
export default {
	data() {
		return {
			post: this.postData,
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
		},
	},
};
</script>

<style lang="sass" scoped>
@import "../DesignSystem"
.title
	color: red
.bgcolor-gray
	background-color: $red
</style>
