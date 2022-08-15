<template>
    <div class="SideBarContainer">
        <PersonLikes></PersonLikes>
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
.SideBarContainer {
    width: 250px;
    height: 320px;
    top: 0;
}
</style>
