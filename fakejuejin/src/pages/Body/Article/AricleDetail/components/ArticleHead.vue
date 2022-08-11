<template>
  <div class="articlehead">
    <div class="articletitle">
      {{ articletitle }}
    </div>
    <div class="xiace">
      <!-- 左侧图片 -->
      <div class="photo"><img src="../../图片/1.png" alt="hh" /></div>
      <!-- 左侧文字 -->
      <div style="float: left">
        <div class="abc">
          <div class="id">掘金酱</div>
          <div class="lv"><img src="../../图片/2.png" alt="hh" /></div>
        </div>
        <div class="time">2022年07月22日 17:06 · 阅读36240</div>
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
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleHead",
  data() {
    return {
      articletitle: "携手创作，共同成长，8月更文活动奖品大升级！|掘金·日新计划",
      textguanzhu: "+关注",
      textyiguanzhu: "√已关注",
      isFollow: false,
      guanzhustyle: "",
    };
  },
  methods: {
    change1() {
      // if ((this.isFollow = false)) {
      //   this.isFollow = true;
      // } else {
      //   this.isFollow = false;
      // }
      // console.log(this.isFollow);
      this.isFollow = !this.isFollow;
      // this.guanzhucolor = "#515767";
      // this.guanzhubackground = "rgba(81,87,103,.05)";
      // this.guanzhubordercolor = "rgba(81,87,103,.3)";
      if (this.isFollow == true) {
        this.guanzhustyle =
          "color:#515767; background:rgba(81,87,103,.05); bordercolor:rgba(81,87,103,.3)";
      } else {
        this.guanzhustyle =
          "color:#1e80ff; background:rgba(30,128,255,0.05); bordercolor:rgba(30,128,255,0.3)";
      }
      console.log(this.isFollow);
    },
    // 移入
    mouseOver() {
      // this.active = "background-color:black";
      // // 操作dom 获取p标签改变其样式
      // var acps = this.$refs.acp;
      // acps.style.color = "red";
      this.textyiguanzhu = "√取消关注";
    },
    // 移出
    mouseLeave() {
      // this.active = "";
      // this.$refs.acp.style = "";
      // if (this.textyiguanzhu == "已关注") {
      //   this.textyiguanzhu = "已关注";
      // } else {
      //   this.textyiguanzhu = "关注";
      // }
      this.textyiguanzhu = "√已关注";
    },
  },
};
</script>

<style>
.articlehead {
  overflow: hidden;
  padding-top: 20px;
  width: 100%;
  height: 170px;
  /* border: 1px solid red; */
}
.articletitle {
  width: 90%;
  height: 90px;
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