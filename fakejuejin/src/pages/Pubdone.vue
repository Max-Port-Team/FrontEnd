<template>
  <div class="pubdone-container">
      <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/1241627457df53f3d00c37668174eef9.svg" alt="">
      <span>发布成功！有了你的分享，稀土掘金会变得更好！</span>
      <div class="share">
          <a class="share-title" @click="goNewArticle">{{$route.query.title}}</a>
          <a href="" class="share-howtoplay">如何玩转稀土掘金社区?点击了解</a>
          <div class="shareto">
              <span style="color:black">分享到:</span>
              <button><i class="iconfont icon-weixin"></i>微信</button>
              <button><i class="iconfont icon-shejiaotubiao-06"></i>微博</button>
              <button><i class="iconfont icon-lianjie"></i> 复制链接</button>
          </div>
      </div>
      <a class="backhome">回到首页</a>
  </div>
</template>

<script>
export default {
    name:'Pubdone',
    methods:{
        goNewArticle(){
            this.$router.replace({name: "articledetail",query:{id:this.$route.query.id}});
            this.$router.go(0)
        }
    }
}
</script>

<style>
.shareto i{
    margin-right: 5px;
}
.shareto button{
    margin-left: 10px;
    border-radius: 14px ;
    border: 1px solid rgb(202, 202, 202);
    width: 100px;
    height: 27px;
    background-color: white;
    text-align: center;
    line-height: 27px;
}
.backhome{
    color: #1e80ff;
}
.share-title{
    cursor: pointer;
    font-size: 25px;
    text-decoration: underline;
}
.share-howtoplay{
    text-decoration: none;
    color: #1e80ff;
}
.share{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: white;
    height: 250px;
    width: 100%;
}
.pubdone-container img{
    width: 120px;
    height: 120px;
}
.pubdone-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 700px;
    height: 600px;
    margin: 0 auto;
    color: rgb(102, 102, 102);
}
@font-face {
  font-family: "iconfont"; /* Project id 3448432 */
  src: url('//at.alicdn.com/t/c/font_3448432_m3amydp7m2.woff2?t=1660975436212') format('woff2'),
       url('//at.alicdn.com/t/c/font_3448432_m3amydp7m2.woff?t=1660975436212') format('woff'),
       url('//at.alicdn.com/t/c/font_3448432_m3amydp7m2.ttf?t=1660975436212') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-lianjie:before {
  content: "\e602";
  color: rgb(24, 168, 252);
}

.icon-weixin:before {
  content: "\e620";
  color: green;
}

.icon-shejiaotubiao-06:before {
  content: "\e641";
  color: red;
}
</style>