<template lang="pug">
div
  div
    button(@click.prevent="onPostClick") Click to Post Page
    button(@click.prevent="onReturn") Return to previous page
  div Home Page
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
	name: 'Home',
	components: {
		HelloWorld,
	},
	methods: {
		onPostClick() {
			this.$router.push({ path: '/posts', query: { id: 1 } });
		},
		onReturn() {
			this.$router.go(-1);
		},
	},
};
</script>
