<template>
    <div class="root">
        <a href="/" class="logo-img"><img src="../../../assets/header-logo.svg" alt="稀土掘金"></a>
        <ul class="nav-list">
            <li>
                <ul class="nav-router-list">
                    <li v-for="link in links" :key="link.id">
                        <router-link :to="link.path">{{link.name}}</router-link>
                    </li>
                    <li><a href="https://juejin.cn/app">APP</a></li>
                    <li><a href="https://juejin.cn/extension">插件</a></li>
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
            links: [
                { id: 0, name: "首页", path: "/" },
                { id: 1, name: "沸点", path: "/" },
                { id: 2, name: "课程", path: "/" },
                { id: 3, name: "直播", path: "/" },
                { id: 4, name: "活动", path: "/" },
                { id: 5, name: "商城", path: "/" },
                // { id: 6, name: "APP", path: "/APP" },
                // { id: 7, name: "插件", path: "/" },
            ],
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
        position: relative;
        align-items: center;
        justify-content: center;
        width:5rem;
    }
    .nav-router-list>li a::before {
        content: "";
        width: 0;
        height: 3px;
        position: absolute;
        background: #007fff;
        top: 100%;
        right: 50%;
        transition: all .5s;
    }

    .nav-router-list>li a:hover::before {
        width: 100%;
        right: 0;

    }
    .nav-router-list li a{
        display:inline-block;
        text-decoration: none;
        text-decoration-line: none;
        color: rgb(81, 87, 103);
    }

    .nav-router-list li a:hover {
        color:black;
    }
    .avatar{
        height: 40px;
        width: 40px;
        margin-top:7px;
        margin-right: 20px;
        border-radius: 50%;
    }
</style>