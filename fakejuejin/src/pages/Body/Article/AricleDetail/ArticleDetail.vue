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
    data(){
        return{
            body:''
        }
    },
    components:{ArticleMain,Tool},
    mounted(){
       this.body=this.$route.query.body
    }
}
</script>

<style>

</style>