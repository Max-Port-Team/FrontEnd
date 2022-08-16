<template>
  <div class="HeaderContainer" @mousedown="prevent($event)">
    <Nav />
    <!-- <hr v-if="Show()" /> -->
    <NavDetail v-if="Show()" />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import NavDetail from "./components/NavDetail.vue";
export default {
  methods: {
    prevent(e) {
      e.preventDefault();
    },
    Show() {
      if (
        this.$route.path == "/" ||
        this.$route.path.match(/^\/Tag\/((?:[^\/]+?))(?:\/(?=$))?$/i)
      )
        return true;
    },
  },
  components: { Nav, NavDetail },
};
</script>

<style scoped>
.HeaderContainer {
  width: 100%;
  border-bottom: 1px solid #f1f1f1;
  background-color: white;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
}
</style>