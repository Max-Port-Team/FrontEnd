<template>
  <div class="ArticleSideBarContainer" ref="container">
    <PersonLikes :id="$route.query.id"></PersonLikes>
    <DownLoad></DownLoad>
  </div>
</template>

<script>
import PersonLikes from "./components/PersonLikes.vue";
import DownLoad from "./components/DownLoad.vue";

export default {
  name: "ArticleSideBar",
  components: {
  DownLoad,
  PersonLikes
  },
};
</script>

<style scoped>
.ArticleSideBarContainer {
  width: 250px;
  height: 320px;
  top: 0;
}
</style>
