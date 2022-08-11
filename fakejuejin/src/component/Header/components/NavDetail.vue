<template>
    <div id="root">
        <router-link to="/" exact-active-class="active">综合</router-link>
        <!-- <router-link to="/" exact-active-class="active">关注</router-link> -->
        <router-link to="/Tag/BackEnd" exact-active-class="active">后端</router-link>
        <router-link to="/Tag/FrontEnd" exact-active-class="active">前端</router-link>
        <router-link to="/Tag/Android" exact-active-class="active">Android</router-link>
        <router-link to="/Tag/iOS" exact-active-class="active">iOS</router-link>
        <router-link to="/Tag/AI" exact-active-class="active">人工智能</router-link>
        <router-link to="/Tag/Freebie" exact-active-class="active">开发工具</router-link>
        <router-link to="/Tag/Career" exact-active-class="active">代码人生</router-link>
        <router-link to="/Tag/Article" exact-active-class="active">阅读</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #root{
        width: 50%;
        height: 40px;
        position: relative;
        display:flex;
        justify-content:space-between;
        align-items:center;
        left: 22%;
    }
    a {
        display: inline-block;
        text-decoration: none;
        text-decoration-line: none;
        font-size: 15px;
        color: #71777c;
    }
    a:hover{
        color: #007fff;
    }
    .active{
        color: #007fff;
    }
</style>