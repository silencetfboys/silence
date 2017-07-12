<template>
    <section id="recommend_feed">
		<div id="section_feed">
			<a href="" class="feed_item"  v-for="item in message">
				<div class="feed_content">
					<img :src="item.target.cover_url" alt="">
					<h3>{{item.title}}</h3>
					<p>{{item.target.desc}}</p>
				</div>
				<div class="author">by&nbsp;<span class="name">{{item.target.author.name}}</span></div>
			</a>
		</div>	
    </section>
</template>

<script>

export default {
  name: 'recommend_feed',
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
#recommend_feed{
	margin-right: -18px;
    margin-left: -18px;
    margin-top: 2px;
    min-height: 480px;
    color: #494949;
}
#recommend_feed a{
	display: block;
    padding: 25px 18px 25px 0;
    margin-left: 18px;
    position: relative;
    color: #494949;
}
#recommend_feed a h3{
	text-align: justify;
    font-size: 17px;
    font-weight: 500;
    line-height: 1.41;
    color: #494949;
    margin-bottom: 6px;
}
#recommend_feed a p{
	text-align: justify;
    color: #aaa;
    font-size: 12px;
    line-height: 1.5;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
}
#recommend_feed .feed_content{
	overflow: hidden;
    margin-bottom: 10px;
}
#recommend_feed .feed_content img{
	width: 25.6%;
    margin-left: 25px;
    float: right;
    max-height:25.6%;
}
#recommend_feed .author{
	font-size: 12px;
    color: #ccc;
    text-align: left;
}
</style>