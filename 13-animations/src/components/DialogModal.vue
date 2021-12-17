<template lang="pug">
div
	.backdrop(v-if="open")
	transition: .dialog(v-if="open")
			slot
</template>

<script>
export default {
	props: ['open'],
	data() {
		return {
			test: false,
		};
	},
	methods: {
		testing() {
			this.test = !this.test;
		},
	},
};
</script>

<style lang="stylus" scoped>
.v-enter-from
  transform translateY(-200px)
.v-enter-to
  transform translateY(0px)
.v-enter-active
  transition .5s
.v-leave-from
  transform translateY(-200px)
.v-leave-to
  transform translateY(0px)
.v-leave-active
  transition .5s

.backdrop
	background rgba(0,0,0,0.5)
	position fixed
	top 0
	left 0
	width 100%
	height 100%
.dialog
	position fixed
	background-color white
	width 60vw
	top 20%
	left 20vw
	padding 20px

.i
	display none
</style>
