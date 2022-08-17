<template>
  <div class="root">
    <a href="/" class="logo-img"
      ><img src="../../../assets/header-logo.svg" alt="稀土掘金"
    /></a>
    <ul class="nav-list">
      <li>
        <ul class="nav-router-list">
          <li v-for="link in links" :key="link.id">
            <router-link
              :to="link.path"
              exact-active-class="active"
              :class="{ active: IsActive(link.path) }"
              >{{ link.name }}
            </router-link>
          </li>
          <li><a href="https://juejin.cn/app">APP</a></li>
          <li><a href="https://juejin.cn/extension">插件</a></li>
        </ul>
      </li>
      <li>
        <div v-if="loggedIn">
          <img
            class="avatar"
            src="../../../assets/5035712059_300x300.png"
            alt=""
          />
          <NavMenu v-show="showMenu" />
        </div>
        <button v-else class="login-button">登录</button>
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
        { id: 1, name: "沸点", path: "/pins" },
        { id: 2, name: "课程", path: "/course" },
        { id: 3, name: "直播", path: "/live" },
        { id: 4, name: "活动", path: "/events" },
        { id: 5, name: "商城", path: "/shop" },
        // { id: 6, name: "APP", path: "/APP" },
        // { id: 7, name: "插件", path: "/" },
      ],
      showMenu: false,
    };
  },
  computed: {
    loggedIn() {
      if (window.localStorage.getItem("userName")) return 1;
      else return 0;
    },
  },
  methods: {
    changeShowMenu(status) {
      this.showMenu = status;
    },
    IsActive(path) {
      if (
        path == "/" &&
        this.$route.path.match(/^\/Tag\/((?:[^\/]+?))(?:\/(?=$))?$/i)
      ) {
        return true;
      }
    },
  },
  components: { NavMenu },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.root {
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;
  border-bottom: 1px solid #f1f1f1;
}
.logo-img {
  margin-right: 1rem;
  margin-left: 20px;
  margin-top: 6px;
  display: inline-block;
  height: 28px;
  width: auto;
}
.logo-img img {
  height: 22px;
  width: 107px;
  display: block;
}
.nav-list {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}
.nav-list li {
  list-style: none;
}
.nav-router-list {
  width: 75%;
  height: 40px;
  font-size: 14px;
  position: relative;
  display: flex;
  justify-content: space-evenly;
}
.nav-router-list li {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 5rem;
}
.nav-router-list > li a::before {
  content: "";
  width: 0;
  height: 3px;
  position: absolute;
  background: #007fff;
  top: 100%;
  right: 50%;
  border-radius: 5px;
}

.nav-router-list > li a:hover::before {
  width: 40%;
  right: 30%;
}
.active {
  color: #007fff !important;
}
.nav-router-list li a {
  display: inline-block;
  text-decoration: none;
  text-decoration-line: none;
  color: rgb(81, 87, 103);
}

.nav-router-list li a:hover {
  color: black !important;
}
.avatar {
  height: 40px;
  width: 40px;
  margin-top: 7px;
  margin-right: 20px;
  border-radius: 50%;
}
.login-button {
  background: rgba(30, 128, 255, 0.05);
  border: 1px solid rgba(30, 128, 255, 0.3);
  border-radius: 4px;
  padding: 0.3rem 1.5rem;
  color: #007fff;
  line-height: 1.9rem;
  font-size: 14px;
  font-weight: 400;
  margin-right: 20px;
  height: 42px;
  cursor: pointer;
  white-space: nowrap;
}
</style>