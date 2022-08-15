<template>
  <div class="SideBarContainer">
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
};
</script>

<style scoped>
.SideBarContainer {
  width: 240px;
  height: 640px;
  top: 0;
}
</style>
