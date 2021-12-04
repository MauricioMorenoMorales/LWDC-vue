<template>
	<div>
		<img alt="Vue logo" src="./assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js App" />
		<Button> <em class="fa fa-caret-up"></em>&nbsp; User Profile </Button>
		<div class="container">
			<div class="row">
				<div class="col-md-4">
					<profile-card>
						<template #content>
							<div>Content</div>
						</template>
						<template #footer>
							<div>Footer Message</div>
						</template>
					</profile-card>
				</div>
				<div class="col-md-4">
					<profile-card>
						<template v-slot:header>
							<div>Header Title</div>
						</template>
						<template #footer>
							<div>Footer Message</div>
						</template>
					</profile-card>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Button from './components/Button.vue';
import ProfileCard from './components/ProfileCard.vue';

export default {
	name: 'App',
	components: {
		HelloWorld,
		Button,
		ProfileCard,
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
</style>
