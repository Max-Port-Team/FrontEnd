<template>
    <div class="HeaderContainer">
        <Nav />
        <hr v-if="Show()">
        <NavDetail v-if="Show()" />
    </div>
</template>

<script>
import Nav from './components/Nav.vue';
import NavDetail from './components/NavDetail.vue'
export default {
    methods: {
        Show() {
            if (this.$route.path == '/' || this.$route.path.match(/^\/Tag\/((?:[^\/]+?))(?:\/(?=$))?$/i))
                return true;
        }
    },
    components: { Nav,NavDetail }
}
</script>

<style scoped>
    .HeaderContainer{
        width: 100%;
        border: 1px solid black;
    }
</style>