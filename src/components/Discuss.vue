<template>
  <div id="discuss" onscroll="myFunction()">
    <h2>全部短评({{arr04.total}})</h2>
    <div class="shortContent" v-for="item02 in arr04.interests">
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
	<div id="footer">
		<div id="footerLeft"><img src="../assets/logo.png"></div>
		<div id="footerRight">
			<p>豆瓣</p>
			<p>我们的精神角落</p>
		</div>
		<div id="download">免费下载Android客户端</div>
	</div>
  </div>
</template>

<script>

export default {
  name: 'discuss',
   data(){
      return {
        arr04:[] 
      }
    },
  	mounted(){
	    this.$http.get('//m.douban.com/rexxar/api/v2/movie/'+this.$route.query.id+'/interests?count=20&order_by=hot&start=0&ck=&for_mobile=1').then(function(res){
        	this.arr04=res.data;
        	console.log(this.arr04)
            },function(){
            
        });
      	  
    },
    mothods:{
    	 myFunction:function(){
    	 	console.log(2);
    	 	var sum = this.scrollHeight;  
		        if (sum <= $(this).scrollTop() + $(this).height()) {  
		           console.log(1);  
		        }  
    	 	}
    }
}
</script>

<style>
	#discuss{padding: 0 15px;}
	h2{height: 80px;text-align: left;line-height: 80px;font-size: 20px;}
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
	#footer{width: 100%;height: 130px;}
	#footerLeft{width: 45%;height: 80px;float: left;padding: 20px 0 0 95px;box-sizing: border-box;}
	#footerLeft img{width: 50px;}
	#footerRight{width: 55%;height: 80px;float: left;box-sizing: border-box;}
	#footerRight p:nth-child(1){font-size: 25px;padding-top: 20px;text-align: left;}
	#footerRight p:nth-child(2){font-size: 15px;text-align: left;}
	#download{width:100%;height: 40px;line-height: 40px;color: #05B512;font-size: 14px;}
</style>
