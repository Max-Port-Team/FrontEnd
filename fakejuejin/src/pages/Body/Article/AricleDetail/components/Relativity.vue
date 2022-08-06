<template>
    <div class="Relativity">
        <header class="Relativity-header">相关文章</header>
        
        <div class="Relativity-one" v-for="(a,key) in 5" :key='key'>
            <a >Sentry Web 前端监控 - 官方最佳实践教程 </a>
            <div><span>{{Math.round(Math.random()*200)}}点赞 .</span><span>{{Math.round(Math.random()*100)}}评论</span></div>
        </div>
        
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .Relativity{
        position: absolute;
        width: 210px;
        height: 510px;
        top: 520px;
        right: -265px;
        padding: 20px;
        background-color: white;
    }
    .Relativity-header{
        color: #1d2129;
        font-weight: 500;
        font-size:16px ;
        line-height: 2rem;
        padding-bottom: 10px;
        border-bottom: 1px solid #e4e6eb;
    }
    .Relativity-one{
        margin-top: 15px;
        height: 80px;
    }
    .Relativity-one a{
        line-height: 22px;
        font-size: 14.004px;
        font-weight: 400;
        color: #252933;
    }
    .Relativity-one span{
        font-size:14px;
        line-height: 22px;
        color: #8a919f;
        font-weight: 400;
    }
    .Relativity-one div{
        margin-top: 3px;
    }

</style>