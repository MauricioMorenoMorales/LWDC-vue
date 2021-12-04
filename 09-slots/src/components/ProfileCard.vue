<template lang="pug">
div.card
	div.header(v-if="$slots.header")
		slot(name="header")
	div.content
		slot(name="content")
			div This is default Content
		div Content Message
	div.footer
		slot(name="footer")
			div This is a default Footer
</template>

<script>
export default {
	mounted() {
		console.log(this.$slots);
	},
};
</script>

<style lang="stylus" scoped>
.header
	background-color #eee
	font-size 20px
	padding 20px
.card
	border 1px solid #eee
	box-shadow 1px 1px 1px #000
.content
	padding 20px 10px
.footer
	background #eee
	font-size 10px
</style>
