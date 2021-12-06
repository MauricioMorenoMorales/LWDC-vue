<template lang="pug">
div
  navigation
  div.container
    div.row
      div.col-md-12
        router-link.link(to="/") Home
        router-link.link(to="/about") About
        router-link.link(to="/posts") Posts
        router-link.link(to="/create-post") Create Post
        router-view
</template>

<script>
import Navigation from './components/TheNavigation.vue';
export default {
	components: {
		Navigation,
	},
};
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
.link
  margin-right 10px
</style>
