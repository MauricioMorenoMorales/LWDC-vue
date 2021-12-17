<template lang="pug">
div
	div
		span.mx-1(v-for="number in numbers" :key="number") {{number}}
	div
		button(@click.prevent="onAdd()") Add
		button(@click.prevent="onRemove()") Remove
		button(@click.prevent="onShuffle()") Shuffle
</template>

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
