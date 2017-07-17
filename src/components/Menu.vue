<template>
    <div id="menu">
    	<div id="header">分类浏览</div>
    	<div>
    		<ul class="type-list">
                <li><a><router-link to="/menuList">经典</router-link><span></span></a></li>
                <li><a><router-link :to="{ path:'/MenuList', query: { id2: 'unpopular', name:'冷门佳片'} }">冷门佳片</router-link><span></span></a></li>
                <li><a><router-link :to="{ path:'/MenuList', query: { id2: 'score', name:'豆瓣高分电影'} }">豆瓣高分</router-link><span></span></a></li>
                <li><a><router-link :to="{ path:'/MenuList', query: { id2: 'action', name:'动作电影'} }">动作</router-link><span></span></a></li>
                <li><a><router-link :to="{ path:'/MenuList', query: { id2: 'comedy', name:'喜剧电影'} }">喜剧</router-link><span></span></a></li>
                <li><a><router-link :to="{ path:'/MenuList', query: { id2: 'love', name:'爱情电影'} }">爱情</router-link><span></span></a></li>
                <li><a><router-link :to="{ path:'/MenuList', query: { id2: 'mystery', name:'悬疑电影'} }">悬疑</router-link><span></span></a></li>
                <li><a><router-link :to="{ path:'/MenuList', query: { id2: 'horror', name:'恐怖电影'} }">恐怖</router-link><span></span></a></li>
                <li><a><router-link :to="{ path:'/MenuList', query: { id2: 'sci-fi', name:'科幻电影'} }">科幻</router-link><span></span></a></li>
                <li><a><router-link :to="{ path:'/MenuList', query: { id2: 'cure', name:'治愈电影'} }">治愈</router-link><span></span></a></li>
                <li><a><router-link :to="{ path:'/MenuList', query: { id2: 'literature', name:'文艺电影'} }">文艺</router-link><span></span></a></li>
                <li><a><router-link :to="{ path:'/MenuList', query: { id2: 'youth', name:'成长电影'} }">成长</router-link><span></span></a></li>
                <li><a><router-link :to="{ path:'/MenuList', query: { id2: 'animation', name:'动画'} }">动画</router-link><span></span></a></li>
                <li><a><router-link :to="{ path:'/MenuList', query: { id2: 'chinese', name:'华语电影'} }">华语</router-link><span></span></a></li>
                <li><a><router-link :to="{ path:'/MenuList', query: { id2: 'occident', name:'欧美电影'} }">欧美</router-link><span></span></a></li>
                <li><a><router-link :to="{ path:'/MenuList', query: { id2: 'korea', name:'韩国电影'} }">韩国</router-link><span></span></a></li>
                <li><a><router-link :to="{ path:'/MenuList', query: { id2: 'japanese', name:'日本电影'} }">日本</router-link><span></span></a></li>
                <li></li>
            </ul>
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
  name: 'menu',
  data(){
      return {
      }
  },
  props:{
      message:{
      	type:Array,
      	default:function () {
      		return [];
      	}
      }
  },
  mounted(){
  	
  }
   
}

</script>

<style>
	#menu{padding: 0 15px;}
	#header{height: 50px;font-size: 14px;line-height: 50px;text-align: left;}
	.type-list{width: 100%;}
	.type-list li{float: left;width: 49%;height: 34px;font-size: 13px;text-align: left;line-height: 34px;}
	.type-list li{border-top: 1px solid #f7f7f7;}
	.type-list li:nth-child(2n){border-left: 1px solid #f7f7f7;}
	.type-list li a{color: #36c14d;width: 84%;float: left;padding-left: 10px;}
	.type-list span{color: #ccc;float: left;font-weight: bold;display: inline-block;border-right: solid 1px #ccc;border-bottom: solid 1px #ccc;width: .1rem;height: .1rem;transform: rotate(-45deg);margin-top: .3rem;}
	#footer{width: 100%;height: 130px;}
	#footerLeft{width: 45%;height: 80px;float: left;padding: 20px 0 0 95px;box-sizing: border-box;}
	#footerLeft img{width: 50px;}
	#footerRight{width: 55%;height: 80px;float: left;box-sizing: border-box;}
	#footerRight p:nth-child(1){font-size: 25px;padding-top: 20px;text-align: left;}
	#footerRight p:nth-child(2){font-size: 15px;text-align: left;}
	#download{width:100%;height: 40px;line-height: 40px;color: #05B512;font-size: 14px;}
</style>