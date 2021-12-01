<template lang="pug">
div
	select(v-bind="$attrs")
		option(value="") Select
		option(value="1") 1
	select(v-bind="$attrs")
		option(value="") Select
		option(value="1") 1
</template>

<script>
export default {
	inheritAttrs: false,
	props: [],
	data() {
		return {};
	},
	mounted() {
		console.log(this.$attrs);
	},
};
</script>
