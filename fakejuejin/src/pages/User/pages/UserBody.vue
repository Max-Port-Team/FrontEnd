<template>
  <div class="userbody-container">
    <div class="userbody-header">
       <nav class="userbody-nav">
        <router-link  v-for="(one,key) in navlist" :key=key to='/one' class="nava"><div class="navitem">{{one}}</div></router-link>
       </nav>
    </div>
     <div class="userbody-body">
       <Article
      v-for="(node, key) in articlelist"
      :key="key"
      :one="node"
      :nickName="nickName"
    ></Article>
     </div>
  </div>
</template>

<script>
import Article from '../../Body/Article/Article.vue'
export default {
// http://43.156.106.129/api/MaxPort/people/get-detailed-by-id?id=4
  name:'UserBody',
  components:{Article}
  ,
  data() {
    return {
      navlist:['动态','文章','专栏','沸点','收藏集','关注','赞🔻'],
      articlelist:[],
      nickName:''
    }  
  },
  mounted() {
    fetch(`http://43.156.106.129/api/MaxPort/people/get-detailed-by-id?id=${this.$route.params.userId}`)
    .then(res=>res.json())
    .then(res=>{this.articlelist=res.articleArr;this.nickName=res.nickname})
  },
}
</script>

<style>
    .userbody-container{
        width: 100%;
        height: auto;
        margin-top: 10px;
        background-color: white;
    }
    .userbody-header{
       width: 100%;
       border-bottom:1px solid rgb(224, 224, 224);
    }
    .userbody-nav{
      display: flex;
      width: 70%;
      justify-content:space-evenly;
      
    }
    .nava{
      text-decoration: none;
      color: rgb(75, 74, 74);
    }
    .nava :hover{
      color: rgb(126, 126, 126);
    }
    .navitem{
      height: 50px;
      width: auto;
      text-align: center;
      line-height: 50px;
    }
</style>