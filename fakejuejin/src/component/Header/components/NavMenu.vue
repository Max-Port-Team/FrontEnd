<template>
  <ul id="root" ref="ullist">
    <li @click="goEdit">
      <svg
        data-v-27d2bf90=""
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="fengwei"
      >
        <path
          data-v-27d2bf90=""
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.3335 13.6696C14.5176 13.6696 14.6668 13.8188 14.6668 14.0029V14.6696C14.6668 14.8537 14.5176 15.0029 14.3335 15.0029H1.66683C1.48273 15.0029 1.3335 14.8537 1.3335 14.6696V14.0029C1.3335 13.8188 1.48273 13.6696 1.66683 13.6696H14.3335Z"
          fill="#86909C"
        ></path>
        <path
          data-v-27d2bf90=""
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.8175 1.52987L9.77386 1.48969C9.51193 1.26901 9.1201 1.28199 8.87345 1.52864L8.40329 1.9988L8.40492 2.00037L7.27453 3.13954L10.5036 6.3751L12.1057 4.77295C12.3656 4.51309 12.3661 4.09193 12.107 3.83138L9.8175 1.52987ZM9.50415 7.3746L6.27569 4.14613L1.33325 9.12694V11.6696L1.33508 11.7194C1.36053 12.0643 1.64846 12.3363 1.99992 12.3363H4.5426L9.50415 7.3746Z"
          fill="#86909C"
        ></path>
      </svg>
      <span>写文章</span>
    </li>
    <li @click="toMainPage">
      <svg
        data-v-27d2bf90=""
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="fengwei"
      >
        <path
          data-v-27d2bf90=""
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.3333 4.33333C11.3333 2.49238 9.84095 1 8 1C6.15905 1 4.66667 2.49238 4.66667 4.33333C4.66667 6.17428 6.15905 7.66667 8 7.66667C9.84095 7.66667 11.3333 6.17428 11.3333 4.33333ZM14 12.6667C14 10.0952 11.8409 8.66667 10 8.66667H6C4.15905 8.66667 2 10.0974 2 12.6667V14.6667C2 15.0349 2.29848 15.3333 2.66667 15.3333H13.3333C13.7015 15.3333 14 15.0349 14 14.6667V12.6667Z"
          fill="#86909C"
        ></path>
      </svg>
      <span>我的主页</span>
    </li>
    <li @click="logout">
      <svg
        data-v-27d2bf90=""
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="fengwei"
      >
        <path
          data-v-27d2bf90=""
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.6667 2.55473C13.0212 3.58347 14.6667 5.93291 14.6667 8.66667C14.6667 12.3486 11.6819 15.3333 8 15.3333C4.3181 15.3333 1.33333 12.3486 1.33333 8.66667C1.33333 5.93291 2.97879 3.58347 5.33333 2.55473V4.04684C3.7392 4.969 2.66667 6.69259 2.66667 8.66667C2.66667 11.6122 5.05448 14 8 14C10.9455 14 13.3333 11.6122 13.3333 8.66667C13.3333 6.69259 12.2608 4.969 10.6667 4.04684V2.55473ZM7.33333 8.66667V1.33333C7.33333 1.14924 7.48257 1 7.66667 1H8.33333C8.51743 1 8.66667 1.14924 8.66667 1.33333V8.66667C8.66667 8.85076 8.51743 9 8.33333 9H7.66667C7.48257 9 7.33333 8.85076 7.33333 8.66667Z"
          fill="#86909C"
        ></path>
      </svg>
      <span>退出</span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goEdit() {
      let routeData = this.$router.resolve({ path: `/editer` });
      window.open(routeData.href, "_blank");
    },
    toMainPage() {
      this.$router.push("/user/" + window.localStorage.userId);
    },
    logout() {
      fetch("http://43.156.106.129/api/MaxPort/people/logout", {
        method: "POST",
        //headers: { "Content-Type": "application/json" },
      }).finally(() => {
        window.localStorage.clear();
        document.location.href = "/";
      });
    },
  },
  mounted() {
    document.addEventListener("click", (e) => {
      if (e.target === this.$el.previousElementSibling) {
        this.$parent.showMenu = !this.$parent.showMenu;
      } else {
        this.$parent.showMenu = false; //点击其他区域关闭
      }
    });
  },
};
</script>

<style scoped>
#root {
  width: 160px;
  right: 20px;
  position: absolute;
  background-color: white;
  border: 1px solid rgba(177, 180, 185, 0.45);
  border-radius: 4px;
  z-index: 2000;
}
li {
  list-style: none;
  cursor: pointer;
  padding: 10px 15px 10px 15px;
}
li:hover {
  background-color: rgb(232, 232, 232);
}
span {
  color: #4e5969;
  padding-left: 15px;
}
</style>