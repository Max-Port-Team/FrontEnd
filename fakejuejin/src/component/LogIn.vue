<template>
  <div class="auth-modal-box">
    <form class="auth-form">
      <div class="panfish">
        <div class="photo">
          <img v-show="qwq" src="../assets/default.svg" alt="" />
          <!-- <img :src="imgUrl" alt="图片" /> -->
          <!-- <img :src="'../assets/' + imageSrc[0] + '.png'" alt="图片" /> -->
        </div>
        <div class="photo">
          <img v-show="account" src="../assets/account.svg" alt="" />
        </div>
        <div class="photo">
          <img v-show="password" src="../assets/password.svg" alt="" />
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
          <span class="clickable" @click="toEnroll">立即注册</span>
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
              placeholder="邮箱/手机号（国际号码加区号）"
              class="input"
              maxlength="64"
              @blur="blur"
              @focus="focusAccount"
              v-model="accountData"
            />
          </div>
          <div class="input-tip-first">
            <div v-show="accountTip" class="input-tip">输入的账号不能为空</div>
          </div>
          <div class="input-tip-first">
            <div v-show="accountTip1" class="input-tip">
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
              maxlength="64"
              @blur="blur"
              @focus="focusPassword"
              v-model="passwordData1"
            />
          </div>
          <div class="input-tip-first">
            <div v-show="passwordTip1" class="input-tip">
              输入的密码不能为空
            </div>
          </div>
          <div class="input-tip-first">
            <div v-show="passwordTip4" class="input-tip">
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
              maxlength="64"
              @blur="blur"
              @focus="focusPassword"
              v-model="passwordData2"
            />
          </div>
          <div class="input-tip-first">
            <div v-show="passwordTip3" class="input-tip">
              <div>您两次输入的密码不一样</div>
            </div>
          </div>
        </div>
        <button class="btn">立即注册</button>
        <div class="prompt-box">
          <span class="clickable" @click="backEnroll">返回登录</span>
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
        <a href="#" target="_blank">用户协议</a>
        、
        <a href="#" target="_blank"> 隐私政策 </a>
      </div>
      <div v-show="!enroll" class="agreement-box-enroll">
        <input type="radio" @click="toggleChecked($event)" />
        我已经阅读并同意
        <a href="#" target="_blank">用户协议</a>
        和
        <a href="#" target="_blank"> 隐私政策 </a>
      </div>
      <!-- <input type="button" class="test" @click="qwe" /> -->
      <!-- <button type="”button”" @click="qwe">点击输出你想要的测试</button> -->
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
      enroll: true,
      depList: [],
      enterprise: "",
      index: "",
      accountData: "",
      passwordData1: "",
      passwordData2: "",
      accountTip: false,
      accountTip1: false,
      passwordTip1: false,
      passwordTip2: false,
      passwordTip3: false,
      passwordTip4: false,
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
    closeBtn() {
      console.log("closeBtn");
    },
    toEnroll() {
      console.log("toEnroll");
      this.enroll = false;
    },
    backEnroll() {
      console.log("backEnroll");
      this.enroll = true;
    },
    //单选框复选清空功能
    toggleChecked(e) {
      //赋值
      this.enterprise = this.depList[e.target.value];
      //判断重复点击后，取消选中，清空值，重置index
      if (this.index === e.target.value) {
        e.target.checked = !e.target.checked;
        this.enterprise = {};
        this.index = "";
        // console.log(this.enterprise);
      }
      //否则保存当前点击的索引
      else {
        this.index = e.target.value;
        // console.log(this.index);
      }
    },
    qwe() {
      console.log(this.accountData);
      console.log(this.passwordData1);
      console.log(this.passwordData2);
      console.log(this.accountData.length);
    },
  },
  watch: {
    accountData(newVal, oldVal) {
      if (newVal == "") {
        this.accountTip = true;
        this.accountTip1 = false;
      } else {
        this.accountTip = false;
        if (newVal.length > 20) {
          this.accountTip1 = true;
        } else {
          this.accountTip1 = false;
        }
      }
    },
    passwordData1(newVal, oldVal) {
      if (newVal == "") {
        this.passwordTip1 = true;
        this.passwordTip4 = false;
      } else {
        this.passwordTip1 = false;
        if (newVal.length > 20) {
          this.passwordTip4 = true;
        } else {
          this.passwordTip4 = false;
        }
      }
      if (newVal != this.passwordData2) {
        this.passwordTip3 = true;
      } else {
        this.passwordTip3 = false;
      }
    },
    passwordData2(newVal, oldVal) {
      if (newVal == "") {
        this.passwordTip2 = true;
      } else {
        this.passwordTip2 = false;
      }
      if (newVal != this.passwordData1) {
        this.passwordTip3 = true;
      } else {
        this.passwordTip3 = false;
      }
    },
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