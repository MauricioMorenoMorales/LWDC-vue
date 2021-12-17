<template lang="pug">
.text-primary.py-4.text-center(style="border: 1px solid #000")
	transition(
		name="button"
		mode="out-in"
		@before-enter="beforeEnter"
		@enter="enter"
		@after-enter="afterEnter"
		@before-leave="beforeLeave"
		@leave="leave"
		@after-leave="afterLeave"
		@enter-cancelled="enterCancelled"
		@leave-cancelled="leaveCancelled"
	)
		button.btn.btn-danger(v-if="showOnButton" @click.prevent="showOnButton = false") Off
		button.btn.btn-primary(v-else @click.prevent="showOnButton = true") On
</template>

<script>
import AnimateButton from './AnimateButton.vue';
export default {
	data() {
		return {
			showOnButton: true,
		};
	},
	components: {
		AnimateButton,
	},
	methods: {
		beforeEnter(element) {
			console.log('before enter');
			element.style.opacity = 0;
		},
		enter(element, done) {
			console.log('enter');
			let step = 0.01;
			let opacity = 0;
			const interval = setInterval(() => {
				opacity += step;
				element.style.opacity = opacity;
				if (opacity >= 1) {
					clearInterval(interval);
					done();
				}
			}, 20);
		},
		afterEnter() {
			console.log('After enter');
		},
		enterCancelled() {},
		beforeLeave(element) {
			element.style.opacity = 1;
			console.log('before leave');
		},
		leave(element, done) {
			console.log('Leave');
			let step = 0.01;
			let opacity = 1;
			const interval = setInterval(() => {
				opacity -= step;
				element.style.opacity = opacity;
				if (opacity <= 0) {
					clearInterval(interval);
					done();
				}
			}, 20);
		},
		afterLeave(element, done) {
			console.log('After Leave');
		},
		leaveCancelled() {},
	},
};
</script>

<style lang="stylus" scoped></style>
