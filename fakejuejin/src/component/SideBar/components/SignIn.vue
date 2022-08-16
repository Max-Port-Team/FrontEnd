<template>
<div class="signin" ref="container">
    <div class="first-line">
        <div class="icon-text">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="icon" data-v-68373e0a="">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M8 2C8 1.72386 7.77614 1.5 7.5 1.5H6.5C6.22386 1.5 6 1.72386 6 2L5.9995 3H3C2.44772 3 2 3.47259 2 4.05556V7H22V4.05556C22 3.47259 21.5523 3 21 3H18V2C18 1.72386 17.7761 1.5 17.5 1.5H16.5C16.2239 1.5 16 1.72386 16 2V3H8V2ZM22 8.5H2V20.9444C2 21.5274 2.44772 22 3 22H21C21.5523 22 22 21.5274 22 20.9444V8.5Z"
                    fill="#FFCF8B" data-v-68373e0a=""></path>
                <rect x="5" y="12" width="3" height="2" rx="1" fill="#FF7D00" data-v-68373e0a=""></rect>
                <rect x="10.5" y="12" width="3" height="2" rx="1" fill="#FF7D00" data-v-68373e0a=""></rect>
                <rect x="5" y="16" width="3" height="2" rx="1" fill="#FF7D00" data-v-68373e0a=""></rect>
                <rect x="10.5" y="16" width="3" height="2" rx="1" fill="#FF7D00" data-v-68373e0a=""></rect>
                <rect x="16" y="12" width="3" height="2" rx="1" fill="#FF7D00" data-v-68373e0a=""></rect>
                <rect x="16" y="16" width="3" height="2" rx="1" fill="#FF7D00" data-v-68373e0a=""></rect>
            </svg>
            <span class="title">{{getTimeState()}}</span>
        </div>
        <button class="signin-btn">
            <span class="btn-text">{{btnText}}</span>
        </button>
    </div>
    <div class="second-line">{{msg}}</div>
</div>
</template>

<script>
export default {
  name:'SignIn',
  data() {
    return {
      msg: "点亮你在社区的每一天",
      btnText: "去签到"
    }
  },
  methods:{
    getTimeState() {
      // 获取当前时间
      let timeNow = new Date();
      // 获取当前小时
      let hours = timeNow.getHours();
      // 设置默认文字
      let state = ``;
      // 判断当前时间段
      if (hours >= 0 && hours <= 10) {
        state = `早上好!`;
      } else if (hours > 10 && hours <= 14) {
        state = `中午好!`;
      } else if (hours > 14 && hours <= 18) {
        state = `下午好!`;
      } else if (hours > 18 && hours <= 24) {
        state = `晚上好!`;
      }
      return state;
    }
  },
  mounted() {
    document.addEventListener("scroll", () => {
      if (window.pageYOffset > 960) {
        this.$refs.container.className = "signin2";
      }
      if (window.pageYOffset < 960) {
        this.$refs.container.className = "signin";
      }
    });
  }
}
</script>

<style scoped>
.signin {
  width: 240px;
  height: 96px;
  margin-bottom: 16px;
  padding: 16px;
  background-color: #fff;
  box-sizing: border-box;
}

.signin2 {
  display: none;
}

.first-line {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.icon-text {
  display: flex;
}

.icon {
  margin-right: 12px;
  margin-top: 2px;
}

.title {
  margin-top: 2px;
  color: #1d2129;
  font-size: 18px;
  font-weight: 500;
}

.signin-btn {
  border: 1px solid #1e80ff;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  height: 32px;
  width: 72px;
  cursor: pointer;
}

.btn-text {
  color: #1e80ff;
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
}

.second-line {
  margin-bottom: 2px;
  margin-left: 36px;
  color: #4e5969;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  align-items: center;
}
</style>