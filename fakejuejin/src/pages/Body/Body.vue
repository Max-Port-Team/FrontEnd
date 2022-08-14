
<template>
  <div class="BodyContainer">
    <div class="FakeArticle" ref="FakeArticle">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <Article v-for="(node,key) in ArticleList" :key="key" :one="node" ></Article>
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
      scrollHeight:0,
      pageYOffset:0
    };
  },
  methods:{
    finiteScroll(){
      let {scrollHeight,pageYOffset}=this;
      if(scrollHeight-pageYOffset<this.clientHeight+800){
          fetch("http://43.156.106.129/api/MaxPort/article/queryAllArticle").then((res)=>{
           return res.json()
          },(err)=>{console.log(err)}).then((res)=>{
            this.ArticleList=[...this.ArticleList,...res]
          },(err)=>{console.log(err)})
      }
    },
    throttle(fnc,time){
        let flag=true
        return ()=>{
          if(flag){
            flag=false
            fnc()
            setTimeout(()=>{flag=true},time)
          }
        }
    }
   },
  computed:{
    clientHeight(){
      return document.documentElement.clientHeight
    }
  }
  ,
  mounted() {
    fetch(`http://43.156.106.129/api/MaxPort/article/${this.$route.params.tag?`queryAllArticleByTag?tag=${this.$route.params.tag}`:'queryAllArticle'}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.ArticleList = res;
        this.$refs.FakeArticle.style.display = "none";
      });      
    let throttleFiniteScroll=this.throttle(this.finiteScroll,1000)
    document.addEventListener("scroll", () => {
      this.scrollHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
      this.pageYOffset=window.pageYOffset;
      throttleFiniteScroll()
    });
   
  },
};
</script>

<style scoped>
[v-cloak] {
  background-color: red !important;
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
      white
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
  100% {
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
  padding-top: 20px;
  cursor: pointer;
  width: 700px;
  height: auto;
  background-color: white;
}
.FakeArticle {
  width: 100%;
  height: 155px;
}
.FakeArticle div {
  animation: fakeload 1s ease infinite;
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
