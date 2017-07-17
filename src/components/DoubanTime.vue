<template>
  <div id="doubantime">
  	<div id="topimg">
  		<img src="https://img1.doubanio.com/dae/niffler/niffler/images/f47129b8-663b-11e7-9311-0242ac110029.jpg" alt="">
  	</div>
    <div id="ScrollListview">
    	<div class="container">
    		<section class="time_list" v-for="item in columns">
            	<a href="">            	
        			<div class="pic"><img :src="item.poster_url" alt=""><span></span></div>
    				<div class="main">
						<section>
							<img :src="item.authors[0].avatar_url" alt="">
							<div class="list_author">
								<h2>{{item.authors[0].name}}</h2>
								<p>{{item.authors[0].intro}}</p>
							</div>
						</section>
    				<h1>{{item.title}}</h1><p>{{item.intro}}</p><div class="list_price">{{item.price}}元</div></div>
    				<div v-bind:class="{taghot:item.is_hot,tagnew:item.is_new}"> </div>        		
            	</a>
    		</section>
    	</div>
    </div>
  </div>
</template>

<script>

export default {
  		name: 'doubantime',
  	  	data(){
      		return {
 				columns:[],
 				bodyText:[],
      		}
  		},  
  mounted(){
        this.$http.jsonp("https://m.douban.com/rexxar/api/v2/niffler/explore?start=0&count=20&for_mobile=1&ck=null").then(function(res){
            this.columns=res.body.columns
            // console.log(res)
            },function(){
          });
        this.$http.jsonp("https://m.douban.com/rexxar/api/v2/niffler/promos?for_mobile=1&ck=null").then(function(res){
            console.log(res)
            console.log(res.bodyText)
            this.bodyText=res.bodyText
            },function(){
          });            
  }
}
</script>

<style>
#doubantime #topimg img{
	width: 100%;
}
#doubantime #ScrollListview .container{
	margin-top: 4px;
}
#doubantime #ScrollListview .time_list{
    border-bottom: 15px solid #f7f7f7;
    padding: 15px 0 20px;
    background-color: #fff;
    overflow: hidden;
    position: relative;
}
#doubantime #ScrollListview .time_list .pic{
	position: relative;
    float: right;
    width: 100px;
    height: 140px;
    margin: 5px 20px;
}
#doubantime #ScrollListview .time_list .pic img{
	width: 100%;
}
#doubantime #ScrollListview .time_list .main{
	overflow: hidden;
    margin: 0 0 0 20px;
}
#doubantime #ScrollListview .time_list .main h1{
    color: #494949;
    font-size: 17px;
    font-weight: 700;
    margin: 15px 0 8px;	
}
#doubantime #ScrollListview .time_list .main p{
	font-size: 11px;
    line-height: 16px;
    color: #9b9b9b;
    margin: 0 0 20px;
}
#doubantime #ScrollListview .time_list .main .list_price{
	color: #f97927;
}
#doubantime #ScrollListview .time_list .main section img{
	float: left;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    border: 1.5px solid #fff;
}
#doubantime #ScrollListview .time_list .main section{
    padding-bottom: 15px;
    color: #494949;
    position: relative;
    border-bottom: .5px solid #666;
}
#doubantime #ScrollListview .time_list .main section .list_author h2{
	font-size: 13px;
    line-height: 1.5;
    margin: 0;
}
#doubantime #ScrollListview .time_list .main section .list_author p{
	font-size: 11px;
    line-height: 1.3;
    color: #9b9b9b;
    margin: 0;
}
#doubantime #ScrollListview .time_list .tagnew{
	    background: url(data:image/png;base64,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) no-repeat 50%;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 32px;
    z-index: 100;

}
#doubantime #ScrollListview .time_list .taghot{
	background: url(data:image/png;base64,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) no-repeat 50%;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 32px;
    z-index: 100;

}
</style>