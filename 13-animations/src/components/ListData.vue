<template lang="pug">
div
	div
		button(@click.prevent="onAdd()") Add
		button(@click.prevent="onRemove()") Remove
		button(@click.prevent="onShuffle()") Shuffle
	div
		transition-group(tag="div" name="list")
			span.mx-1.list-item(v-for="number in numbers" :key="number") {{number}}
</template>

<style lang="stylus" scoped>
.list-item
	display inline-block
.list-enter-from
	opacity 0
	transform translateY(30px)
.list-enter-to
	transform translateY(0)
	opacity 1
.list-enter-active
	transition all 1s ease
.list-leave-from
	opacity 1
	transform translateY(0)
.list-leave-to
	transform translateY(30px)
	opacity 0
.list-leave-active
	transition all 1s ease
	position absolute
.list-move
	transition all 1s ease
</style>

<script>
export default {
	data() {
		return {
			numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
			nextNum: 10,
		};
	},
	methods: {
		onAdd() {
			this.numbers.push(this.nextNum);
			this.nextNum++;
		},
		onRemove() {
			let randomIndex = Math.round(Math.random() * this.numbers.length);
			this.numbers = this.numbers.filter(
				number => number !== this.numbers[randomIndex],
			);
		},
		onShuffle() {
			this.numbers.reverse();
		},
	},
};
</script>
