<template>

	<div id="icon">
	<div class="banner">
    <img src="https://img3.doubanio.com/f/talion/fbcb08987a36258354c6037211d94286bef9716c/pics/card/promotion_bg.jpg" class="img">
    <a href="#" class="promo">打开App，回复广播</a>
    <a href="#" class="promo-left">极速下载</a>
    <a href="#" class="promo-right">打开</a>
    </div>
    <div class="card">
		<h1 class="title">{{arr.title}}</h1>
		<div class="time">
			<span>豆瓣<span class="timestamp">{{arr.create_time}}</span></span>
		</div>
		<div class="data">
			<img src="https://img3.doubanio.com/f/talion/db2bb63894e51a2fd6d6ccce27a4d90f72475fe8/pics/card/share/ic_wechat.png">
			<img src="https://img3.doubanio.com/f/talion/d8fd33d65b3207374091160b74e51e8f822525f9/pics/card/share/ic_qq.png">
			<img src="https://img3.doubanio.com/f/talion/307cb338af08893636f31d7c2a9303403805981d/pics/card/share/ic_weibo.png">
			<img src="https://img3.doubanio.com/f/talion/964b6037e76fbd97c2bda8f267451abd08739d92/pics/card/share/ic_more.png">
		</div>
		<div class="content">
		
		<div v-html="arr.content">
			
		</div>
		</div>
		</div>
	</div>
</template>
<script>
	export default{
		name: 'Icon',
		data(){
			return{
				arr:[],
				arr1:[]
				
			}
		},
		mounted(){
			this.fetchData();
			
			var _this =this;
			function fuck(){
				var obj = _this.arr1;
				console.log(_this.arr1);
				for (var i = 0; i < obj.length; i++) {
					
					console.log(obj[i].image.large.url);
					$('img').eq(i).attr("src",obj[i].image.large.url);
				}
			};
			setTimeout(fuck(),500);
			
		},
		methods: {
			fetchData: function () {
				this.$http.get('https://m.douban.com/rexxar/api/v2/note/629037498').then(function(res){
				this.arr=res.body;
				this.arr1=res.body.photos;
				
				
				})
			}
		}

	}
</script>
<style type="text/css">
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
	.card{
		    margin: 0 18px;
	}
	.data{
		width:339px;
		height:32px;
	}
	.data img{
		width: 32px;
    height: 32px;
   margin-right: 16px;
    float: left;
	}
	.title{
		text-align: left;
		    margin: 30px 0 5px;
    font-size: 24px;
    line-height: 32px;
    word-break: break-all;
    overflow: hidden;
    font-weight: normal;
	}
	.time{width:339px;
		text-align: left;
	height: 22px;
    line-height: 26px;
    margin-bottom: 30px;
	}
	.time span{
		    color: #494949;    font-size: 15px;
    line-height: normal;
	}
	.timestamp{
		    color: #ccc !important;
    margin-left: 5px;
	}
	.content p{
		    margin: 25px 0;
		    font-size: inherit;
    line-height: inherit;
    word-wrap: inherit;
    white-space: pre-wrap;
    word-break: break-all;
        font-size: 20px;
    color: #494949;
    text-align: left;
	}
	h2
	{
		text-align: left;
	}
	a{	
		color: #42bd56;
	}
</style>