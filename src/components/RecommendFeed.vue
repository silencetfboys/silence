<template>
    <section id="recommend_feed">
		<div id="section_feed"  v-for="item in message">
			<a class="feed_item">
      <router-link :to="{path:'notepart', query: {id:item.target.id,title:item.title}}">
       <!-- v-if="item.target.url.indexOf('note')>0" -->
				<div class="feed_content">
<!-- 					<img :src="item.target.cover_url" alt=""> -->
<div class="cover":style="{backgroundImage: 'url(' + item.target.cover_url+ ')'}" v-if="url=item.target.cover_url"><div style="padding-top: 100%;"></div></div>
					<h3>{{item.title}}</h3>
					<p>{{item.target.desc}}</p>
				</div>
				<div class="author"><span class="name">by&nbsp;{{item.target.author.name}}</span><span class="feed_label">{{item.source_cn}}</span></div>
        </router-link>
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
#recommend_feed .feed_item{
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
#recommend_feed .feed_item{
    border-bottom: 1px solid #e3e3e3;
}
#recommend_feed .feed_content{
	   overflow: hidden;
    margin-bottom: 10px;
}
#recommend_feed .feed_content .cover{
	  width: 25.6%;
    margin-left: 25px;
    float: right;
    background-repeat:no-repeat;
    background-position:center;
    background-size:cover ;
}
#recommend_feed .author{
  position: relative;
}
#recommend_feed .author .name{
	  font-size: 12px;
    color: #ccc;
    position: absolute;
    left:0;
}
#recommend_feed .author .feed_label{
    font-size: 12px;
    color: #ccc;
    position: absolute;
    right:0;
}
</style>