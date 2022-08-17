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
        <div class="info-input">
          <form>
            <div class="divide"></div>
            <div class="form-item">
              <label for="username" class="form-item-label">用户名</label>
              <input
                type="text"
                placeholder="填写你的用户名"
                v-model="userName"
                name="userName"
                spellcheck="false"
                maxlength="20"
                class="form-input-normal"
                @input="inputCount"
              />
              <span>{{ elemLength(userName) }}/20</span>
            </div>
            <div class="divide"></div>
            <div class="form-item">
              <label for="password" class="form-item-label">密码</label>
              <input
                type="password"
                placeholder="填写密码"
                v-model="password"
                name="passWord"
                spellcheck="false"
                maxlength="20"
                class="form-input-normal"
                @input="inputCount"
              />
              <span>0/20</span>
            </div>
            <div class="divide"></div>
            <div class="form-item">
              <label for="password" class="form-item-label">重复密码</label>
              <input
                type="password"
                placeholder="填写密码"
                value=""
                name="RepeatPassWord"
                spellcheck="false"
                maxlength="20"
                class="form-input-normal"
                @input="inputCount"
                @change="checkPwd"
              />
              <span>0/20</span>
            </div>
            <div class="divide"></div>
          </form>
          <button class="save-btn" @click="submit">保存修改</button>
        </div>
        <div class="avatar-input">456</div>
      </div>
    </div>
  </div>
</template>

<script>
import SHA256 from "crypto-js/sha256";
export default {
  data() {
    return {
      userId: window.localStorage.getItem("userId"),
      userName: window.localStorage.getItem("userName"),
      password: null,
      rePassword: null,
    };
  },
  methods: {
    homePage() {
      return "./" + window.localStorage.getItem("userId");
    },
    elemLength(ele) {
      if (!ele) return 0;
      return ele.length;
    },
    inputCount(e) {
      e.target.nextElementSibling.innerText = e.target.value.length + "/20";
    },
    checkPwd(e) {
      this.rePassword = e.target.value;
      if (this.rePassword != this.password) {
        alert("两次密码不一致！");
      }
    },
    submit() {
      if (this.rePassword != this.password) {
        alert("两次密码不一致！");
      } else {
        fetch("http://43.156.106.129/api/MaxPort/people/put-user-info", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nickname: this.userName,
            password: SHA256(this.password).toString(),
          }),
        })
          .catch((err) => {
            console.log(err);
          })
          .then((res) => {
            if (res.status == 403) {
              alert("登录状态错误!");
              window.localStorage.clear();
              window.location.replace("../");
              return;
            }
            return res.json();
          })
          .then((res) => {
            if (res.status) {
              alert("修改成功!");
              window.localStorage.setItem("userName", this.userName);
            } else {
              alert(res.errmsg);
            }
          });
      }
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
.form-item {
  position: relative;
  width: 78%;
  margin-bottom: 13px;
  white-space: nowrap;
}
.form-item-label {
  width: 60px;
  font-weight: 500;
  font-size: 14px;
  color: #333;
  margin-left: 20px;
  margin-right: 30px;
  display: inline-block;
  text-align: left;
  padding-right: 0;
}
.form-item input {
  resize: none;
  outline: none;
  width: 400px;
  height: 30px;
  padding: 0 12px;
  padding-right: 48px;
  box-shadow: none;
  border: 1px solid #ddd;
  border-radius: 2px;
  transition: border 0.3s;
  color: #1d2129;
  background: #fafafa;
  box-sizing: border-box;
}
.form-item > span {
  font-size: 12px;
  color: #86909c;
  position: absolute;
  right: 10px;
  top: 7px;
}
.divide {
  margin-left: 12px;
  margin-top: 13px;
  margin-bottom: 13px;
  width: 100%;
  border-top: 1px solid #eaeaea;
}
.info-input {
  min-width: 240px;
  width: calc(100% - 450px);
  margin-left: 30px;
}
.save-btn {
  margin-top: 24px;
  margin-left: 110px;
  padding: 7px 20px;
  background-color: #1d7dfa;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 22px;
  color: #fff;
  border: none;
  white-space: nowrap;
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}
.save-btn:hover {
  background-color: #388eff;
}
.avatar-input {
  padding-left: 75px;
}
</style>