<template>
	<div id="app">
		<router-view></router-view>
		<Nav v-if='isShow'/>
	</div>
</template>

<script>
import Nav from '@/components/Nav.vue';
import Films from '@/components/Films.vue';
export default {
	name: 'App',
	components: {
		Nav,
		Films
	},
	data(){
		return {
			isShow: true
		};
	},
	mounted(){
		if (this.$route.path == '/city' || this.$route.path == '/detail/4424') {
			this.isShow = false;
		}else {
			this.isShow = true;
		}
	},
	watch: {
		$route(to, from) {
			if (this.$route.path == '/city' || this.$route.path == '/detail/4424') {
				this.isShow = false;
			}else {
				this.isShow = true;
			}
		}
	}
}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
		border: 0;
	}
	html,body{
		height: 100%;
		font-size: 14px;
		color: #777;
		background: #ebebeb;
	}
	li{
		list-style: none;
	}
	img{
		display: block;
	}
</style>
