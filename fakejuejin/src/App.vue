<template>
  <div id="app">
    <Header/>
    <main class="AppMain">
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
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  body{
    background-color: rgb(244, 245, 245);
  }
  .AppMain{
    position: relative;
    width: 900px;
    margin: 10px auto;
  }
  @media screen and (max-width:750px) {
   .SiderBarContainer{
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
