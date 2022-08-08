<template>
  <div class="ArticleBody" ref="ArticleBody"></div>
</template>
<script>
import { marked } from "marked";
const posthtml = require("posthtml");
const highlight = require("posthtml-prism");
export default {
  name: "ArticleBody",
  props: ["body"],
  computed: {
    parsebody() {
      return marked.parse(this.body);
    },
  },
  mounted() {
    const timer = setInterval(() => {
      if (this.body) {
        let html = marked.parse(this.body);
        clearInterval(timer);
        posthtml([highlight({ inline: true })])
          .process(html)
          .then((result) => {
            this.$refs.ArticleBody.innerHTML = result.html;
            document.querySelectorAll("pre").forEach((v) => (v.className = "language-"));
          })
          .then(()=>{

          })
      }
    }, 100);
  },

};
</script>

<style scoped>
.ArticleBody {
  width: 90%;
  padding: 5%;
  word-break: break-word;
  line-height: 28px;
  font-weight: 400;
  font-size: 16px;
  overflow-x: hidden;
  color: #333;
}
</style>