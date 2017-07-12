<template>
  <div id="movies">
    <MoviesList :message="arr1"></MoviesList>
  </div>
</template>

<script>
import MoviesList from '../components/MoviesList'
	export default {
  		name: 'movies',
  	  	data(){
      		return {
 						arr1:[],		
      		}
  		},
    	components:{
    		MoviesList
  		},
  		mounted(){
	    	this.$http.get("//m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?os=ios&callback=?").then(function(res){
        		this.arr1=res.data;
        		console.log(this.arr1)
      			},function(){
      		});
  		}
}

</script>

<style>
</style>
