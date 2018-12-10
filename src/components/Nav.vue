<template>
	<div id="mz_nav">
		<ul>
			<router-link tag="li" to="/films">
				<span class="imgs imgs1"></span>
				<span class="text">电影</span>
			</router-link>
			<router-link tag="li" to="/cinemas">
				<span class="imgs imgs2"></span>
				<span class="text">影院</span>
			</router-link>
			<router-link tag="li" to="/center">
				<span class="imgs imgs3"></span>
				<span class="text">我的</span>
			</router-link>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Nav'
}
</script>

<style>
	#mz_nav{
		width: 100%;
		position: fixed;
		left: 0;
		bottom: -2px;
		z-index: 999;
	}
	#mz_nav ul{
		overflow: hidden;
	}
	#mz_nav ul li{
		position: relative;
		text-align: center;
		width: 33.33334%;
		height: 49px;
		background-color: #fff;
		float: left;
	}
	#mz_nav ul li .text{
		font-size: 10px;
		display: inline-block;
		position: absolute;
		top: 32px;
		line-height: 12px;
		left: 0;
		right: 0;
		color: #797d82;
	}
	#mz_nav ul .router-link-active .text{
		color: #ff5f16;
	}
	#mz_nav ul li .imgs{
		display: inline-block;
		width: 21px;
		height: 21px;
		position: absolute;
		top: 8px;
		margin: auto;
		right: 0;
		left: 0;
		background-size: cover;
	}
	#mz_nav ul li .imgs1{
		background-image: url('/static/images/001.png');
	}
	#mz_nav ul li .imgs2{
		background-image: url('/static/images/002.png');
	}
	#mz_nav ul li .imgs3{
		background-image: url('/static/images/003.png');
	}
	#mz_nav ul .router-link-active .imgs1{
		background-image: url('/static/images/01.png');
	}
	#mz_nav ul .router-link-active .imgs2{
		background-image: url('/static/images/02.png');
	}
	#mz_nav ul .router-link-active .imgs3{
		background-image: url('/static/images/03.png');
	}
	.isFixed{
		position:fixed;
	}
</style>
