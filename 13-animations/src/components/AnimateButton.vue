<template lang="pug">
.text-primary.py-4.text-center(style="border: 1px solid #000")
	transition(name="button" mode="out-in")
		button.btn.btn-danger(v-if="showOnButton" @click.prevent="showOnButton = false") Off
		button.btn.btn-primary(v-else @click.prevent="showOnButton = true") On
</template>

<style lang="stylus" scoped>
.button-enter-from, .button-leave-to
	opacity 0
	transform translateX(-30px)
.button-enter-to, .button-leave-from
	opacity 1
	transform translateX(0)
.button-enter-active, .button-leave-active
	transition all .5s
</style>

<script>
export default {
	data() {
		return {
			showOnButton: true,
		};
	},
};
</script>
