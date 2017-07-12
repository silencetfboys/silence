<template>
    <div id="moviesList">
    	<p>{{message.subject_collection.name}}</p>
    	<div id="goodsLIst">
    		<ul v-for="item01 in message.subject_collection_items">
    			<li><img :src="item01.cover.url" alt=""></li>
    		</ul>
    	</div>
    </div>
</template>

<script>

export default {
  name: 'moviesList',
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
</style>