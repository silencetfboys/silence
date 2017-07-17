<template>
  <div id="notepart">
    <div id="card">
        <section class="header">
          <h1 class="title">{{this.$route.query.title}}</h1>
          <div class="user_title">
             {{body.author.name}}
<!--              {{type.split('/')[6].slice(0)}} -->
             <span class="timestamp">{{body.create_time}}</span>
          </div>
        </section>
        <div id="note_content">
          <div class="note_body" id="note_body" v-html="body.content">
            
            </div>
            <div v-for="item in photos"><img :src="item.image.large.url" alt=""></div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'notepart',
  data(){
      return {
         body:"",
         type:"",
         photos:[],
         img:'',
      }
  },
  props:{
  }
  ,
  mounted(){
        this.$http.get("https://m.douban.com/rexxar/api/v2/note/"+this.$route.query.id).then(function(res){
           console.log(this.type)
            this.body=res.body
            this.type=res.url
            this.photos=res.body.photos
            console.log(res)
            console.log(this.body.photos)
                      for (var i in this.photos) {
            var obj = this.photos[i];
            console.log(obj.image.large.url)
            $('#note_content').find('img').eq(i).attr('src',obj.image.large.url);
            }            
            },function(){
          });

  }
}
</script>
<style>
#card{
    margin: 0 18px;
  }
.header{
    position: relative;
    margin-bottom: 0;
} 
.header .title{
    margin: 30px 0 5px;
    font-size: 24px;
    line-height: 32px;
    word-break: break-all;
    font-weight: normal;
    overflow: hidden;
}
.header .user_title{
      height: 22px;
    line-height: 26px;
    margin-bottom: 30px;
    color: #494949;
    font-size: 15px;
    line-height: normal;
}
.header .user_title .timestamp{
    color: #ccc;
    margin-left: 5px;
}
.header #note_content #content{
      font-size: 14px;
    color: #aaa;
}
</style>