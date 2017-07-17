<template>
  <div id="cast">
    <div class="banner">
    <img src="https://img3.doubanio.com/f/talion/fbcb08987a36258354c6037211d94286bef9716c/pics/card/promotion_bg.jpg" class="img">
    <a href="#" class="promo">打开App，回复广播</a>
    <a href="#" class="promo-left">极速下载</a>
    <a href="#" class="promo-right">打开</a>
    </div>
    <a href="#" class="status">
    	<img src="https://img1.doubanio.com/icon/user_normal.jpg" alt="未登陆" class="i1">
    	<span>登录发广播</span>
    	<img src="https://img3.doubanio.com/f/talion/d9ba3fa414721588284167944c70664e685993b1/pics/card/ic_status_pen.svg" class="i2">
    	<img src="https://img3.doubanio.com/f/talion/68ab505eac3e7551815c06a5e03a26a6373bb46c/pics/card/ic_status_camera.svg" class="i3">
    </a>
    <Focus></Focus>
    <Icon></Icon>
  </div>
</template>

<script>
	import Focus from '../components/Focus'
	export default {
  name: 'cast' ,
  components:{
  	Focus
  }
}
</script>

<style>
	.cast{
		width: 100%;
	}
	.banner{
		width: 100%;
		position: relative;
	}
	.banner img{
		width: 100%;
	}
	.promo{
		position: absolute;
		font-size: 14px;
    font-weight: normal;
    line-height: 22px;
    top:28px;
    left:21px;
    color: #2CA532;
	}
	.promo-left{
		position: absolute;
		color: #fff;
    border: 1px solid #42bd56;
    background: #42bd56;
    width: 82px;
    height:28px;
    top:28px;
    right:80px;
    line-height: 28px;
    border-radius: 5px;
    font-size: 13px;
    font-weight: bold;
	}
	.promo-right{
		position: absolute;
		color: #42bd56;
    border: 1px solid #42bd56;
        font-size: 13px;
    font-weight: bold;
    width:62px;
    height:28px;
    line-height: 28px;
    top:28px;
    right:10px;
    border-radius: 5px;   
	}
	.status{
		display: block;
		position: relative;
		height: 60px;
		width: 100%;
		border-bottom: 1px solid #F4F4F4;
	}
	.status img{
		position: absolute;
		width: 24px;
		height: 24px;
	}
	.status span{
		position: absolute;
		top: 10px;
		left: 55px;
		color: #aaa;
    padding-left: 10px;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
	}
	.status .i1{
		top: 10px;
		left:16px;
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
	.i2{
		top: 20px;
		right:75px;
	}
	.i3{
		top: 20px;
		right:30px;
	}
</style>
