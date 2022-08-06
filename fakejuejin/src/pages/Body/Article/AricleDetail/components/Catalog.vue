<template>
  <div class="catalog-container">
    <link
      rel="stylesheet"
      href="//at.alicdn.com/t/font_1473319176_4914331.css"
    />
    <header class="catalog-header">目录</header>
    <ul class="catalog-body">
      <li v-for="(one, key) in 30" :key="key">
        <a href="">目录{{ key }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@font-face {
  font-family: "iconfont"; /* Project id 3448432 */
  src: url('//at.alicdn.com/t/c/font_3448432_sekyq3fh2l.woff2?t=1659775886942') format('woff2'),
       url('//at.alicdn.com/t/c/font_3448432_sekyq3fh2l.woff?t=1659775886942') format('woff'),
       url('//at.alicdn.com/t/c/font_3448432_sekyq3fh2l.ttf?t=1659775886942') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-shoucang:before {
  content: "\e600";
}

.icon-jinggao:before {
  content: "\e601";
}

.icon-duihuaxinxitianchong:before {
  content: "\e67a";
}

.icon-bg-fullscreen:before {
  content: "\e649";
}

.icon-zhuanfa:before {
  content: "\e628";
}

.icon-dianzan_kuai:before {
  content: "\ec8c";
}



.catalog-container {
  position: absolute;
  width: 250px;
  height: 620px;
  right: -267px;
  top: 1090px;
  padding-top: 0px;
  background-color: white;
  z-index: 1000;
}
.catalog-header {
  font-weight: 500;
  padding: 20.004px 0;
  margin: 0 15.996px;
  font-size: 16px;
  line-height: 2rem;
  color: #1d2129;
  border-bottom: 1px solid #e4e6eb;
}
.catalog-body {
  height: 540px;
  list-style: none;
  overflow: scroll;
}
.catalog-body li {
  position: relative;
  height: 15px;
  margin-top: 25px;
  border-radius: 1px;
  border: 2px solid transparent;
  border-left: 4px solid rgb(43, 133, 250);
}
.catalog-body a {
  position: absolute;
  color: inherit;
  left: 11px;
  height: 30px;
  top: -8px;
  text-indent: 5px;
  line-height: 30px;
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-decoration: none;
  text-overflow: ellipsis;
}
.catalog-body a:hover {
  background-color: rgb(248, 248, 248);
  border-radius: 3px;
}
</style>