<template>
  <div id="moviesdetails">
    <h3>{{arr04.title}}</h3>
	    <div id="discuss">
	    	<p><span v-for="n in Math.ceil(arr04.rating.value/2)"><img src="../assets/star-full.png" class="imgs"></span>{{arr04.rating.value}}
	    		<span>{{arr04.rating.count}}人评价</span>
	    	</p>
	    </div>
    <div id="detail">
    	<p>{{arr04.durations[0]}}/{{arr04.genres[0]}}/{{arr04.genres[1]}}<span v-for="item in arr04.actors">/{{item.name}}</span>/{{arr04.pubdate[0]}}</p>
    	<p><img :src="arr04.pic.normal"></p>
    </div>
    <div id="look">
    	<p>用APP查看电影资料</p>
    	<div id="font"><sapn id="colors">在哪看过这部电影</sapn><span>{{arr04.vendor_count}}个播放源</span></div>
    	<div id="lookfont"><span class="lookType">想看</span><span class="lookType">看过</span></div>
    </div>
    <div id="introduce">
    	<p>{{arr04.title}}的剧情简介</p>
    	<p>{{arr04.intro}}</p>
    </div>
    <div id="shortDiscuss">
    	<div id="shortTitle">{{arr04.title}}的短评({{arr05.total}})</div>
    		<div class="shortContent" v-for="item02 in arr05.interests">
    			<div class="shortRight" >
    			<ul>
    				<li>
    					<div class="shortLeft">
	    					<img :src="item02.user.avatar" class="imgTitle">
	    					<div class="right">
		    					<p>{{item02.user.name}}<span v-for="n in Math.ceil(item02.rating.value)"><img src="../assets/star-full.png" class="imgs"></span></p>
	    						<br />
	    						<p>{{item02.create_time}}</p>
	    					</div>
    					</div>
    				</li>
    				<li>{{item02.comment}}</li>
    				<li><span><img src="../assets/click.png">{{item02.vote_count}}</span><span>...</span></li>
    			</ul>
    			</div>
    		</div>
    	</div>
    	<div class="more"><router-link :to="{ path:'/Discuss', query: { id: this.$route.query.id } }">查看全部短评</router-link></div>
		    	<div id="moviesDiscuss">
				  	<div id="moviesTitle">{{arr04.title}}的影评({{arr06}})</div>
				  		<div id="titleList">
				  			<ul>
				  				<li v-for="item03 in arr07.reviews">
				  					<div class="MoviesContent">
				  						<div class="listTitle">{{item03.title}}</div>
				  						<div class="moviesName">{{item03.user.name}}<span v-for="n in Math.ceil(item03.rating.value)"><img src="../assets/star-full.png" class="imgs"></span></div>
				  						<div class="moviesWrite">{{item03.abstract}}</div>
				  						<div class="moviesUse">{{item03.useful_count}}有用</div>
				  					</div>
				  				</li>
				  			</ul>
		  				<div class="moreo"><router-link :to="{ path:'/Discuss', query: { id: this.$route.query.id } }">查看全部影评</router-link></div>
			  				<div id="moviesMore">
			  					<h4>了解更多电影信息</h4>
			  						<ul id="moreTitle">
			  							<li><router-link to="/movies">返回电影首页</router-link></li>
			  							<li><router-link to="/twoMovies03">豆瓣高分</router-link></li>
			  							<li><router-link to="/twoMovies02">新片速递</router-link></li>
			  							<li><router-link to="/movies">更多电影分类</router-link></li>
			  						</ul>
			  				</div>
				  		</div>
			  				<div id="footer">
			  					<div id="footerLeft"><img src="../assets/logo.png"></div>
			  					<div id="footerRight">
			  						<p>豆瓣</p>
			  						<p>我们的精神角落</p>
			  					</div>
			  					<div id="download">免费下载Android客户端</div>
			  				</div>
		  			</div>
		  </div>
  	
  	
  </div>
</template>

<script>

export default {
  name: 'moviesdetails',
   data(){
      return {
        arr04:[],
        arr05:[],
        arr06:[],
        arr07:[],
      }
    },
  	mounted(){
	    this.$http.get('//m.douban.com/rexxar/api/v2/movie/'+this.$route.query.id).then(function(res){
        	this.arr04=res.data;
//      	console.log(this.arr04)
            },function(){
            
        });
        this.$http.get('//m.douban.com/rexxar/api/v2/movie/'+this.$route.query.id+'/interests?count=4&order_by=hot&start=0&ck=&for_mobile=1').then(function(res){
        	this.arr05=res.data;
        	console.log(this.arr05)
            },function(){
            
        });
        this.$http.get('//m.douban.com/rexxar/api/v2/movie/'+this.$route.query.id+'/reviews?count=5&order_by=hot&start=0&ck=&for_mobile=1').then(function(res){
        	this.arr06=res.data.total;
        	this.arr07=res.data;
            },function(){
            
        });
      	  
    }
}
</script>

