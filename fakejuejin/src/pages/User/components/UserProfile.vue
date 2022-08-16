<template>
  <div class="ProfileContainer">
    <div class="ProfileHeader shadow">
      <a :href="homePage()">
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="306px"
          height="306px"
          viewBox="0 0 306 306"
          style="enable-background: new 0 0 306 306"
          xml:space="preserve"
        >
          <g>
            <g id="chevron-left">
              <polygon
                points="247.35,35.7 211.65,0 58.65,153 211.65,306 247.35,270.3 130.05,153 		"
              />
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
        返回个人主页
      </a>
    </div>
    <div class="ProfileBody shadow">
      <div class="head">个人资料</div>
      <div class="user-infos">
        <div class="info-input">123</div>
        <div class="avatar-input">456</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: window.localStorage.getItem("userId"),
    };
  },
  methods: {
    homePage() {
      return "./" + window.localStorage.getItem("userId");
    },
  },
};
</script>

<style scoped>
.ProfileContainer {
  position: relative;
  width: 100%;
  font-family: -apple-system, system-ui, Segoe UI, Roboto, Ubuntu, Cantarell,
    Noto Sans, sans-serif, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC",
    "Hiragino Sans GB", "Microsoft YaHei", Arial !important;
}
.shadow {
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
}
.ProfileHeader {
  width: 100%;
  height: 50px;
  background-color: white;
  display: flex;
  align-items: center;
  margin: 24px auto 16px;
  padding-left: 22px;
  box-sizing: border-box;
  z-index: 100;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  position: sticky;
}
a {
  text-decoration: none;
  text-decoration-line: none;
}
.ProfileHeader a {
  color: rgb(81, 87, 103);
}
.ProfileHeader a:hover {
  color: black;
}
.ProfileHeader svg {
  height: 12px;
  width: 15px;
}
.ProfileBody {
  width: 100%;
  position: relative;
  padding: 40px;
  background-color: white;
  box-sizing: border-box;
}
.head {
  font-weight: 600;
  font-size: 20px;
  line-height: 18px;
  color: #333;
  margin-bottom: 20px;
}
.user-infos {
  display: flex;
}
.info-input {
  min-width: 240px;
  width: calc(100% - 450px);
}
.avatar-input {
  padding-left: 75px;
}
</style>