<!-- <template>
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
		<div class="container">
			<div class="row">
				<div class="col-md-4 my-4">
					<hobbies>
						<template v-slot:default="slotProps">
							<h2>{{ slotProps.hobby }}</h2>
						</template>
					</hobbies>
				</div>
				<div class="col-md-4 my-4">
					<hobbies #default="{ hobby: name, item = 1 }">
						<h1>{{ name }} {{ item }}</h1>
					</hobbies>
				</div>
			</div>
		</div>
		<div class="my-5 py-5"></div>
	</div>
</template> -->

<template lang="pug">
div
	img(alt="Vue Logo" src="./assets/logo.png")
	HelloWorld(msg="Welcome to your Vue.js App")
	Button: em.fa.fa-caret-up &nbsp; User Profile
	div.container
		div.row
			div.col-md-4
				profile-card
					template(#content)
						div Content
					template(#footer)
						div Footer Message
			div.col-md-4
				profile-card
					template(v-slot:header)
						div Header Title
					template(#footer)
						div Footer Message
	div.container
		div.row
			div.col-md-4.my-4
				hobbies
					template(v-slot:default="slotProps")
						h2 {{slotProps.hobby}}
			div.col-md-4.my-4
				hobbies(#default="{hobby: name, item = 1}")
					h1 {{name}} {{item}}
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Button from './components/Button.vue';
import ProfileCard from './components/ProfileCard.vue';
import Hobbies from './components/Hobbies.vue';

export default {
	name: 'App',
	components: {
		HelloWorld,
		Button,
		ProfileCard,
		Hobbies,
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
