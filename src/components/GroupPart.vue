<template>
  <div id="grouppart">
    <p>{{this.$route.query.title}}</p>
    <p>{{abstract}}</p>
  </div>
</template>

<script>

export default {
  name: 'grouppart',
  data(){
      return {
         abstract:"",

      }
  },
  props:{
  }
  ,
  mounted(){
        this.$http.get("https://m.douban.com/rexxar/api/v2/note/"+this.$route.query.id).then(function(res){
            this.abstract=res.body.abstract
            console.log(res)
            console.log(this.$route.query.title)            
            },function(){
          });    
  },
  
}
</script>
<style>
  
</style>