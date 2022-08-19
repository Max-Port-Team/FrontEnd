<template>
  <div class="edier-container">
    <header class="edier-header">
      <div class="title-other">
        <input type="text" placeholder="输入文章标题..." class="editer-title" />
        <div class="editer-other">
          <div class="editer-tip">文章将自动保存到草稿箱</div>
          <div class="editer-draftbox">草稿箱</div>
          <div class="editer-publish">发布</div>
          <div>
            <i class="iconfont icon-zhuanhuan"></i>
          </div>
          <img src="../assets/6.webp" class="editer-avatar" />
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
import '../assets/previewcss.css'
export default {
  data() {
    return {
      mdstr: "",
    };
  },
  methods: {
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
          this.$refs.writer.innerHTML
        );
      }, 500);
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
  text-align: center;
  width: 52px;
  height: 32px;
  color: white;
  line-height: 32px;
  border-radius: 3px;
  background-color: rgb(29, 125, 250);
  font-weight: 400;
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