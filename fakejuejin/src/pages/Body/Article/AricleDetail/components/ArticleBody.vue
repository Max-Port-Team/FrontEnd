<template>
    <div class="ArticleBody" ref='ArticleBody'>
    </div>    
</template>

<script>
import mmd from 'micromarkdown';
export default {
    name:'ArticleBody',
    props:['body'],
    computed:{
        parsebody(){
            return mmd.parse(this.body)
        }
    },
    mounted(){
        new Promise((resolve,rejrct)=>{
            setTimeout(()=>{this.$refs.ArticleBody.innerHTML=this.parsebody;resolve()}) 
        }).then(()=>{this.$refs.ArticleBody.className='ArticleBody' })
    }
}
</script>

<style scoped>
    .ArticleBody{
        width: 100%; 
        letter-spacing: 3px;
        white-space: pre-line;
        padding-left: 10px;
        padding-right: 10px;
    }
</style>