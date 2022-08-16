<template>
    <div class="tools-container">
        <div><i class="iconfont icon-dianzan_kuai"></i></div>
        <div><i class="iconfont icon-duihuaxinxitianchong"></i></div>
        <div><i class="iconfont icon-shoucang"></i></div>
        <div><i class="iconfont icon-zhuanfa"></i></div>
        <span class="cord"></span>
        <div><i class="iconfont icon-jinggao"></i></div>
        <div><i class="iconfont icon-bg-fullscreen"></i></div>
    </div>
</template>

<script>
export default {
 
}
</script>

<style scoped>
.tools-container{
    position: fixed;
    margin-left: -7rem;
    top: 160px;
    z-index: 2;
}
.tools-container div{
    text-align: center;
    color: #8a919f;
    width: 48px;
    height: 48px;
    line-height: 48px;
    background-color: white;
    border-radius: 50%;
    margin-top: 30px;
}
.tools-container div:hover{
        color: rgb(90, 90, 90);
}
.tools-container i{
    font-size: 20px;
}
.cord{
    position: absolute;
    width: 80%;
    height:1px;
    top: 328px;
    background-color: rgb(221, 221, 221);
    left: 10%;
}
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

</style>