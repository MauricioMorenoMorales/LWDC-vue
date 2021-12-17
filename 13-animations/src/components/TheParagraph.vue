<template lang="pug">
.text-center
	transition: p(v-show="showParagraph") Hai Leela
	button.btn.btn-primary(v-on:click.prevent="onToggle()") Toggle Text
</template>

<script>
export default {
	data() {
		return {
			showParagraph: true,
		};
	},
	methods: {
		onToggle() {
			this.showParagraph = !this.showParagraph;
		},
	},
};
</script>

<style lang="stylus" scoped>
.v-enter-from
	opacity: 0;
	transform translateY(-10px)
.v-enter-to
	opacity 1
	transform translateY(0px)
.v-enter-active
	transition all 0.3s

.v-leave-from
	opacity 1
	transform translateY(0)
.v-leave-to
	opacity 0
	transform translateY(-20px)
.v-leave-active
	transition all 1s
</style>
