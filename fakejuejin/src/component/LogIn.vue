<template>
  <div class="auth-modal-box">
    <form class="auth-form">
      <div class="panfish"></div>
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
              maxlength="20"
              required
              v-model="userName"
              @click="inputFocus"
            />
          </div>
          <div class="input-box">
            <input
              name="loginPassWord"
              autocomplete="off"
              placeholder="请输入密码"
              type="password"
              class="input"
              maxlength="20"
              required
              v-model="password"
              @click="inputFocus"
            />
          </div>
        </div>
        <button class="btn" @click.prevent="submitLogin">登录</button>
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
import SHA256 from "crypto-js/sha256";
export default {
  data() {
    return {
      userName: null,
      password: null,
    };
  },
  methods: {
    submitLogin() {
      if (this.userName && this.password) {
        console.log(this.userName, SHA256(this.password).toString());
        fetch("http://43.156.106.129/api/MaxPort/people/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nickname: this.userName,
            password: SHA256(this.password).toString(),
          }),
        })
          .then((res) => {
            if (res.status == 200) return res.json();
            else {
              alert("用户名或密码错误！");
            }
          })
          .then((res) => {
            window.localStorage.clear();
            window.localStorage.setItem("userName", res.nickname);
            window.localStorage.setItem("userId", res.id);
            window.localStorage.setItem("avatar", res.avatar);
            window.location.href = "/";
          });
      }
    },
    inputFocus(e) {
      e.target.focus();
    },
  },
  mounted(){
    document.querySelector('body').classList.add('stopscroll')
  },
  beforeDestroy(){
    document.querySelector('body').classList.remove('stopscroll')
  }
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
  user-select: all !important;
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