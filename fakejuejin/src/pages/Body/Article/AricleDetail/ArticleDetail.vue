<template>
    <div>
        <ArticleMain :body="body"/>
            <Tool/>
    </div>
</template>

<script>
import Tool from './components/Tool.vue'
import ArticleMain from './components/ArticleMain.vue'
// import Catalog from './components/Catalog.vue'
// import Relativity from './components/Relativity.vue'
export default {
    components:{ArticleMain,Tool},
    props:['body'],
    mounted(){
       console.log(this.$route.query.one)
    }
}
</script>

<style>

</style>