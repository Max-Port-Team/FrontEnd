<template>
  <div class="edier-container" v-if='isPublish'>
    <header class="edier-header">
      <div class="title-other">
        <input
          type="text"
          placeholder="输入文章标题..."
          class="editer-title"
          v-model="title"
        />
        <div class="editer-other">
          <div class="editer-tip">文章将自动保存到草稿箱</div>
          <div class="editer-draftbox">草稿箱</div>
          <div class="editer-publish" @click="showDeatilDody($event)">
            发布
            <div class="publish-deatil" v-if="isshow">
              <header class="deatil-header">发布文章</header>
              <section class="deatil-body" >
                <div class="body-classes">
                  <ul @click="chooseclass($event)">
                    <li v-for="(name,key) in classList" :key='key' ref='classes'>{{name}}</li>
                  </ul>
                </div>
                <div class="body-textarea">
                  <textarea class="textarea" cols="20" rows="5" v-model="intro"></textarea>
                </div>
                
              </section>
              <footer class="detail-footer"> 
                <button class="cancelBut">取消</button>
                <button class="confirmBut" @click="publish">确定并发布</button>
              </footer>
            </div>
          </div>
          <div>
            <i class="iconfont icon-zhuanhuan"></i>
          </div>
          <img :src="src" class="editer-avatar" />
        </div>
      </div>
      <div class="edit-tolls"></div>
    </header>
    <main class="editer-main">
      <div
        class="edit-write"
        contenteditable="true"
        ref="writer"
        tabindex="-1"
      ></div>
      <div class="edit-preview" ref="preview"></div>
    </main>
    <footer class="edit-footer"></footer>
  </div>
</template>

<script>
import { marked } from "marked";
import "../assets/previewcss.css";
export default {
  name: "Editer",
  data() {
    return {
      src:localStorage.getItem('avatar'),
      title: "",
      intro:"",
      class:'',
      isshow:false,
      isPublish:true,
      classList:['后端','前端','Android','iOS','人工智能','开发工具','代码人生','阅读']
    };
  },
  methods: {
    showDeatilDody(e){
      if(e.target.className=='editer-publish'){
        this.isshow=!this.isshow
      }
    }
    ,
    chooseclass(e){
      if(e.target.tagName=='LI'){
        this.$refs.classes.forEach(element => {
          element.classList.remove('class-heightlight');
        });
        e.target.classList.add('class-heightlight');
        this.class= e.target.innerText;
      }
    }
    ,
    antishake(fnc, dalay) {
      let timer = null;
      return () => {
        clearTimeout(timer);
        timer = setTimeout(fnc, dalay);
      };
    },
    asinput() {
      return this.antishake(() => {
        this.$refs.preview.innerHTML = marked.parse(
          this.$refs.writer.innerText
        );
      }, 500);
    },
    publish() {
      fetch("http://localhost:8080/api/MaxPort/article/addArticle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title:this.title,
          tag: this.class,
          intro: this.intro,
          body: this.$refs.writer.innerText,
        }),
      })
      .then(res=> res.json())
      .then(res=>{
        this.isPublish=false;
        this.$router.replace({path:`/pubdone?id=${res.id}&title=${this.title}`});
        this.$router.go(0)
      })
    },
  },
  computed: {
    htmlstr() {
      return marked.parse(this.mdstr);
    },
  },
  mounted() {
    this.$refs.writer.focus();
    this.$refs.writer.addEventListener("input", this.asinput());
  },
};
</script>

