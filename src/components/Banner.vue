<template>
	<div id="mz_banner" class="swiper-container">
		<router-link class="city" tag="div" to="/city">{{ $store.state.cityName }}<i class="iconfont icon-moreunfold"></i></router-link>
		<ul class="swiper-wrapper">
			<li class="swiper-slide" v-for="item in bannerList"><img :src="item.imgUrl" alt=""></li>
		</ul>
		<div id="MyClass" class="swiper-pagination"></div>
	</div>
</template>

<script>
export default {
	name: 'Banner',
	data(){
		return {
			bannerList: []
		};
	},
	mounted(){
		this.$http.get('static/mock/banner.json').then(res => {
			var msg = res.data.msg;
			if(msg === 'success'){
				this.bannerList = res.body.data;
				this.$nextTick().then(()=>{
					new Swiper('#mz_banner',{
						loop: true,
						autoplay: true,
						pagination: {
							el: '.swiper-pagination',
							clickable: true
						}
					});
				});
			}
		})
	}
}
</script>

<style>
	#mz_banner{
		width: 100%;
		overflow: hidden;
	}
	#mz_banner img{
		width: 100%;
	}
	#MyClass{
		width: auto;
		right: 12px!important;
		line-height: 5px;
		text-align: right;
	}
	#MyClass .swiper-pagination-bullet{
		margin: 0 3px !important;
		width: 5px !important;
		height: 5px !important;
		background-color: #fff !important;
	}
	#mz_banner .city{
		position: absolute;
		top: 18px;
		left: 7px;
		color: #fff;
		z-index: 10;
		font-size: 13px;
		background: rgba(0,0,0,.2);
		height: 30px;
		line-height: 30px;
		border-radius: 15px;
		text-align: center;
		padding: 0 5px;
		font-size: 13px;
		color: #fff;
	}
	#mz_banner .city i{
		font-size: 12px;
		margin-left: 2px;
	}
</style>
