<template>
  <div class="BodyContainer">
      <Article></Article>
      <Article></Article>
      <Article></Article>
  </div>
</template>

<script>
import Article from './Article/Article.vue'
export default {
    name:'Body',
    components:{Article}
}
</script>

<style scoped>

    .BodyContainer{
        display: inline-block;
        width: 600px;
        height: 1000px;
        border: 1px solid black;
    }
</style>