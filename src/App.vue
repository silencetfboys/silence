<template>
	<div id="app">
		<div id="tab">
			<h1><router-link to="/home">豆瓣</router-link></h1>
		    <ul id="box">
		      <li>
		        <router-link to="/movies">电影</router-link>
		      </li>
		      <li>
		        <router-link to="/book">图书</router-link>
		      </li>
		      <li>
		        <router-link to="/cast">广播</router-link>
		      </li>
		      <li>
		        <router-link to="/group">小组</router-link>
		      </li>
		    </ul>
		    <p><router-link to="/search"><img src="./assets/search.png"></router-link></p>
	   </div>
	    <router-view></router-view>
  </div>
</template>

<script>
	var iScale = 1;
        
    document.write('<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=' + iScale + ',minimum-scale=' + iScale + ',maximum-scale=' + iScale + '">')
    /*动态设置文字大小*/
    var iWidth = document.documentElement.clientWidth;
    document.getElementsByTagName('html')[0].style.fontSize = iWidth / 7.5+ 'px';


export default {
  name: 'app',
<<<<<<< HEAD
 
=======
>>>>>>> master
  methods: {
  	
   }


}
</script>

<style src="./assets/reset.css"></style>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 50px;
}
#tab{width: 100%;height: 8%;position:fixed;top:0;border-bottom: 1px solid #f4f4f4;overflow: hidden;background: #ffffff;z-index: 999;}
h1{width: 30%;height: 100%;float: left;line-height: 50px;font-size: 20px;padding-left: 16px;text-align: left;}
h1 a{color: #05b512;}
#box{width:60%;height:100%;float: left;}
li{float:left;width:25%;height:100%;text-align:left;line-height: 50px;font-size: 13px;}
li:nth-child(1) a{color: #2384e8;}
li:nth-child(2) a{color: #9f7860;}
li:nth-child(3) a{color: #eabc49;}
li:nth-child(4) a{color: #2ab8cc;}
p{width: 10%;height: 100%;float: left;padding-top: 16px;text-align: left;}
p img{width: 70%;}
</style>