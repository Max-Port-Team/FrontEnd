<template>
  <div class="user-container">
    <router-view></router-view>
  </div>
</template>

<script>

import UserHeader from "c:/Users/Lenovo/Desktop/仿掘金官网/fakejuejin/src/pages/User/components/UserHeader.vue"
export default {
  name:"User",
  components:{UserHeader}

};
</script>

<style scoped>
.user-container {
  display: inline-block;
  cursor: pointer;
  width: 700px;
  height: auto;
  background-color: white;
}
</style>