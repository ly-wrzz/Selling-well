<template>
	<div>
		<Banner />
		<div id="mz_films" :class="searchBarFixed == true && 'isFixed'">
			<div class="isShow" v-if='searchBarFixed'>
				<router-link class="city" tag="div" to="/city">
					{{ $store.state.cityName }}<i class="iconfont icon-moreunfold"></i>
				</router-link>
				<span>电影</span>
			</div>
			<div class="mz_films_nav">
				<router-link tag="p" to="/films/nowPlaying">正在热映</router-link>
				<router-link tag="p" to="/films/comingSoon">即将上映</router-link>
				<div :class="isClass == true && 'isTransform'"><span></span></div>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
import Banner from '@/components/Banner.vue';
export default {
	name: 'films',
	components: {
		Banner
	},
	data(){
		return {
			searchBarFixed: false,
			isClass: true
		};
	},
	mounted(){
			if (this.$route.path == '/films/nowPlaying') {
				this.isClass = false;
			}else {
				this.isClass = true;
			};
			window.addEventListener('scroll', this.handleScroll);
	},
	watch: {
		$route(to, from) {
			if (this.$route.path == '/films/nowPlaying') {
				this.isClass = false;
			}else {
				this.isClass = true;
			}
		}
	},
	methods: {
		handleScroll () {
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			var offsetTop = document.querySelector('#mz_films').offsetTop;
			if (scrollTop > offsetTop) {
				this.searchBarFixed = true;
			} else{
				this.searchBarFixed = false;
			}
		}
	},
	destroyed () {
		window.removeEventListener('scroll', this.handleScroll);
	}
}
</script>

<style>
	#mz_films{
		width: 100%;
		background-color: #fff;
	}
	#mz_films .mz_films_nav{
		overflow: hidden;
		width: 100%;
		height: 49px;
		position: relative;
	}
	#mz_films .mz_films_nav p{
		float: left;
		color: #191a1b;
		width: 50%;
		text-align: center;
		line-height: 49px;
	}
	#mz_films .mz_films_nav .router-link-active{
		color: #ff5f16;
	}
	#mz_films .mz_films_nav div{
		position: absolute;
		width: 50%;
		height: 2px;
		bottom: 0;
		transition: transform .2s cubic-bezier(.35,0,.25,1);
	}
	#mz_films .mz_films_nav div span{
		display: block;
		width: 56px;
		height: 2px;
		background-color: #ff5f16;
		margin: 0 auto;
	}
	#mz_films .mz_films_nav .isTransform{
		transform: translate3d(100%, 0px, 0px);
	}
	#mz_films.isFixed{
		position: fixed;
		top: 0;
		z-index: 999;
	}
	#mz_films .isShow{
		width: 100%;
		height: 44px;
		text-align: center;
		line-height: 44px;
		z-index: 999;
		color: #191a1b;
		font-size: 17px;
	}
	#mz_films .isShow .city{
		position: absolute;
		left: 0;
		color: #191a1b;
		font-size: 13px;
		text-align: center;
		padding: 0 18px;
		font-size: 13px;
	}
	#mz_films .isShow .city i{
		font-size: 12px;
		margin-left: 2px;
	}
</style>