<template>
    <div id="root">
        <router-link to="/">综合</router-link>
        <router-link to="">关注</router-link>
        <router-link to="">后端</router-link>
        <router-link to="">前端</router-link>
        <router-link to="">Android</router-link>
        <router-link to="">iOS</router-link>
        <router-link to="">人工智能</router-link>
        <router-link to="">开发工具</router-link>
        <router-link to="">代码人生</router-link>
        <router-link to="">阅读</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #root{
        width: 50%;
        height: 40%;
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
</style>