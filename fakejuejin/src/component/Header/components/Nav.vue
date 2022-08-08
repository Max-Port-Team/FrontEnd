<template>
    <div class="root">
        <a href="/" class="logo-img"><img src="../../../assets/header-logo.svg" alt="稀土掘金"></a>
        <ul class="nav-head-list">
            <li v-for="link in links"><a href="/">{{link}}</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: ['首页','沸点','课程','直播','活动','商城','APP','插件']
        }
    }
}
</script>

<style scoped>
    *{
        margin:0;
        padding: 0;
    }
    .root{
        display:flex;
        align-items:center;
        height: 60px;
        width:100%;
    }
    .logo-img{
        margin-right: 1rem;
        margin-left: 24px;
        display: inline-block;
        height: 28px;
        width: auto;
    }
    .logo-img img{
        display:block
    }
    .nav-head-list{
        width: 50%;
        height:40px;
        position: relative;
        display:flex;
        justify-content: space-evenly;
    }
    .nav-head-list li{
        display: flex;
        align-items: center;
        justify-content: center;
        width:3rem;
    }
    .nav-head-list li a{
        display:inline-block;
        text-decoration: none;
        text-decoration-line: none;
        color: black
    }
</style>