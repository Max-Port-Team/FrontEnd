<template>
    <div class="root">
        <a href="/" class="logo-img"><img src="../../../assets/header-logo.svg" alt="稀土掘金"></a>
        <ul class="nav-list">
            <li>
                <ul class="nav-router-list">
                    <li v-for="link in links"><a href="/">{{link}}</a></li>
                </ul>
            </li>
            <li>
                <div v-if="loggedIn">
                    <img class="avatar" src="../../../assets/5035712059_300x300.png" alt="">
                    <NavMenu v-show="showMenu" />
                </div>
                <button v-else></button>
            </li>
        </ul>
    </div>
</template>

<script>
import NavMenu from "./NavMenu.vue";
export default {
    data() {
        return {
            links: ["首页", "沸点", "课程", "直播", "活动", "商城", "APP", "插件"],
            showMenu: false,
            loggedIn:1
        };
    },
    methods: {
        changeShowMenu(status) {
            this.showMenu=status;
        }
    },
    components: { NavMenu }
}
</script>

<style scoped>
    *{
        margin:0;
        padding: 0;
    }
    .root{
        display:flex;
        align-items:center;
        height: 60px;
        width:100%;
    }
    .logo-img{
        margin-right: 1rem;
        margin-left: 24px;
        display: inline-block;
        height: 28px;
        width: auto;
    }
    .logo-img img{
        display:block
    }
    .nav-list{
        display: flex;
        width: 100%;
        align-items:center;
        justify-content:space-between;
    }
    .nav-list li{
        list-style: none;
    }
    .nav-router-list{
        width: 100%;
        height:40px;
        position: relative;
        display:flex;
        justify-content: space-evenly;
    }
    .nav-router-list li{
        display: flex;
        align-items: center;
        justify-content: center;
        width:5rem;
    }
    .nav-router-list li a{
        display:inline-block;
        text-decoration: none;
        text-decoration-line: none;
        color: black
    }
    .avatar{
        height: 40px;
        width: 40px;
        margin-top:7px;
        margin-right: 20px;
        border-radius: 50%;
    }
</style>