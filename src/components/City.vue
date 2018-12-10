<template>
	<div id="mz_city">
		<div class="mz_title">
			<router-link  class="return" tag="div" to="films/nowPlaying">
				<img src="/static/images/return.png" alt="">
			</router-link>
			<span>当前城市-{{ $store.state.cityName }}</span>
		</div>
		<div class="cityList">
			<ul ref="cityList">
				<li v-for="item in cityList">
					<p>{{ item.index.toUpperCase() }}</p>
					<div class="city">
						<div class="val" v-for="val in item.list" @tap='change(val)'>{{val}}</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="indexList">
			<ul>
				<li v-for="item,index in cityList" @tap="handleLink(index)">{{ item.index.toUpperCase() }}</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'City',
		data(){
			return {
				cityList: []
			};
		},
		mounted(){
			this.$http.get('static/mock/city.json').then(res => {
				var msg = res.data.msg;
				if(msg === 'ok'){
					this.cityList = this.formatCityList(res.data.data.cities);
				}
			});
		},
		methods: {
			formatCityList(cities){
				var result = [];
				for(var i = 0;i < cities.length;i++){
					var firstLetter = cities[i].pinyin.charAt(0);
					if( toCom(firstLetter) ){
						result.push( { index : firstLetter , list : [ cities[i].name ] } );
					}
					else{
						for(var j = 0;j < result.length;j++){
							if( result[j].index === firstLetter ){
								result[j].list.push( cities[i].name );
							}
						}
					}
				}
				result.sort((c1 , c2)=>{
					if( c1.index < c2.index ){
						return -1;
					}
					else if(c1.index > c2.index){
						return 1;
					}
					else{
						return 0;
					}
				});	
				function toCom(firstLetter){
					for(var i = 0;i<result.length;i++){
						if( result[i].index === firstLetter ){
							return false;
						}
					}
					return true;
				}			
				return result;
			},
			handleLink(index){
				var cityLists = this.$refs.cityList.getElementsByTagName('li');
				document.documentElement.scrollTop = document.body.scrollTop = cityLists[index].offsetTop - 44;
			},
			change(val){
				this.$store.commit('CITY_CHANGE',val);
				this.$router.replace('films/nowPlaying')
			}
		}
	}
</script>
<style>
	#mz_city{
		overflow: hidden;
	}
	#mz_city .mz_title{
		position: fixed;
		font-size: 17px;
		line-height: 44px;
		width: 100%;
		text-align: center;
		background-color: #fff;
		color: #191a1b;
	}
	#mz_city .mz_title .return{
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		margin: auto;
		width: 30px;
		height: 30px;
	}
	#mz_city .mz_title .return img{
		width: 100%;
		height: 100%;
	}
	#mz_city .indexList {
		overflow: hidden;
	}
	#mz_city .indexList{
		background-color: #fff;
		text-align: center;
		position: fixed;
		right: 0;
		top: 0;
		height: 100%;
		display: -webkit-box;
		-webkit-box-pack: center;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
	}
	#mz_city .indexList ul{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
	}
	#mz_city .indexList li{
		font-size: 11px;
		padding: 0 3px;
		color: #191a1b;
	}
	#mz_city .cityList{
		margin-top: 44px;
		margin-right: 17px;
	}
	#mz_city .cityList ul li .city{
		background-color: #fff;
		padding-left: 15px;
		overflow: hidden;
	}
	#mz_city .cityList ul li p{
		background-color: #f4f4f4;
		color: #797d82;
		height: 30px;
		line-height: 30px;
		padding: 0 0 0 15px;
	}
	#mz_city .cityList ul li .city .val{
		background-color: #fff;
		border-bottom: 1px solid #ededed;
		color: #191a1b;
		font-size: 14px;
		float: left;
		width: 33.33333334%;
		text-align: center;
		height: 48px;
		line-height: 48px;
	}
</style>