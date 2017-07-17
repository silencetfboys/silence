<template>
	<div id="focus">		
		<ul>
			<li v-for="(item,index) in arr2">
				<div class="desc">
					<img data-type="avatar" alt="豆瓣" src="https://img3.doubanio.com/icon/up95805238-16.jpg">
					<div class="userinfo">
						<strong>
							豆瓣
							<span>{{item.status.activity}}</span>
						</strong>
						<p>{{item.status.create_time}}</p>
						
					</div>
				</div>
				<router-link :to="{path:'/Icon',query:{id:'629037498'}}">
                <div class="feed">
					<p class="title" v-text="title"></p>
					<div class="detail">
						<span class="text">{{subtitle}}</span>					
							<img :src="img">
							</div>
					</div></router-link>
				
			</li>
		</ul>
		<a class="list-link" rel="nofollow">显示更多广播</a>
		<div class="download-app">
            <div class="info">
                <img src="https://img3.doubanio.com/f/talion/7837f29dd7deab9416274ae374a59bc17b5f33c6/pics/card/douban-app-logo.png" width="48">
                <div class="info-content">
                    <strong>豆瓣</strong>
                    <div>在 App 中刷广播更愉快</div>
                </div>
            </div>
                <a href="https://www.douban.com/doubanapp/card/log?category=guangbo&amp;cid=&amp;action=click_download&amp;ref=http%3A//www.douban.com/doubanapp/app%3Fchannel%3Dcard_guangbo%26direct_dl%3D1" rel="nofollow">去 App Store 免费下载 iOS 客户端</a>
        </div>
	</div>
</template>

<script>
export default {
  name: 'focus',
  data(){
  	return{
  		arr2:[]
  	}
  },
  mounted(){
 	this.$http.get('https://m.douban.com/rexxar/api/v2/status/anonymous_timeline?max_id=1977633786').then(function(res){
 		this.arr2=res.body.items;
   		this.title=res.body.items[0].status.card.title;
   		this.subtitle=res.body.items[0].status.card.subtitle;
   		this.img=res.body.items[0].status.card.image.large.url;
		console.log(res.body.items[0].status.card)
  	})
  }
}
</script>

<style>
#focus{
	margin-top: 30px;
}
	li img{
		display: block;
		float: left;
		width:40px;
		height:40px;
		border-radius:50%;
	}
	.desc{
		height:40px;
		width: 325px;
		margin-left: 20px;
	}
	.userinfo{		
		
		float: left;
	}
	strong{
		margin: 0;
		padding: 0;
		font-size: 17px;
    line-height: 1;
    color: #494949;
	}
	strong span{
		color: #aaa;
    font-weight: normal;
	}
	.userinfo p{
		padding-left: 5px;
	font-size: 14px;
    margin-top: 6px;
    line-height: 1;
        color: #aaa;
	}
	.feed{
		width:257px;
		height:97px;
		padding: 15px;
    margin: 10px 0 20px;
    border-radius: 2px;
    margin-left: 70px;
    border: solid 1px #d8d8d8;
	}
	.title{
		font-size: 17px;
    font-weight: 500;
    line-height: 1.4;
    color: #494949;
    margin-bottom: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
        -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
	}
	.text{
		    font-size: 12px;
    line-height: 16px;
    color: #aaa;
    width:167px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    float: left;
    -webkit-box-orient: vertical;
	}
	.detail img{
		    width: 75px;
    height: 48px;
   border-radius: 0;
   float: left;
   margin-left: 15px;
	}
	.download-app {
    padding: 0 0 20px 0;
    margin-top: 50px;
    margin-bottom: 30px;
    text-align: center;
    font-size: 15px;
}
.download-app .info {
    margin: 0 auto 15px;
    overflow: hidden;
    text-align: left;
    font-size: 14px;
    display: inline-block;
    color: #111;}
    .download-app .info img {
    float: left;
    margin-right: 12px;
}
.download-app .info strong {
    font-size: 24px;
    font-weight: normal;
    line-height: 28px;
}
.download-app .info .info-content div {
    white-space: pre;
    line-height: 20px;
}
.download-app .info-content {
    overflow: hidden;
}
.download-app .info+a {
    display: block;
    color: #42bd56;
    text-decoration: none;
}
.list-link {
    display: block;
    padding: 15px 0;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    cursor: pointer;
    color: #42bd56;
}
</style>