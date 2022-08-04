
<template>
  <div class="BodyContainer">
    <div class="FakeArticle" ref="FakeArticle">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <Article v-for="node in ArticleList" :key="node.id" :one=node></Article>
  </div>
</template>

<script>
import Article from "./Article/Article.vue";
export default {
  name: "Body",
  components: { Article },
  data() {
    return {
      ArticleList: [],
    };
  },
  mounted() {
    fetch("http://localhost:8080/api/MaxPort/article/queryAllArticle")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.ArticleList = res;
        this.$refs.FakeArticle.style.display='none'
      });
  },
};
</script>

<style scoped>
[v-cloak]{
    background-color: red!important;;
}
@keyframes fakeload {
  0% {
    background: linear-gradient(
      90 deg,
      white,
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      white,
    );
  }
  10% {
    background: linear-gradient(
      to right,
      rgb(230, 230, 230),
      white,
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230)
    );
  }
  20% {
    background: linear-gradient(
      to right,
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      white,
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230)
    );
  }
  30% {
    background: linear-gradient(
      to right,
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      white,
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230)
    );
  }
  40% {
    background: linear-gradient(
      to right,
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      white,
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230)
    );
  }
  50% {
    background: linear-gradient(
      to right,
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      white,
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230)
    );
  }
  60% {
    background: linear-gradient(
      to right,
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      white,
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230)
    );
  }
  70% {
    background: linear-gradient(
      to right,
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      white,
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230)
    );
  }
  80% {
    background: linear-gradient(
      to right,
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      white,
      rgb(230, 230, 230),
      rgb(230, 230, 230)
    );
  }
  90% {
    background: linear-gradient(
      to right,
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      white,
      rgb(230, 230, 230)
    );
  }
  90% {
    background: linear-gradient(
      to right,
      white,
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
      rgb(230, 230, 230),
     white
    );
  }
}
.BodyContainer {
  display: inline-block;
  width: 600px;
  height: auto;
  background-color: white;
}
.FakeArticle {
  width: 100%;
  height: 155px;
  border: 1px solid rgb(180, 49, 49);
}
.FakeArticle div {
  animation: fakeload 1s ease infinite ;
  height: 15px;
  background: rgb(230, 230, 230);
  border-radius: 5px;
  margin-top: 20px;
  margin-left: 10px;
}
.FakeArticle :nth-child(1) {
  width: 50%;
}
.FakeArticle :nth-child(2) {
  width: 90%;
}
.FakeArticle :nth-child(3) {
  width: 70%;
}
.FakeArticle :nth-child(4) {
  width: 60%;
}
</style>
