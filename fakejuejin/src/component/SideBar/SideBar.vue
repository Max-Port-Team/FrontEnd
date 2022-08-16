<template>
  <div class="SideBarContainer" ref="container">
    <SignIn></SignIn>
    <Advertisement></Advertisement>
    <DownLoad></DownLoad>
  </div>
</template>

<script>
import SignIn from "./components/SignIn.vue";
import Advertisement from "./components/Advertisement.vue";
import DownLoad from "./components/DownLoad.vue";

export default {
  name: "SideBar",
  components: {
    Advertisement,
    DownLoad,
    SignIn,
  },
  mounted() {
    document.addEventListener("scroll", () => {
      if (window.pageYOffset > 960) {
        this.$refs.container.className = "SideBarContainer2";
      }
      if (window.pageYOffset < 960) {
        this.$refs.container.className = "SideBarContainer";
      }
    });
  }
};
</script>

<style scoped>

.SideBarContainer {
  width: 240px;
  height: 640px;
  top: 0;
}
.SideBarContainer2 {
  position: fixed;
  width: 240px;
  height: 640px;
  margin-left: 740px;
  top: 20px;
  z-index: 1000;
}
</style>
