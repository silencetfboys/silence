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
            var date=new Date();
            var Year=date.getFullYear();
            var Month=date.getMonth();
            var today=date.getDate();
            // var Year=2017;
            // var Month=7;
            // var today=12;
                    console.log(today)
	    	this.$http.jsonp("https://m.douban.com/rexxar/api/v2/recommend_feed?alt=json&next_date="+Year+"-"+(Month+1)+"-"+(today+1)).then(function(res){
        		this.feeds_arr=res.body.recommend_feeds            
        		console.log(res)
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
