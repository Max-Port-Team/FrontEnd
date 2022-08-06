<template>
    <div class="ArticleBody" ref='ArticleBody'>
    </div>    
</template>

<script>
import mmd from 'micromarkdown';
export default {
    name:'ArticleBody',
    props:['body'],
    data(){
        return{
        }
    },
    computed:{
        parsebody(){
            return mmd.parse(this.body)
        }
    },
    mounted(){
        const timer=setInterval(()=>{
            if(this.body){this.$refs.ArticleBody.innerHTML=mmd.parse(this.body);clearInterval(timer)}
        },100)
    }
}
</script>

<style scoped>
    .ArticleBody{
        width: 90%; 
        padding: 5%;
        text-indent: 10px;
        letter-spacing: 3px;
        white-space:pre-line;
    }
</style>