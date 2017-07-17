<template>
  <div id="movies">
    <MoviesList :message="arr"></MoviesList>
    <MoviesList02 :message="arr02"></MoviesList02>
    <MoviesList03 :message="arr03"></MoviesList03>
    <Menu></Menu>
  </div>
</template>

<script>
	var api ='//m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?os=ios&callback=?';
	var api02 ='//m.douban.com/rexxar/api/v2/subject_collection/movie_free_stream/items?os=ios&callback=?';
	var api03 ='//m.douban.com/rexxar/api/v2/subject_collection/movie_latest/items?os=ios&callback=?';
	var COUNT = 8, START = 0;
import MoviesList from '../components/MoviesList'
import MoviesList02 from '../components/MoviesList02'
import MoviesList03 from '../components/MoviesList03'
import Menu from '../components/Menu'
	export default {
  		name: 'movies',
  	  	data(){
      		return {
 						arr:[],	
 						arr02:[],	
 						arr03:[]
      		}
  		},
    	components:{
    		MoviesList,MoviesList02,MoviesList03,Menu
  		},
  		mounted(){
	    	this.$http.get(api).then(function(res){
        		this.arr=res.data;
        		console.log(this.arr)
      			},function(){
      		});
//						$.getJSON(api, {
//              start: START,
//              count: COUNT
//          }, function(res) {
//									this.arr=res;
//              	console.log(this.arr);
//          });
				this.$http.get(api02).then(function(res){
        		this.arr02=res.data;
        		console.log(this.arr02)
      			},function(){
      		});
      		this.$http.get(api03).then(function(res){
        		this.arr03=res.data;
        		console.log(this.arr03)
      			},function(){
      		});
  		}
}

</script>

<style>
</style>