<style scoped>
.class-heightlight{
  color: #1d7dfa !important;
  background-color: #e8f3ff !important;
}
.detail-footer{
  position: relative;
  width: 100%;
  height: 59px;
}
.confirmBut{
  position: absolute;
  top: 17px;
  left: 420px;
  width: 80px;
  text-align: center;
  line-height: 25px;
  height: 25px;
  background-color: #1e80ff;
  border-radius: 5px;
  border: none;
  color: rgb(255, 255, 255);
  cursor: pointer;
}
.cancelBut{
  position: absolute;
  width: 80px;
  top: 17px;
  left: 320px;
  text-align: center;
  line-height: 25px;
  height: 25px;
  color: #1e80ff;
  background-color: white;
  border: 1px solid rgb(30, 128, 255);
  border-radius: 5px;
  cursor: pointer;
}
.textarea{
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  height: 100%;
  resize: none;
  border: 1px solid rgb(230, 230, 230);
  background-color: rgb(248, 248, 248);
}
.body-textarea::before{
  content: '篇记摘要:';
  position: absolute;
  top: 0;
  left: -65px;
}
.body-textarea{
  position: relative;
  margin-left: 80px;
  width: 400px;
  
  height: 120px;
}
.body-classes li{
  text-align: center;
  margin-left: 10px;
  white-space: nowrap;
  width: 88px;
  height: 28px;
  background-color: #f4f5f5;
  margin-top: 10px;
  border-radius: 3px;
  color: #86909c;
}
.body-classes ul{
  display: flex;
  margin-left: 5px;
  width: 100%;
  height: 32px;
  flex-wrap: wrap;
  list-style: none;
}
.body-classes::before{
  content:"* 分类:";
  position: absolute;
  left:-35px ;
  top: 7px;
}
.body-classes{
  position: relative;
  width: 400px;
  margin-left:70px;
}
.deatil-body{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 480px;
  border-bottom: 1px solid rgb(216, 214, 214);
  color:black;
  text-align: start;
  font-size: 14px;
}
.deatil-header{
  text-align: start;
  text-indent: 20px;
  line-height: 60px;
  color: #000;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid rgb(216, 214, 214);
}
.publish-deatil::before {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(144, 144, 144);
  border-bottom-style: none;
  border-bottom-width: 0px;
  border-image-outset: 0;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  border-left-color: rgb(221, 221, 221);
  border-left-style: solid;
  border-left-width: 0.8px;
  border-right-color: rgb(144, 144, 144);
  border-right-style: none;
  border-right-width: 0px;
  border-top-color: rgb(221, 221, 221);
  border-top-style: solid;
  border-top-width: 0.8px;
  color: rgb(144, 144, 144);
  content: "";
  cursor: default;
  font-size: 14.4px;
  height: 12px;
  line-height: 17.2833px;
  margin-left: -6px;
  position: absolute;
  right: 60px;
  text-rendering: optimizelegibility;
  top: -7.2px;
  transform: matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0);
  white-space: nowrap;
  width: 12px;
}
.publish-deatil {
  position: absolute;
  left: -430px;
  top: 55px;
  width: 520px;
  height: 600px;
  background-color: white;
  border: 1px solid rgb(216, 214, 214);
  z-index: 1000;
}
.edit-footer {
  bottom: 0;
  width: 100%;
  height: 20px;
  background-color: rgb(255, 255, 255);
}
.edit-preview {
  width: 50%;
  padding: 25px;
  height: 100%;
  background-color: white;
  border-bottom: 1px solid rgb(230, 223, 223);
  box-sizing: border-box;
  overflow-y: scroll;
}
.edit-write {
  box-sizing: border-box;
  outline: none;
  padding: 25px;
  width: 50%;
  height: 100%;
  border-right: 1px solid rgb(230, 223, 223);
  background-color: rgb(246, 247, 248);
  border-bottom: 1px solid rgb(230, 223, 223);
  overflow-y: scroll;
  box-sizing: border-box;
  color: rgb(51, 51, 51);
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  max-width: 800px;
  overflow-x: hidden;
  padding-bottom: 16px;
  padding-left: 18.3667px;
  padding-right: 18.3667px;
  padding-top: 16px;
  text-rendering: optimizelegibility;
  word-break: break-word;
}
.editer-main {
  position: relative;
  display: flex;
  box-sizing: border-box;
  margin-top: -2.5px;
  width: 100%;
  height: calc(100vh - 115px);
  justify-content: center;
  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
  font-feature-settings: normal;
  font-kerning: auto;
  font-language-override: normal;
  font-optical-sizing: auto;
  font-size: 14px;
  font-size-adjust: none;
  font-stretch: 100%;
  font-style: normal;
  font-variant-alternates: normal;
  font-variant-caps: normal;
  font-variant-east-asian: normal;
  font-variant-ligatures: normal;
  font-variant-numeric: normal;
  font-variant-position: normal;
  font-variation-settings: normal;
  font-weight: 400;
}
.editer-publish {
  position: relative;
  text-align: center;
  width: 52px;
  height: 32px;
  color: white;
  line-height: 32px;
  border-radius: 3px;
  background-color: rgb(29, 125, 250);
  font-weight: 400;
  cursor: pointer;
}
.editer-draftbox {
  appearance: button;
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(29, 125, 250);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: solid;
  border-bottom-width: 0.8px;
  border-image-outset: 0;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  border-left-color: rgb(29, 125, 250);
  border-left-style: solid;
  border-left-width: 0.8px;
  border-right-color: rgb(29, 125, 250);
  border-right-style: solid;
  border-right-width: 0.8px;
  border-top-color: rgb(29, 125, 250);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: solid;
  border-top-width: 0.8px;
  box-sizing: border-box;
  color: rgb(29, 125, 250);
  cursor: pointer;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Helvetica Neue,
    PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
  font-feature-settings: normal;
  font-kerning: auto;
  font-language-override: normal;
  font-optical-sizing: auto;
  font-size: 14px;
  font-size-adjust: none;
  font-stretch: 100%;
  font-style: normal;
  font-variant-alternates: normal;
  font-variant-caps: normal;
  font-variant-east-asian: normal;
  font-variant-ligatures: normal;
  font-variant-numeric: normal;
  font-variant-position: normal;
  font-variation-settings: normal;
  font-weight: 400;
  height: 32px;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 0px;
  overflow-x: visible;
  overflow-y: visible;
  padding-bottom: 2px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 2px;
  text-rendering: optimizelegibility;
  text-transform: none;
}
.editer-tip {
  font-size: 14px;
  white-space: nowrap;
  color: #c9cdd4;
  cursor: default;
}
.editer-avatar {
  height: 32px;
  width: 32px;
  border-radius: 50%;
}
.editer-other {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  width: 650px;
}
.editer-title {
  margin: 0;
  padding: 0;
  font-size: 24px;
  font-weight: 500;
  color: #1d2129;
  border: none;
  outline: none;
  height: 100%;
  width: 100%;
}
.edier-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
}
.edier-header {
  width: 100%;
  height: 100px;
  background-color: white;
}
.title-other {
  display: flex;
  align-items: center;
  margin-left: 2.5%;
  width: 95%;
  height: 64px;
}
.edit-tolls {
  width: 100%;
  height: 32px;
  border: 1px solid rgb(221, 221, 221);
}
@font-face {
  font-family: "iconfont"; /* Project id 3448432 */
  src: url("//at.alicdn.com/t/c/font_3448432_vx1bup38bz.woff2?t=1660896573231")
      format("woff2"),
    url("//at.alicdn.com/t/c/font_3448432_vx1bup38bz.woff?t=1660896573231")
      format("woff"),
    url("//at.alicdn.com/t/c/font_3448432_vx1bup38bz.ttf?t=1660896573231")
      format("truetype");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-zhuanhuan:before {
  content: "\e64a";
  color: rgb(194, 186, 186);
}
</style>