<template>
  <div id="app">
    <Header/>
    <main class="AppMain" ref='AppMain'>
      <router-view></router-view>
      <SideBar/>
    </main>
    <footer class="AppFooter">
      <Classifcation/>
      <FeedBack/>
    </footer> 
  </div>
</template>

<script>
import Header from './component/Header/Header.vue'
import SideBar from './component/SideBar/SideBar.vue'
import Classifcation from './component/Classifcation.vue'
import FeedBack from './component/FeedBack.vue'
import Body from './pages/Body/Body.vue'
export default {
  name: 'App',
  components: {
    Header, SideBar,Classifcation,FeedBack,Body
  },
  mounted(){
    if(this.$route.path=='/articledetail'){
        this.$refs.AppMain.style.width='1180px'
    }
    if(this.$route.path=='/'){
        this.$refs.AppMain.style.width='980px'
    }
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    font-family: -apple-system, system-ui, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial
  }
  body{
    background-color: rgb(244, 245, 245);
  }
  .AppMain{
    display: flex;
    justify-content:space-between;
    width: 980px;
    margin: 10px auto;

  }
  @media screen and (max-width:750px) {
   .SiderBarContainer{
     display: none;
   }
   .AppFooter{
     display: none;
   }
   .BodyContainer{
     width: 100%!important;
   }
  }
  .AppFooter{
    position:fixed;
    right: 20px;
    bottom: 20px;
  }
</style>
