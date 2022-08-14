<template>
  <div class="ArticleDetail">
    <ArticleMain :id="$route.query.id" />
    <ArticleHead :id="$route.query.id" />
    <Relativity />
    <Catalog />
    <Tool />
  </div>
</template>

<script>
import Tool from "./components/Tool.vue";
import ArticleMain from "./components/ArticleMain.vue";
import ArticleHead from "./components/ArticleHead.vue";
import Catalog from "./components/Catalog.vue";
import Relativity from "./components/Relativity.vue";
export default {
  data() {
    return {
      id: "",
    };
  },
  components: { ArticleMain, ArticleHead, Tool, Catalog, Relativity },
  mounted() {},
};
</script>

<style>
.ArticleDetail {
  position: relative;
  width: auto;
  height: auto;
  margin: 0 auto;
  background-color: white;
}
</style>