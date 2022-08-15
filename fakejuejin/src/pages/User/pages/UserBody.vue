<template>
  <div class="userbody-container">
    <div class="userbody-header">
       <nav class="userbody-nav">
        <router-link  v-for="(one,key) in navlist" :key=key to='/one' class="nava"><div class="navitem">{{one}}</div></router-link>
       </nav>
    </div>
     
  </div>
</template>

<script>
export default {
// http://43.156.106.129/api/MaxPort/people/get-detailed-by-id?id=4
  name:'UserBody',
  data() {
    return {
      navlist:['动态','文章','专栏','沸点','收藏集','关注','赞🔻']
    }  
  },
}
</script>

<style>
    .userbody-container{
        width: 100%;
        height: 600px;
        margin-top: 10px;
        border: 1px solid red;
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