<template>
  <div class="HeaderContainer">
      <Nav/>
      <hr>
      <NavDetail/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
import NavDetail from './components/NavDetail.vue'
export default {
    
    components: { Nav,NavDetail }
}
</script>

<style scoped>
    .HeaderContainer{
        width: 100%;
        height: 105px;
        border: 1px solid black;
    }
</style>