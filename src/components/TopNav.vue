<template>
  <div id="topNav">
      <ul class="quick_nav">
        <li><a href=""><router-link to="/twoMovies01">影院热映</router-link></a></li>
        <li><a href="">豆瓣新碟榜</a></li>
        <li><a href=""><router-link to="/doubantime">豆瓣时间</router-link></a></li>
        <li><a href="https://www.douban.com/doubanapp">使用豆瓣App</a></li>
      </ul>
  </div>
</template>

<script>

export default {
  name: 'topNav',
  data(){
      return {
          
      }
  },
  props:{
  }
  ,
  mounted(){
  }
}
</script>

<style scoped>
.quick_nav{
    overflow: hidden;
    margin: 20px 0 0 0;
    padding-top: 6px;
}
.quick_nav>li{
    float: left;
    width: 50%;
    padding: 3px;
    box-sizing: border-box;
    font-size: 15px;
}
.quick_nav>li>a{
    background-color: #f6f6f6;
    color: #494949;
    display: block;
    text-align: center;
    line-height: 20px;
    padding: 12px 0;
    border-radius: 2px;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
}
</style>