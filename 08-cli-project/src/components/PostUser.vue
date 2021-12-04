<template lang="pug">
div
	div {{user.value}}
	div: button(@click.prevent="changeUser('Updated leela from a child')") change user
</template>

<script>
export default {
	inject: ['user', 'changeUser'],
	mounted() {
		console.log(this.user);
	},
};
</script>

<style lang="sass" scoped>
button
	background-color: #41B883
	border: none
	padding: 5px
	border-radius: 3px
	&:hover
		transform: scale(1.05)
</style>
