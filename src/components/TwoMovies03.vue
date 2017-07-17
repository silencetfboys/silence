<template>
  <div id="twoMovies03">
  	<h3>{{arr04.subject_collection.name}}</h3>
		<div id="goodsList1">
    		<ul>
    			<li v-for="item01 in arr04.subject_collection_items">
    				<router-link :to="{ path:'/Moviesdetails', query: { id: item01.id } }">
    				<img :src="item01.cover.url" alt="">
    				<p style="display:block;white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">{{item01.title}}</p>
    				<div v-if="item01.rating" id="scall">
    					<span v-for="n in parseInt(item01.rating.value/2)"><img src="../assets/star-full.png" class="imgs"></span>
    					<span v-for="n in 5-parseInt(item01.rating.value/2)"><img src="../assets/star-gray.png" class="imgs"></span>
    					<p>{{item01.rating.value.toFixed(1)}}</p>
    				</div>
    				<div v-if="!item01.rating" id="score">暂无评分</div>
    			</router-link>
    			</li>
    		</ul>
    	</div>
  </div>
</template>

<script>
var api ='//m.douban.com/rexxar/api/v2/subject_collection/movie_latest/items?os=ios&callback=?';
export default {
  name: 'twoMovies03',
  data(){
      return {
        arr04:[]  
      }
  },
  
  		mounted(){
	    	this.$http.get(api).then(function(res){
        		this.arr04=res.data;
        		console.log(this.arr04)
      			},function(){
      		});
      	}
}
</script>

<style>
	#twoMovies03{padding: 0 15px;}
	h3{height: 64px;font-size: 20px;line-height: 64px;text-align: left;}
	#goodsList1{height: 170px;}
	#goodsList1 ul{height: 100%;}
	#goodsList1 ul li{float: left;width: 30%;padding-right: 4%;height: 100%;}
	#goodsList1 ul li:nth-child(3n){padding-right: 0;}
	#goodsList1 ul li img{width: 100%;height: 120px;display: block;}
	#scall{padding-left: 14px;}
	#scall span{float: left;}
	#scall .imgs{width: 8px;height: 8px;}
	#scall p{font-size: 13px;float: left;}
	#score{font-size: 8px;color: gray;}
</style>
