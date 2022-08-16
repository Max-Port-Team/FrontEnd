<template>
  <div class="auth-modal-box">
    <form class="auth-form">
      <div class="panfish">
        <div class="photo">
          <img v-show="qwq" src="../assets/default.webp" alt="" />
          <!-- <img :src="imgUrl" alt="图片" /> -->
          <!-- <img :src="'../assets/' + imageSrc[0] + '.png'" alt="图片" /> -->
        </div>
        <div class="photo">
          <img v-show="account" src="../assets/account.webp" alt="" />
        </div>
        <div class="photo">
          <img v-show="password" src="../assets/password.webp" alt="" />
        </div>
      </div>
      <i></i>
      <div class="panel">
        <h1 class="title">账密登录</h1>
        <div class="input-group">
          <div class="input-box">
            <input
              name="loginPhoneOrEmail"
              autocomplete="off"
              placeholder="邮箱/手机号（国际号码加区号）"
              class="input"
              maxlength="64"
              @blur="blur"
              @focus="focusAccount"
            />
          </div>
          <div class="input-box">
            <input
              name="loginPassWord"
              autocomplete="off"
              placeholder="请输入密码"
              type="password"
              class="input"
              maxlength="64"
              @blur="blur"
              @focus="focusPassword"
            />
          </div>
        </div>
        <button class="btn">登录</button>
        <div class="prompt-box">
          <span class="clickable">手机登录</span>
          <span class="right clickable">忘记密码</span>
        </div>
      </div>
      <div class="oauth-box">
        <div class="oauth">
          <div class="oauth-bg">
            <img
              data-v-016987d0=""
              title="微博"
              alt="微博"
              src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/fa758ebd6691cf5931bbbed63230327b.svg"
              class="oauth-btn"
            />
          </div>
          <div class="oauth-bg">
            <img
              data-v-016987d0=""
              title="微信"
              alt="微信"
              src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e0ff12435b30910520c9a3aac9b90487.svg"
              class="oauth-btn"
            />
          </div>
          <div class="oauth-bg">
            <img
              data-v-016987d0=""
              title="GitHub"
              alt="GitHub"
              src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/547dd8a9450cd7be39ff97c40a23e794.svg"
              class="oauth-btn"
            />
          </div>
        </div>
      </div>
      <div class="agreement-box">
        注册登录即表示同意<a href="#" target="_blank">用户协议</a>、<a
          href="#"
          target="_blank"
          >隐私政策</a
        >
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      //在vue项目中动态设置图片src时候，默认会当做静态资源处理而不去编译，使用require引入图片即可。
      // imageSrc: ["default", "account", "password"],
      // imgUrl: require("../assets/default.webp"),
      qwq: true,
      account: false,
      password: false,
    };
  },
  methods: {
    blur() {
      console.log("blur");
      this.qwq = true;
      this.account = false;
      this.password = false;
    },
    focusAccount() {
      console.log("focusAccount");
      this.account = true;
      this.qwq = false;
    },
    focusPassword() {
      console.log("focusPassword");
      this.password = true;
      this.qwq = false;
    },
  },
};
</script>

<style scoped>
img {
  border-style: none;
}

a {
  text-decoration: none;
}

.auth-modal-box {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 500;
}

.auth-form {
  position: relative;
  padding: 1.5rem;
  width: 19.875rem;
  max-width: 100%;
  font-size: 0.875rem;
  background-color: #fff;
  border-radius: 2px;
  box-sizing: border-box;
}
.photo {
  position: absolute;
  left: 90px;
  top: -87px;
}
.title {
  font-size: 1.125rem;
  margin: 0 0 1.5rem;
}

.input-group {
  margin-bottom: 0.375rem;
}

.input-box {
  position: relative;
  margin-bottom: 0.6rem;
  display: flex;
}

.input {
  padding: 10px;
  width: 100%;
  border: 1px solid #e9e9e9;
  border-radius: 2px;
  outline: none;
  box-sizing: border-box;
}

.btn {
  width: 100%;
  height: 2.5rem;
  color: #fff;
  background-color: #007fff;
  border-radius: 2px;
  outline: none;
  box-sizing: border-box;
  cursor: pointer;
  margin-top: 5px;
  border: none;
}

.prompt-box {
  margin: 0.75rem 0 0;
  color: #767676;
}

.prompt-box .clickable {
  color: #007fff;
  cursor: pointer;
}

.prompt-box .right {
  float: right;
}

.oauth-box {
  margin-top: 0.9rem;
  line-height: 1.425rem;
  color: #767676;
}

.oauth-box .oauth {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 15px;
}

.oauth-box .oauth-bg {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #f4f8fb;
  display: flex;
  align-items: center;
  justify-content: center;
}

.oauth-box .oauth-btn {
  height: 1.425rem;
  vertical-align: bottom;
  cursor: pointer;
}

.agreement-box {
  margin-top: 1.25rem;
  color: #767676;
}

.agreement-box a {
  color: #007fff;
}
</style>