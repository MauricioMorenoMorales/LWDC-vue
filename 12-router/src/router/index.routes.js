import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Posts from '../views/Posts.vue';
import CreatePost from '../views/CreatePost.vue';
import PostItem from '../views/PostItem.vue';
import NotFound from '../views/NotFound.vue';
import NoPost from '../views/NoPost.vue';

const routes = [
	{
		path: '/',
		redirect: '/posts',
		name: 'Home',
		component: Home,
	},
	{
		path: '/posts',
		name: 'posts',
		component: Posts,
		children: [
			{
				path: '',
				component: NoPost,
			},
			{
				path: ':id',
				name: 'single-post',
				component: PostItem,
			},
		],
	},
	{
		path: '/create-post',
		name: 'Create Post',
		component: CreatePost,
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/About.vue'),
	},
	{
		path: '/:NotFound(.*)*',
		component: NotFound,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	linkActiveClass: 'active',
});

export default router;