<style>
	#moviesdetails{width: 100%;padding: 0 15px;box-sizing: border-box;}
	h3{width: 100%;height: 40px;line-height: 40px;font-size: 20px;text-align: left;}
	#discuss p{text-align: left;}
	#discuss span{font-size: 12px;color: #c9c9c9;}
	#discuss .imgs{width: 11px;}
	#detail{width: 100%;}
	#detail p{font-size: 12px;color:#494949;letter-spacing: 3px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 10;overflow: hidden;text-align: left;}
	#detail p:nth-child(1){width: 55%;float: left;margin-right: 5%;}
	#detail p:nth-child(2){width: 35%;float: left;margin-left: 5%;}
	#detail p:nth-child(2) img{width: 100%;}
	#look>p{color: #42bd56;text-align: left;font-size: 14px;margin-bottom: 25px;}
	#look #font{height: 37px;border-top: 1px solid #f8f8f8;border-bottom: 1px solid #f8f8f8;line-height: 37px;}
	#font span:nth-child(1){float: left;width: 50%;font-size: 15px;}
	#font #colors{color: #42bd56;}
	#font span:nth-child(2){float: right;width: 50%;font-size: 11px;color: #d9d9d9;}
	#look #lookfont{height: 80px;line-height: 30px;padding-top: 25px;color: #ffb712;}
	.lookType{width: 40%;float: left;border: 1px solid #ffb712;margin: 0 4%;border-radius: 4px;}
	#introduce p:nth-child(1){width: 100%;font-size: 14px;color: #d7d7d7;text-align: left;margin-bottom: 20px;}
	#introduce p:nth-child(2){width: 100%;font-size: 12px;color: #494949;letter-spacing: 2px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 10;overflow: hidden;text-align: left;}
	#shortTitle{width: 100%;height: 53px;line-height: 53px;text-align: left;color: #bdbdbd;}
	/*.shortLeft{width: 15%;}
	.shortLeft img{width: 80%;border-radius: 50%;}
	.shortRight{width: 100%;}
	.shortContent{width: 100%;}*/
	.shortContent{width: 100%;overflow: hidden;}
	.shortRight{width: 100%;}
	.shortLeft{width: 100%;}
	.shortLeft .imgTitle{width: 10%;border-radius: 50%;float: left;}
	.shortRight strong{float: left;}
	.right p>span{float: left;}
	.right p>span .imgs{width: 11px;}
	.right p{text-align: left;}
	.shortRight ul li:nth-child(2){font-size: 14px;padding-left: 10%;width: 100%;box-sizing: border-box;}
	.shortRight ul li:nth-child(2) a{float: left;}
	.shortRight ul li:nth-child(3){padding-left: 10%;}
	.shortRight ul li:nth-child(3) span{width: 48%;float: left;}
	.shortRight ul li:nth-child(3) span:first-child{text-align: left;}
	.shortRight ul li:nth-child(3) span:first-child .imgsp{width: 15px;}
	.shortRight ul li:nth-child(3) span:last-child{text-align: right;}
	.more{height: 60px;line-height: 60px;font-size: 20px;color: #05B512;}
	.moreo{height: 60px;line-height: 60px;font-size: 20px;color: #05B512;}
	h4{font-size: 15px;color: #aaa;text-align: left;}
	#moreTitle{width: 100%;height: 75px;}
	#moreTitle li{width: 50%;float: left;height: 35px;line-height: 35px;box-sizing: border-box;}
	#moreTitle li a{color: #05B512;}
	#moreTitle li:nth-child(1){border-bottom: 0.25px solid #aaa;border-right: 0.25px solid #aaa;}
	#moreTitle li:nth-child(4){border-top: 0.25px solid #aaa;border-left: 0.25px solid #aaa;}
	#moreTitle li:nth-child(2){border-left: 0.25px solid #aaa;border-bottom: 0.25px solid #aaa;}
	#moreTitle li:nth-child(3){border-right: 0.25px solid #aaa;border-top: 0.25px solid #aaa;}
	#moviesTitle{height: 55px;text-align: left;font-size: 20px;color: #bababa;}
	.listTitle{height: 25px;text-align: left;font-size: 14px;}
	.moviesName{height: 18px;text-align: left;font-size: 10px;}
	.moviesName .imgs{width: 11px;}
	.moviesWrite,.moviesUse{text-align: left;font-size: 10px;color: #c1c1c1;padding: 5px 0;}
	#footer{width: 100%;height: 130px;}
	#footerLeft{width: 45%;height: 80px;float: left;padding: 20px 0 0 95px;box-sizing: border-box;}
	#footerLeft img{width: 50px;}
	#footerRight{width: 55%;height: 80px;float: left;box-sizing: border-box;}
	#footerRight p:nth-child(1){font-size: 25px;padding-top: 20px;text-align: left;}
	#footerRight p:nth-child(2){font-size: 15px;text-align: left;}
	#download{width:100%;height: 40px;line-height: 40px;color: #05B512;font-size: 14px;}
</style>
