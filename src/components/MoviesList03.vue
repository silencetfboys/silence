<template>
    <div id="moviesList03">
    	<h3>{{message.subject_collection.name}}<span><router-link to='/twoMovies03'>更多</router-link></span></h3>
    	<div id="goodsList03">
    		<ul>
    			<li v-for="(item01,key) in message.subject_collection_items" v-if="key<8">
    				<router-link :to="{ path:'/Moviesdetails', query: { id: item01.id } }">
    				<img :src="item01.cover.url" alt="">
    				<p style="display:block;white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">{{item01.title}}</p>
    				<!--<p><span></span>{{item01.rating.value}}</p>-->
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

export default {
  name: 'moviesList03',
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
	::-webkit-scrollbar{display:none;}
	#moviesList03{padding: 0 15px;}
	h3{height: 44px;font-size: 14px;line-height: 44px;text-align: left;}
	h3>span{text-align: right;font-size: 14px;color: #42bd56;float: right;}
	#goodsList03{height: 170px;}
	#goodsList03 ul{height: 100%;overflow-x:scroll;overflow-y:hidden;display:flex;}
	#goodsList03 ul li{float: left;width: 94px;padding: 0 2px;height: 100%;}
	#goodsList03 ul li img{width: 90px;height: 120px;display: block;}
	#scall{padding-left: 14px;}
	#scall span{float: left;}
	#scall .imgs{width: 8px;}
	#scall p{font-size: 13px;float: left;}
	#score{font-size: 8px;color: gray;}
</style>