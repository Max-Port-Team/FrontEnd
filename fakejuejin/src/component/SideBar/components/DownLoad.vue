<template>
<div class="DownLoad">
    <img src="../../../assets/QRcode.png" alt="QRcode">
    <div>
        <div class="headline">{{headline}}</div>
        <div class="desc">{{desc}}</div>
    </div>
</div>
</template>

<script>
export default {
    name:'DownLoad',
    data(){
        return {
            headline: '下载稀土掘金APP',
            desc: '一个帮助开发者成长的社区'
        }
    }
}
</script>

<style scoped>
.DownLoad {
    display: flex;
    align-items: center;
    padding: 12px;
    background-color: #fff;
    border-radius: 2px;
    margin-bottom: 20px;
}

.headline {
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: #1d2129;
}

.desc {
    margin-top: .5rem;
    font-size: 12px;
    line-height: 20px;
    color: #86909c;
}

.DownLoad > img {
    width: 50px;
    height: 50px;
    margin-right: 16px;
}
</style>