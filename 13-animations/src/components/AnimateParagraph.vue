<template lang="pug">
div
	transition: p(v-show="showParagraph")
		| Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore alias at totam beatae tenetur quo tempore ad dolorem fugit distinctio.
		| Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, repudiandae.  amet consectetur adipisicing elit. Nemo, repudian
		| Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, repudiandae.  amet consectetur adipisicing elit. Nemo, repudian
	div
		button.btn.btn-primary(@click.prevent="onToggle()") Toggle
</template>

<style lang="stylus" scoped>
.v-enter-active
	animation animate-para 1s
.v-leave-active
	animation animate-para 1s reverse

@keyframes animate-para {
	0% {
		opacity 0
		transform: translateX(0px)
	}
	33% {
		opacity 0.3
		transform: translateX(40px)
	}
	66% {
		opacity 0.6
		transform: translateX(-40px)
	}
	100% {
		opacity 1
		transform: translateX(0px)
	}
}
</style>

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
