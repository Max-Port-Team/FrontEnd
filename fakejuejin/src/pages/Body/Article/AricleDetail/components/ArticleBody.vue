<template>
  

</template>

<script>
export default {
    name:'ArticleBody',
    props:['body'],
    mounted(){
         console.log(this.$route.query.body)
    }
}
</script>

<style>

</style>