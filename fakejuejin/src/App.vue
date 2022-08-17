<template>
  <div id="app">
    <Header />
    <main class="AppMain" ref="AppMain">
      <router-view :key="keybody"></router-view>
      <router-view name="SideBar"></router-view>
    </main>
    <footer class="AppFooter">
      <RollUp />
      <FeedBack />
    </footer>
  </div>
</template>

<script>
import Header from "./component/Header/Header.vue";
import SideBar from "./component/SideBar/SideBar.vue";
import FeedBack from "./component/FeedBack.vue";
import RollUp from "./component/RollUp.vue";
import Body from "./pages/Body/Body.vue";
export default {
  name: "App",
  data() {
    return {
      keybody: 1,
    };
  },
  watch: {
    $route(from, to) {
      this.keybody = Math.random();
      this.$refs.AppMain.style.width = "980px";
    },
  },
  components: {
    Header,
    SideBar,
    RollUp,
    FeedBack,
    Body
  },
  mounted() {
    if (this.$route.path == "/articledetail") {
      this.$refs.AppMain.style.width = "1180px";
    }
    if (this.$route.path == "/user/profile") {
      this.$refs.AppMain.style.width = "1180px";
    }
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: -apple-system, system-ui, Segoe UI, Roboto, Ubuntu, Cantarell,
    Noto Sans, sans-serif, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC",
    "Hiragino Sans GB", "Microsoft YaHei", Arial;
}
body {
  background-color: rgb(244, 245, 245);
}
.AppMain {
  display: flex;
  justify-content: space-between;
  width: 980px;
  margin: 10px auto;
}
@media screen and (max-width: 750px) {
  .SiderBarContainer {
    display: none;
  }
  .AppFooter {
    display: none;
  }
  .BodyContainer {
    width: 100% !important;
  }
  .user-container {
    width: 100% !important;
  }
}
.AppFooter {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 1000;
}
.footer_btn {
  margin: 12px 0 0;
  padding: 0;
  width: 40px;
  height: 40px;
  line-height: 1;
  color: #909090;
  background-color: #fff;
  border: 1px solid #f1f1f1;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(50, 50, 50, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.stopscroll{
  overflow: hidden;
}
</style>
