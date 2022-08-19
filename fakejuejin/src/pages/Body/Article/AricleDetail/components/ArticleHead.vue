<template>
  <div class="articlehead">
    <div class="articletitle">
      {{ articletitle }}
    </div>
    <div class="xiace">
      <!-- 左侧图片 -->
      <div class="photo">
        <img :src="this.avatar" alt="hh" />
      </div>
      <!-- 左侧文字 -->
      <div style="float: left">
        <div class="abc">
          <div class="id">
            {{ this.authorName }}
          </div>
          <div class="lv">
            <img src="../../../../../assets/12.webp" alt="hh" />
          </div>
        </div>
        <div class="time">{{ articleTime }} · 阅读{{ visit }}</div>
      </div>
      <!-- 右侧 -->
      <button
        class="guanzhu"
        @click="change1"
        @mouseover="isFollow && mouseOver()"
        @mouseleave="isFollow && mouseLeave()"
        :style="guanzhustyle"
      >
        <!-- <span class="icon icon-follow"></span> -->
        <span v-if="!isFollow">{{ textguanzhu }}</span>
        <span v-if="isFollow">{{ textyiguanzhu }}</span>
      </button>
      <!-- <button @click="get1">get1</button> -->
    </div>
  </div>
</template>

<script>
import time from "time.js";
export default {
  name: "ArticleHead",
  data() {
    return {
      articletitle: "", //携手创作，共同成长，8月更文活动奖品大升级！|掘金·日新计划
      textguanzhu: "+关注",
      textyiguanzhu: "√已关注",
      isFollow: false,
      guanzhustyle: "",
      articleTime: "", //2022年07月22日 17:06
      body: "",
      // id: "",
      visit: "",
      authorName: "", //掘金酱
      avatar: "",
    };
  },

  props: ["id"],
  created: function () {
  },
  mounted() {
    this.get1();

  },
  methods: {
    get1() {
      fetch(
          `http://43.156.106.129/api/MaxPort/article/queryArticleByArticleId?articleId=${this.id}`
          // "http://43.156.106.129/api/MaxPort/article/queryDetailArticle?articleId=7"
        )
        .then((res)=>res.json())
        .then(
          (response) => {
            // console.log("请求成功了", response);
            this.articleTime = time(
              new Date(response[0].time),
              "%y年%M月%d日 %h:%m"
            );
            this.articletitle = response[0].title;
            this.visit = response[0].visit;
            this.authorName = response[0].authorName;
            this.avatar = response[0].avatar;
            if (this.avatar === null) {
              this.avatar = require('../../../../../assets/5035712059_300x300.png')
            }
          },
          (error) => {
            console.log("请求失败了", error.message);
          }
        );
    },
    change1() {
      this.isFollow = !this.isFollow;
      if (this.isFollow == true) {
        this.guanzhustyle =
          "color:#515767; background:rgba(81,87,103,.05); bordercolor:rgba(81,87,103,.3)";
      } else {
        this.guanzhustyle =
          "color:#1e80ff; background:rgba(30,128,255,0.05); bordercolor:rgba(30,128,255,0.3)";
      }
    },
    // 移入
    mouseOver() {

      this.textyiguanzhu = "√取消关注";
    },
    // 移出
    mouseLeave() {
      this.textyiguanzhu = "√已关注";
    },
  },
  computed: {
    timeage() {
      return time.ago(new Date(this.articleTime).valueOf());
    },
  },
};
</script>

<style scoped>
.articlehead {
  overflow: hidden;
  padding-top: 20px;
  width: 100%;
  /* height: 170px; */
  /* border: 1px solid red; */
}
.articletitle {
  width: 90%;
  /* height: 90px; */
  /* border: 1px solid purple; */
  margin-left: 5%;
  font-size: 35px;
  font-weight: 600;
  margin-bottom: 10px;
}
.articlehead .xiace {
  overflow: hidden;
}
.articlehead .photo {
  float: left;
  margin-left: 48px;
  width: 52px;
  height: 51px;
  margin-right: 8px;
}
.articlehead .photo img {
  border-radius: 50%;
}
.articlehead .lv {
  float: left;
  margin-left: 2px;
  margin-top: 6px;
  width: 46px;
  height: 15px;
}
.articlehead .id {
  color: #515767;
  font-weight: 500;
  line-height: 2rem;
}
.articlehead .time {
  color: #8a919f;
  margin-top: 2px;
  line-height: 22px;
}
.articlehead .abc {
  display: flex;
  width: 324px;
  height: 23px;
}
.articlehead .guanzhu {
  float: right;
  margin: 5px 30px 0 auto;
  padding: 0 1rem;
  height: 34px;
  font-size: 14px;
  color: #1e80ff;
  background: rgba(30, 128, 255, 0.05);
  border: 1px solid rgba(30, 128, 255, 0.3);
  border-radius: 4px;
  display: flex;
  align-items: center;
  /* position: relative;
  z-index: 1; */
}
.articlehead .guanzhu:hover {
  cursor: pointer;
}
</style>