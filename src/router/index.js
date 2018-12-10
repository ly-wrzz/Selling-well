import Vue from 'vue'
import Router from 'vue-router'

import Films from '@/components/Films.vue'
import Cinemas from '@/components/Cinemas.vue'
import Center from '@/components/Center.vue'
import NowPlaying from '@/components/NowPlaying.vue'
import ComingSoon from '@/components/ComingSoon.vue'
import Detail from '@/components/Detail.vue'
import City from '@/components/City.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/films',
			component: Films,
			children: [
				{
					path: '/films/nowPlaying',
					component: NowPlaying
				},
				{
					path: '/films/comingSoon',
					component: ComingSoon
				},
				{
					path: '/films',
					redirect: '/films/nowPlaying',
				}
			]
		},
		{
			path: '/cinemas',
			component: Cinemas
		},
		{
			path: '/center',
			component: Center
		},
		{
			path: '/detail/:mid',
			component: Detail
		},
		{
			path: '/city',
			component: City
		},
		{
			path: '/*',
			redirect: '/films'
		}
	]
})
