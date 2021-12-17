<template lang="pug">
.container
	.row
		.col-md-6
			.box(:class="{animate: animate}")
			.my-3
				button.btn.btn-primary(@click.prevent="onAnimateClick") Click Me
			.my-3
				animate-button
			.my-3
				the-paragraph
			.my-3
				animated-paragraph
			.my-3
				dialog-modal(v-show="openDialog" :open="openDialog")
					div This is the Dialog Modal
					div: button.btn.btn-primary(@click.prevent="openDialog = false") Okay!
				div: button.btn.btn-primary(@click.prevent="onOpenDialog()") Open Dialog Modal
		.col-md-6
			.my-3
				transition-events
			.my-3
				list-data
</template>

<script>
import TheParagraph from './components/TheParagraph.vue';
import AnimatedParagraph from './components/AnimateParagraph.vue';
import DialogModal from './components/DialogModal.vue';
import AnimateButton from './components/AnimateButton.vue';
import TransitionEvents from './components/TransitionEvents.vue';
import ListData from './components/ListData.vue';

export default {
	name: 'App',
	data() {
		return {
			animate: false,
			openDialog: false,
			isOpened: false,
		};
	},
	components: {
		TheParagraph,
		AnimatedParagraph,
		DialogModal,
		AnimateButton,
		TransitionEvents,
		ListData,
	},
	methods: {
		onAnimateClick() {
			this.animate = true;
		},
		onOpenDialog() {
			this.openDialog = true;
		},
		openParagraph() {
			this.isOpened = !this.isOpened;
		},
	},
};
</script>

<style lang="stylus">
.box
	width 100px
	height 100px
	border 1px solid red
	background-color red
	transition transform 0.5s
.animate
	animation animate-box 2s forwards
	background-color blue

@keyframes animate-box {
	0% {
		transform: translateX(0px) rotate(0deg)
	}
	50% {
		transform: translateX(50px) rotate(15deg)
	}
	100% {
		transform: translateX(200px) rotate(45deg)
	}
}
</style>
