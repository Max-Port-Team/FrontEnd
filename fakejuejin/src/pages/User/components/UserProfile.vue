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
          <button class="save-btn" @click="submit('nameANDpassword')">
            保存修改
          </button>
        </div>
        <div class="avatar-input">
          <div class="avatar-info">
            <div class="avatar-uploader uploader">
              <div class="click-cover" @click="uploadAvatar = !uploadAvatar">
                <i class="add-icon byte-icon">
                  <svg
                    t="1561635709826"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="375017"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      d="M464.883436 464.883436V302.244035A23.732788 23.732788 0 0 1 488.616224 279.209271h46.069529a23.732788 23.732788 0 0 1 23.732788 23.034764v162.639401h162.6394a23.732788 23.732788 0 0 1 23.034765 23.732788v46.069529a23.732788 23.732788 0 0 1-23.034765 23.732788H558.418541v162.6394a23.732788 23.732788 0 0 1-23.732788 23.034765H488.616224a23.732788 23.732788 0 0 1-23.732788-23.034765V558.418541H302.244035A23.732788 23.732788 0 0 1 279.209271 534.685753V488.616224a23.732788 23.732788 0 0 1 23.034764-23.732788z m46.767552 465.581458a418.813906 418.813906 0 1 0-418.813906-418.813906 418.813906 418.813906 0 0 0 418.813906 418.813906z m0 92.837083a511.650988 511.650988 0 1 1 511.650989-511.650989 511.650988 511.650988 0 0 1-511.650989 511.650989z"
                      p-id="375018"
                    ></path>
                  </svg>
                </i>
                <div class="click-text">点击修改头像</div>
              </div>
              <img :src="avatar" alt="" class="lazy avatar" />
              <div class="inputAvatar" v-if="uploadAvatar">
                <input
                  name="avatarURL"
                  autocomplete="off"
                  placeholder="请输入链接..."
                  required
                  v-model="avatar"
                  class="inputURL"
                />
                <button class="btn" @click="submit('avatar')">提交</button>
                <div class="description">
                  支持jpg、png、jpeg格式大小5M以内的图片链接<br /><br />
                  声明：直接使用用户提交的图片网址是非常危险的行为，此处仅为演示功能用，实际开发中不会如此设计
                </div>
              </div>
            </div>
            <div class="title">我的头像</div>
          </div>
        </div>
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
      avatar:
        window.localStorage.getItem("avatar") ||
        require("../../../assets/5035712059_300x300.png"),
      uploadAvatar: false,
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
    //(type:string)
    submit(type) {
      if (this.rePassword != this.password) {
        alert("两次密码不一致！");
      } else {
        let body;
        if (type == "avatar") {
          body = JSON.stringify({ avatar: this.avatar });
        } else {
          body = JSON.stringify({
            nickname: this.userName,
            password: SHA256(this.password).toString(),
          });
        }
        fetch("http://43.156.106.129/api/MaxPort/people/put-user-info", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body,
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
              window.localStorage.setItem("avatar", this.avatar);
              window.location.reload();
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
o .ProfileHeader a:hover {
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
o .info-input {
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
  padding-left: 74px;
}

.avatar-info {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 112px;
}

.avatar-info .uploader {
  width: 90px;
  height: 90px;
}

.avatar-uploader {
  position: relative;
  width: 100%;
  height: 100%;
}

.avatar-uploader .click-cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: rgba(29, 33, 41, 0.5);
  z-index: 2;
  visibility: hidden;
}

.avatar-uploader:hover .click-cover {
  visibility: visible;
  cursor: pointer;
}

.avatar-uploader .click-cover .add-icon {
  font-size: 20px;
}

.byte-icon {
  width: 1em;
  height: 1em;
  display: inline-block;
  vertical-align: middle;
  line-height: 1;
}

svg:not(:root) {
  overflow: hidden;
}

.byte-icon svg {
  width: 100%;
  height: 100%;
  fill: currentColor;
  pointer-events: none;
}

.avatar-uploader .click-cover .click-text {
  font-size: 12px;
  margin-top: 7px;
  line-height: 17px;
  font-weight: 400;
}

.avatar-uploader .avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-position: 50%;
  background-repeat: no-repeat;
}

.lazy {
  position: relative;
  -o-object-fit: cover;
  object-fit: cover;
}

.inputAvatar {
  position: absolute;
  top: 128px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 305px;
  height: 110px;
  flex-wrap: wrap;
  background-color: #f7f7f7;
  border-radius: 5px;
  box-shadow: 0 5px 6px -7px;
}

.inputAvatar .inputURL {
  width: 230px;
  height: 28px;
  border: 1px solid #e9e9e9;
  outline: none;
  box-sizing: border-box;
  background: #fafafa;
}

.inputAvatar .btn {
  width: 47px;
  height: 28px;
  margin-left: 8px;
  color: #fff;
  background-color: #007fff;
  border-radius: 2px;
  outline: none;
  box-sizing: border-box;
  cursor: pointer;
  border: none;
}

.inputAvatar .description {
  padding: 10px;
  color: #86909c;
  font-size: 12px;
  line-height: 17px;
  font-weight: 400;
}

.avatar-info .title {
  color: #1d2129;
  font-weight: 500;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 8px;
}
</style>