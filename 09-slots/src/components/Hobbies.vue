<template lang="pug">
div
	ul.list-group
		li.list-group-item(v-for="hobby in hobbies" :key="hobby")
			slot(:hobby="hobby")
</template>

<script>
export default {
	data() {
		return {
			hobbies: ['Reading', 'Writing', 'Learning'],
			item: [1, 2, 3],
		};
	},
};
</script>
