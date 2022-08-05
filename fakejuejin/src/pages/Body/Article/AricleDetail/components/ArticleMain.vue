<template>
    <div >
        <main class="ArticleMain">
            <ArticleHead/>
             <ArticleBody :body='body'/>
        </main>   
    </div>

</template>

<script>
import ArticleHead from "./ArticleHead.vue";
import ArticleBody from "./ArticleBody.vue";
export default {
  name: "ArticleMain",
  props:['body'],
  components:{ArticleHead,ArticleBody}
};
</script>

<style>
    .ArticleMain{
        width: 700px;
        height: 1000px;
        border: 1px solid red;
    }
</style>