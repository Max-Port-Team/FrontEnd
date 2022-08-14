<template>
  <div class="user-container">
    <UserHeader/>
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
  cursor: pointer;
  width: 700px;
  height: auto;
  margin: 0 auto;
}
</style>