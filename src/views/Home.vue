<template>
  <div id="home">
    <TopNav></TopNav>
    <RecommendFeed :message="feeds_arr"></RecommendFeed>
  </div>
</template>

<script>
import TopNav from '../components/TopNav'
import RecommendFeed from '../components/RecommendFeed'
	export default {
  		name: 'home',
  	  	data(){
      		return {
 				myData:[],
 				feeds_arr:[],		
      		}
  		},
    	components:{
    		TopNav,
    		RecommendFeed,
  		},
  		mounted(){
	    	this.$http.jsonp("https://m.douban.com/rexxar/api/v2/recommend_feed").then(function(res){
        		this.myData =res.body
        		this.feeds_arr=res.body.recommend_feeds
        		console.log(res.body.recommend_feeds)
      			},function(){
      		});
  		}
}

</script>

<style>
#home{
	margin: 0 18px;
    max-width: 650px;
    background: #fff;
    overflow-x: hidden;
}
</style>
