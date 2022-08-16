<template>
  <div>
    <!-- <button @click="sendId">sendid</button> -->
    <main class="ArticleMain">
      <ArticleHead :id="$route.query.id" />
      <ArticleBody :body="body" />
    </main>
  </div>
</template>

<script>
import ArticleHead from "./ArticleHead.vue";
import ArticleBody from "./ArticleBody.vue";
export default {
  name: "ArticleMain",
  data() {
    return {
      body: "",
      othser: {},
    };
  },
  props: ["id"],
  components: { ArticleHead, ArticleBody },
  mounted() {
    fetch(
      `http://43.156.106.129/api/MaxPort/article/queryDetailArticle?articleId=${this.id}`
    )
      .then((res) => res.json())
      .then((res) => {
        this.others = res;
        this.body = res.body;
      });
  },
};
</script>

<style>
.ArticleMain {
  width: 900px;
  height: auto;
}
.ArticleMain img {
  display: block;
  max-width: 90%;
  margin: 0 auto;
}
</style> 