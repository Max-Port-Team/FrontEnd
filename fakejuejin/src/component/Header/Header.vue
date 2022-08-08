<template>
  <div class="HeaderContainer">
      <Nav/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
export default {
    
    components: { Nav }
}
</script>

<style scoped>
    .HeaderContainer{
        width: 100%;
        height: 125px;
        border: 1px solid black;
    }
</style>