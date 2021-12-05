<template lang="pug">
div
  div
    button(@click="onActiveSelected") Active Hobbies
    button(@click="onInactiveSelected") Inactive Hobbies
  div
    button(@click="onOpenModal") Open Modal
  active-hobbies(v-if="selectedComponent === 'active-hobbies'")
  inactive-hobbies(v-if="selectedComponent === 'inactive-hobbies'")
  p Component and keep alive tag
  keep-alive
    component(:is="selectedComponent")
  teleport(to="body")
    modal-dialog(
      v-if="showModal"
      @closemodal="showModal = false"
    )
</template>

<script>
import { defineAsyncComponent } from 'vue';
import ModalDialog from './components/ModalDialog.vue';
const ActiveHobbies = defineAsyncComponent(() => {
	return import(
		/*webpackChunkName: 'activehobbies'*/ './components/ActiveHobbies.vue'
	);
});
const InactiveHobbies = defineAsyncComponent(() =>
	import(
		/*webpackChunkName: 'inactiveHobbies'*/ './components/InactiveHobbies.vue'
	),
);

export default {
	name: 'App',
	data() {
		return {
			selectedComponent: 'active-hobbies',
			showModal: false,
		};
	},
	components: {
		ActiveHobbies,
		InactiveHobbies,
		ModalDialog,
	},
	methods: {
		onActiveSelected() {
			this.selectedComponent = 'active-hobbies';
		},
		onInactiveSelected() {
			this.selectedComponent = 'inactive-hobbies';
		},
		onOpenModal() {
			this.showModal = !this.showModal;
		},
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
