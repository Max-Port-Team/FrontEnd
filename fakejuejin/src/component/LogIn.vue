<template>
  <div class="auth-modal-box">
    <form class="auth-form">
      <div class="panfish">
        <div class="photo">
          <img v-show="svgStatus == 0" src="../assets/default.svg" alt="" />
          <!-- <img :src="imgUrl" alt="图片" /> -->
          <!-- <img :src="'../assets/' + imageSrc[0] + '.png'" alt="图片" /> -->
        </div>
        <div class="photo">
          <img v-show="svgStatus == 1" src="../assets/account.svg" alt="" />
        </div>
        <div class="photo">
          <img v-show="svgStatus == 2" src="../assets/password.svg" alt="" />
        </div>
      </div>
      <!-- <el-tooltip content="关闭" placement="bottom">
        <el-button
          icon="el-icon-close"
          @click="closeBtn"
          class="close-btn"
          size="mini"
        ></el-button>
      </el-tooltip> -->
      <i @click="closeBtn" class="close-btn iconfont">&#xe668;</i>

      <div v-show="enroll" class="panel">
        <h1 class="title">账密登录</h1>
        <div class="input-group">
          <div class="input-box">
            <input
              name="loginPhoneOrEmail"
              autocomplete="off"
              placeholder="昵称"
              class="input"
              maxlength="20"
              required
              v-model="userName"
              @click="inputFocus"
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
              maxlength="20"
              required
              v-model="password"
              @click="inputFocus"
              @blur="blur"
              @focus="focusPassword"
            />
          </div>
        </div>
        <button class="btn" @click.prevent="submitLogin">登录</button>
        <div class="prompt-box">
          <span class="clickable" @click="enroll = false">立即注册</span>
          <span class="right clickable">忘记密码</span>
        </div>
      </div>
      <div v-show="!enroll" class="panel">
        <h1 class="title">欢迎注册掘金！</h1>
        <div class="input-group">
          <!-- 使用el-form进行深度校验需要重新修改格式 -->
          <!-- <el-form
            :model="ruleForm"
            starus-icon
            :rules="rules"
            ref="ruleForm"
            class="input-box"
          >
            <el-input
              name="loginPhoneOrEmail"
              autocomplete="off"
              placeholder="邮箱/手机号（国际号码加区号）"
              class="input"
              maxlength="64"
              @blur="blur"
              @focus="focusAccount"
              v-model="accountData"
            />
          </el-form> -->
          <div class="input-box">
            <input
              name="loginPhoneOrEmail"
              autocomplete="off"
              placeholder="昵称"
              class="input"
              maxlength="20"
              @click="inputFocus"
              @blur="blur"
              @focus="focusAccount"
              v-model="userName"
            />
          </div>
          <div class="input-tip-first">
            <div v-show="accountTip[0]" class="input-tip">
              输入的账号不能为空
            </div>
          </div>
          <div class="input-tip-first">
            <div v-show="accountTip[1]" class="input-tip">
              输入的账号长度超过20
            </div>
          </div>

          <div class="input-box">
            <input
              name="loginPassWord"
              autocomplete="off"
              placeholder="请输入密码"
              type="password"
              class="input"
              maxlength="20"
              @click="inputFocus"
              @blur="blur"
              @focus="focusPassword"
              v-model="password"
            />
          </div>
          <div class="input-tip-first">
            <div v-show="passwordTip[0]" class="input-tip">
              输入的密码不能为空
            </div>
          </div>
          <div class="input-tip-first">
            <div v-show="passwordTip[3]" class="input-tip">
              输入的密码长度超过20
            </div>
          </div>

          <!-- <div v-show="passwordTip2" class="input-tip2">
              <div></div>
            </div> -->

          <div class="input-box">
            <input
              name="loginPassWord"
              autocomplete="off"
              placeholder="请再次输入密码"
              type="password"
              class="input"
              maxlength="20"
              @click="inputFocus"
              @blur="blur"
              @focus="focusPassword"
              v-model="repeatPassword"
            />
          </div>
          <div class="input-tip-first">
            <div v-show="passwordTip[2]" class="input-tip">
              <div>您两次输入的密码不一样</div>
            </div>
          </div>
        </div>
        <button class="btn" @click.prevent="submitRegister">立即注册</button>
        <div class="prompt-box">
          <span class="clickable" @click="enroll = true">返回登录</span>
          <!-- <span class="right clickable">忘记密码</span> -->
        </div>
      </div>
      <div v-show="enroll" class="oauth-box">
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
      <div v-show="enroll" class="agreement-box">
        登录即表示同意
        <a href="https://juejin.cn/terms" target="_blank">用户协议</a>
        、
        <a href="https://juejin.cn/privacy" target="_blank"> 隐私政策 </a>
      </div>
      <div v-show="!enroll" class="agreement-box">
        <!-- <input type="radio" @click="toggleChecked($event)" /> -->
        注册即表示同意
        <a href="https://juejin.cn/terms" target="_blank">用户协议</a>
        和
        <a href="https://juejin.cn/privacy" target="_blank"> 隐私政策 </a>
      </div>
      <!-- <input type="button" class="test" @click="qwe" /> -->
      <!-- <button type="”button”" @click="qwe">点击输出你想要的测试</button> -->
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
      repeatPassword: null,
      svgStatus: 0,
      enroll: true,
      accountTip: [false, false],
      passwordTip: [false, false, false, false],
    };
  },
  methods: {
    blur() {
      this.svgStatus = 0;
    },
    focusAccount() {
      this.svgStatus = 1;
    },
    focusPassword() {
      this.svgStatus = 2;
    },
    closeBtn() {
      this.$parent.showLoginFrame = false;
    },
    submitLogin() {
      if (this.userName && this.password) {
        fetch("http://localhost:8080/api/MaxPort/people/login", {
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
            if (res.avatar) window.localStorage.setItem("avatar", res.avatar);
            window.location.href = "/";
          });
      }
    },
    submitRegister() {
      if (
        this.userName &&
        this.password &&
        this.password == this.repeatPassword
      ) {
        fetch("http://localhost:8080/api/MaxPort/people/register", {
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
            else if (res.status == 400) {
              alert("用户名被占用！");
            } else alert("注册失败！");
          })
          .then((res) => {
            alert("注册成功！");
            this.enroll = true;
          });
      }
    },
    inputFocus(e) {
      e.target.focus();
    },
  },
  watch: {
    userName(newVal, oldVal) {
      if (newVal == "") {
        this.accountTip = [true, false];
      } else {
        this.accountTip[0] = false;
        if (newVal.length > 20) {
          this.accountTip[1] = true;
        } else {
          this.accountTip[1] = false;
        }
      }
    },
    password(newVal, oldVal) {
      if (newVal == "") {
        this.passwordTip[0] = true;
        this.passwordTip[3] = false;
      } else {
        this.passwordTip[0] = false;
        if (newVal.length > 20) {
          this.passwordTip[3] = true;
        } else {
          this.passwordTip[3] = false;
        }
      }
      if (newVal != this.repeatPassword) {
        this.passwordTip[2] = true;
      } else {
        this.passwordTip[2] = false;
      }
    },
    repeatPassword(newVal, oldVal) {
      if (newVal == "") {
        this.passwordTip[1] = true;
      } else {
        this.passwordTip[1] = false;
      }
      if (newVal != this.password) {
        this.passwordTip[2] = true;
      } else {
        this.passwordTip[2] = false;
      }
    },
  },
  mounted() {
    document.querySelector("body").classList.add("stopscroll");
  },
  beforeDestroy() {
    document.querySelector("body").classList.remove("stopscroll");
  },
};
</script>

<style scoped>
img {
  border-style: none;
}

.test {
  position: absolute;
  right: 0;
  top: 0;
  height: 20px;

  width: 20px;
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
.close-btn {
  float: right;
  cursor: pointer;
  opacity: 0.4;
}
.close-btn:hover {
  opacity: 1;
}
.icon,
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
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
  margin-left: 15px;
  color: #767676;
}
.agreement-box-enroll {
  margin-top: 1.25rem;
  font-size: 12px;
  color: var(--text-error);
  line-height: 1.5;
}

.agreement-box a {
  color: #007fff;
}
.input-tip-first {
  position: relative;
}
.input-tip {
  padding-bottom: 10px;
  padding-left: 20px;
  color: red;
}
.input-tip::after {
  content: "";
  display: block;
  position: absolute;
  top: 2px;
  left: 4px;
  z-index: 8;
  width: 16px;
  height: 16px;
  background-image: url(../assets/icon-error@3x.png);
  background-position: 50% 50%;
  background-size: cover;
}
:deep(.el-button--mini) {
  padding: 2px;
}
</style>