<template>
	<div id="mz_nowPlaying">
		<ul>
			<li v-for="item in nowPlaying" @tap="handleDetail(item.filmId)">
				<div class="img">
					<img :src="item.poster" alt="">
				</div>
				<div class="text">
					<div class="nowPlayingFilm_name"><span class="name">{{item.name}}</span><span class="item">{{item.filmType.name}}</span></div>
					<div class="nowPlayingFilm_grade">
						<span class="label">观众评分 </span>
						<span v-if='item.grade' class="grade">{{item.grade}}</span>
						<span class="grade" v-else>暂无评分</span>
					</div>
					<div class="nowPlayingFilm_actors" v-if='item.actors'>
						主演：<span class="label" v-for='val in item.actors'>{{val.name + '  '}}</span>
					</div>
					<div  class="nowPlayingFilm_actors" v-else>主演：<span>暂无主演</span></div>
					<div class="nowPlayingFilm_detail"><span class="label">{{item.nation}}&nbsp;&nbsp;|&nbsp;&nbsp;{{item.runtime}}分钟</span></div>
				</div>
				<div class="nowPlayingFilm-buy">购票</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'NowPlaying',
	data(){
		return {
			nowPlaying: [],
			date: []
		};
	},
	mounted(){
		this.$http.get('static/mock/nowPlaying.json').then(res => {
			var msg = res.data.msg;
			var arr = [];
			if(msg === 'ok'){
				this.nowPlaying = res.body.data.films;
			}
		});
	},
	methods: {
		handleDetail(filmId){
			this.$router.push('/detail/' + filmId);
		}
	}
}
</script>

<style>
	#mz_nowPlaying ul{
		margin-bottom: 49px;
	}
	#mz_nowPlaying ul li{
		padding: 15px 15px 15px 15px;
		height: 94px;
		position: relative;
		background-color: #fff;
		overflow: hidden;
	}
	#mz_nowPlaying ul li .img{
		width: 66px;
		height: 94px;
		float: left;
	}
	#mz_nowPlaying ul li .img img{
		width: 100%;
		height: 100%;
	}
	#mz_nowPlaying ul li .text{
		float: left;
		width: 53%;
		padding: 4px 10px;
	}
	#mz_nowPlaying ul li .text .nowPlayingFilm_grade,
	#mz_nowPlaying ul li .text .nowPlayingFilm_actors,
	#mz_nowPlaying ul li .text .nowPlayingFilm_detail
	#mz_nowPlaying ul li .text .nowPlayingFilm_name{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 100%;
	}
	#mz_nowPlaying ul li .text .nowPlayingFilm_name .name{
		max-width: calc(100% - 48px);
		color: #191a1b;
		font-size: 16px;
		height: 22px;
		line-height: 22px;
		margin-right: 5px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		display: inline-block;
		vertical-align: middle;
	}
	#mz_nowPlaying ul li .text .nowPlayingFilm_name .item{
		font-size: 9px;
		color: #fff;
		background-color: #d2d6dc;
		height: 14px;
		line-height: 14px;
		padding: 0 2px;
		border-radius: 2px;
		display: inline-block;
		vertical-align: middle;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	#mz_nowPlaying ul li .text .nowPlayingFilm_grade .label{
		font-size: 13px;
		margin-top: 4px;
		color: #797d82;
	}
	#mz_nowPlaying ul li .text .nowPlayingFilm_grade .grade{
		color: #ffb232;
		font-size: 14px;
	}
	#mz_nowPlaying ul li .nowPlayingFilm-buy{
		position: absolute;
		right: 15px;
		top: 0;
		bottom: 0;
		margin: auto;
		line-height: 23px;
		height: 23px;
		width: 15%;
		color: #ff5f16;
		font-size: 13px;
		text-align: center;
		border-radius: 2px;
		border: 1px solid #ff5f16;
	}
</style>
