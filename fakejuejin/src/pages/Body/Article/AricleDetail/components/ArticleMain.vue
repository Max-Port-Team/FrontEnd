<template>
    <div >
        <main class="ArticleMain">
            <ArticleHead/>
             <ArticleBody  :body='body'/>
        </main>   
    </div>

</template>

<script>
import ArticleHead from "./ArticleHead.vue";
import ArticleBody from "./ArticleBody.vue";
export default {
  name: "ArticleMain",
  props:['body'],
  components:{ArticleHead,ArticleBody},
  mounted(){
      console.log(this.$refs)
    }
};
</script>

<style>
    .ArticleMain{
        width: 900px;
        height: auto;
    }
    .ArticleMain img{
        display: block;
        max-width: 90%;
        margin: 0 auto;
    }
</style>