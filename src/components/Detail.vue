<template>
	<div id="mz_detail">
		<div class="mz_title">
			<router-link  class="return" tag="div" to="films/nowPlaying">
				<img src="/static/images/return.png" alt="">
			</router-link>
			<span>{{ detail.name }}</span>
		</div>
		<div class="top">
			<div class="banner">
				<img :src="detail.poster">
			</div>
			<div class="info">
				<div class="col">
					<div class="film_name">
						<span class="name">{{ detail.name }}</span>
						<span class="item">{{ detail.filmType && detail.filmType.name }}</span>
					</div>
					<div class="film_grade">
						<span class="grade">{{detail.grade}}</span><span class="grade_text">分</span>
					</div>
				</div>
				<div class="film_category">{{detail.category}}</div>
				<div class="film_time">{{comPremiereAt}}</div>
				<div class="film_runtime">{{detail.nation}} | {{detail.runtime}}分钟</div>
				<div class="film_synodivsis">{{detail.synopsis}}</div>
			</div>
			<div class="actors">
				<div class="title">演职人员</div>
				<div class="swiper-container" id="actors_swiper">
					<ul class="swiper-wrapper">
						<li class="swiper-slide" v-for='item in detail.actors'>
							<img :src="item.avatarAddress" alt="">
							<span class="actors-name">{{item.name}}</span><span class="actors-role">{{item.role}}</span>
						</li>
					</ul>
				</div>
			</div>
			<div class="photos">
				<div class="title">
					<span>剧照</span><span class="all">全部(4)</span>
				</div>
				<div class="swiper-container" id="photos_swiper">
					<ul class="swiper-wrapper">
						<li class="swiper-slide" v-for='item in detail.photos'>
							<img :src="item" alt="">
						</li>
					</ul>
				</div>
			</div>
			<div class="goSchedule">选座购票</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Detail',
	data(){
		return {
			detail : {}
		};
	},
	mounted(){
		var mid = this.$route.params.mid;
		this.$http.get('static/mock/detail_'+mid+'.json').then(res => {
			var msg = res.data.msg;
			if(msg === 'ok'){
				this.detail = res.data.data.film;
				this.$nextTick().then(()=>{
					new Swiper('#actors_swiper', {
					slidesPerView: 3.4,
					spaceBetween: 10,
					freeMode: true,
						pagination: {
							el: '.swiper-pagination',
							clickable: true,
						},
					});
					new Swiper('#photos_swiper', {
					slidesPerView: 2.4,
					spaceBetween: 10,
					freeMode: true,
						pagination: {
							el: '.swiper-pagination',
							clickable: true,
						},
					});
				});
			};
		});
	},
	computed : {
		comPremiereAt(){
			if( this.detail.premiereAt ){
				var date = new Date();
				date.setTime(this.detail.premiereAt*1000);
				return date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate() + ' 上映';
			}
			else{
				return '';
			}
		}
	}
}
</script>

<style>
	#mz_detail{
		overflow: hidden;
	}
	#mz_detail .top{
		margin-top: 44px;
	}
	#mz_detail .mz_title{
		position: fixed;
		font-size: 17px;
		line-height: 44px;
		width: 100%;
		text-align: center;
		background-color: #fff;
		color: #191a1b;
	}
	#mz_detail .mz_title .return{
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		margin: auto;
		width: 30px;
		height: 30px;
	}
	#mz_detail .mz_title .return img{
		width: 100%;
		height: 100%;
	}
	#mz_detail .banner{
		width: 100%;
	}
	#mz_detail .goSchedule{
		position: fixed;
		bottom: -2px;
		left: 0;
		height: 49px;
		width: 100%;
		text-align: center;
		background-color: #ff5f16;
		color: #fff;
		font-size: 16px;
		line-height: 49px;
		z-index: 9999;
	}
	#mz_detail .banner img{
		width: 100%;
	}
	#mz_detail .info{
		padding: 12px 15px;
		background-color: #fff;
	}
	#mz_detail .info .col{
		width: 100%;
		overflow: hidden;
	}
	#mz_detail .info .col .film_name{
		width: 220px;
		float: left;
	}
	#mz_detail .info .col .film_name .name{
		color: #191a1b;
		font-size: 18px;
		height: 24px;
		line-height: 24px;
		margin-right: 7px;
		display: inline-block;
		vertical-align: middle;
	}
	#mz_detail .info .col .film_name .item{
		font-size: 9px;
		color: #fff;
		background-color: #d2d6dc;
		height: 14px;
		line-height: 14px;
		padding: 0 2px;
		border-radius: 2px;
		display: inline-block;
		vertical-align: middle;
	}
	#mz_detail .info .col .film_grade{
		text-align: right;
		color: #ffb232;
	}
	#mz_detail .info .col .film_grade .grade{
		font-size: 18px;
		font-style: italic;
		margin: 0 4px;
	}
	#mz_detail .info .col .film_grade .grade_text{
		font-size: 10px;
	}
	#mz_detail .info .film_category,
	#mz_detail .info .film_time,
	#mz_detail .info .film_runtime,
	#mz_detail .info .film_synodivsis{
		font-size: 14px;
		color: #797d82;
		margin-top: 4px;
	}
	#mz_detail .info .film_synodivsis{
		margin: 12px 0;
	}
	#mz_detail .actors{
		margin-top: 10px;
		background-color: #fff;
	}
	#mz_detail .actors .title{
		box-sizing: border-box;
		width: 100%;
		padding: 15px;
		font-size: 17px;
		color: #191a1b;
	}
	#mz_detail .actors .swiper-container ul li{
		height: 127px;
		background-color: #fff;
	}
	#mz_detail .actors .swiper-container ul li img{
		width: 100%;
		height: 85px;
	}
	#mz_detail .actors .swiper-container ul li .actors-name{
		padding-top: 10px;
		font-size: 12px;
		color: #191a1b;
		width: 100%;
		text-align: center;
		height: 18px;
		display: block;
	}
	#mz_detail .actors .swiper-container ul li .actors-role{
		font-size: 10px;
		color: #797d82;
		width: 100%;
		text-align: center;
		display: block;
	}
	#mz_detail .actors .swiper-container{
		height: 140px;

	}
	#mz_detail .photos{
		margin-top: 10px;
		margin-bottom: 60px;
		background-color: #fff;
		padding-bottom: 15px;
	}
	#mz_detail .photos .title{
		box-sizing: border-box;
		width: 100%;
		padding: 15px;
		font-size: 17px;
		color: #191a1b;
		height: 62px;
	}
	#mz_detail .photos .title .all{
		font-size: 13px;
		color: #797d82;
		float: right;
	}
	#mz_detail .photos #photos_swiper ul li img{
		width: 100%;
		height: 100px;
	}
</style>
