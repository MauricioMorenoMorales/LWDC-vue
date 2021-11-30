const app = Vue.createApp({
	data(){
		return {
			hobbies: ['Reading','Writing','Spielen']
		}
	}
});

app.component('hobbies-component', {
	template: `
	<ul class="list-group">
		<li class="list-group-item" v-for="hobby in hobbies">{{hobby}}</li>
	</ul>
	`,
	data(){
		return{
			hobbies: ['Reading','Writing','Spielen']
		}
	}
})

app.mount('#app')