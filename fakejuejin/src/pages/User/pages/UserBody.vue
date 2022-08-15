<template>
  <div class="userbody-container">
    <div class="userbody-header">
      <nav class="userbody-nav" @click="addHeightLight($event)">
        <router-link
          v-for="(one, key) in navlist"
          :key="key"
          :to="`/user/${$route.params.userId}/${one}`"
          class="nava"
        >
          <div class="navitem" ref="navitems">{{ one }}</div>
        </router-link>
      </nav>
    </div>
    <div class="userbody-body">
        <div class="FakeArticle" ref="FakeArticle">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>      
      <Article
        v-for="(node, key) in articlelist"
        :key="key"
        :one="node"
        :nickName="nickName"
      ></Article>
    </div>
  </div>
</template>

<script>
import Article from "../../Body/Article/Article.vue";
export default {
  // http://43.156.106.129/api/MaxPort/people/get-detailed-by-id?id=4
  name: "UserBody",
  components: { Article },
  methods: {
    addHeightLight(e) {
      if (e.target.className == "navitem") {
      }
    },
  },
  data() {
    return {
      navlist: ["动态", "文章", "专栏", "沸点", "收藏集", "关注", "赞🔻"],
      articlelist: [],
      nickName: "",
    };
  },
  mounted() {
    fetch(
      `http://43.156.106.129/api/MaxPort/people/get-detailed-by-id?id=${this.$route.params.userId}`
    )
      .then((res) => res.json())
      .then((res) => {
        this.articlelist = res.articleArr;
        this.nickName = res.nickname;
        this.$refs.FakeArticle.style.display = "none";
      });
    this.$refs.navitems.map((item) => {
      if (item.innerText == this.$route.params.type) {
        item.classList.add("heightLight");
      }
    });
  },
};
</script>

<style>
.userbody-container {
  width: 100%;
  height: auto;
  margin-top: 10px;
  background-color: white;
}
.userbody-header {
  width: 100%;
  border-bottom: 1px solid rgb(224, 224, 224);
}
.userbody-nav {
  display: flex;
  width: 70%;
  justify-content: space-evenly;
}
.nava {
  text-decoration: none;
  color: rgb(75, 74, 74);
}
.nava :hover {
  color: rgb(126, 126, 126);
}
.navitem {
  height: 50px;
  width: auto;
  text-align: center;
  line-height: 50px;
}
.heightLight {
  position: relative;
}
.heightLight::before {
  content: "";
  width: 16px;
  height: 3px;
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  top: 47px;
  background-color: rgb(30, 128, 255);
  border-radius: 3px;
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
.FakeArticle {
  padding: 30px;
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