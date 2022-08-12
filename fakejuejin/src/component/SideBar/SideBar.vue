<template>
  <div class="SiderBarContainer">SideBar</div>
</template>

<script>
import UserSidebar from "../../pages/User/components/UserSidebar.vue";
export default {
  name: "SideBar",
  components: { UserSidebar },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.SiderBarContainer {
  width: 250px;
  height: 500px;
  top: 0;

  border: 1px solid black;
}
</style>
