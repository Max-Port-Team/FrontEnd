<template>
  <div class="author">
    <div class="user-item">
      <img :src="this.avatar" alt="">
      <div class="username">{{this.authorName}}</div>
    </div>
    <div class="stat-item">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" class="zan" data-v-71f2d09e=""
        data-v-25b8648c="">
        <g fill="none" fill-rule="evenodd" transform="translate(0 .57)" data-v-71f2d09e="" data-v-25b8648c="">
          <ellipse cx="12.5" cy="12.57" fill="#E1EFFF" rx="12.5" ry="12.57" data-v-71f2d09e="" data-v-25b8648c="">
          </ellipse>
          <path fill="#7BB9FF"
            d="M8.596 11.238V19H7.033C6.463 19 6 18.465 6 17.807v-5.282c0-.685.483-1.287 1.033-1.287h1.563zm4.275-4.156A1.284 1.284 0 0 1 14.156 6c.885.016 1.412.722 1.595 1.07.334.638.343 1.687.114 2.361-.207.61-.687 1.412-.687 1.412h3.596c.38 0 .733.178.969.488.239.317.318.728.21 1.102l-1.628 5.645a1.245 1.245 0 0 1-1.192.922h-7.068v-7.889c1.624-.336 2.623-2.866 2.806-4.029z"
            data-v-71f2d09e="" data-v-25b8648c=""></path>
        </g>
      </svg>
      <span class="context">获得点赞 {{ Math.ceil(Math.random() * 100)}}</span>
    </div>
    <div class="stat-item">
      <svg width="25" height="25" viewBox="0 0 25 25" class="icon stat-view-icon" data-v-71f2d09e="" data-v-25b8648c="">
        <g fill="none" fill-rule="evenodd" data-v-71f2d09e="" data-v-25b8648c="">
          <circle cx="12.5" cy="12.5" r="12.5" fill="#E1EFFF" data-v-71f2d09e="" data-v-25b8648c=""></circle>
          <path fill="#7BB9FF"
            d="M4 12.5S6.917 7 12.75 7s8.75 5.5 8.75 5.5-2.917 5.5-8.75 5.5S4 12.5 4 12.5zm8.75 2.292c1.208 0 2.188-1.026 2.188-2.292 0-1.266-.98-2.292-2.188-2.292-1.208 0-2.188 1.026-2.188 2.292 0 1.266.98 2.292 2.188 2.292z"
            data-v-71f2d09e="" data-v-25b8648c=""></path>
        </g>
      </svg>
      <span class="context">文章被阅读 {{this.visit}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'PersonLikes',
  data() {
    return {
      authorName: "",
      avatar: "",
      visit: "",
      author: "",
    }
  },

  props: ["id"],

  mounted() {
    this.getAuthor();
  },

  methods: {
    getAuthor() {
      fetch(
        `http://43.156.106.129/api/MaxPort/article/queryArticleByArticleId?articleId=${this.id}`
      )
      .then((res) => res.json())
      .then(
        (response) => {
          this.authorName = response[0].authorName;
          this.avatar = response[0].avatar;
          if (this.avatar === null) {
            this.avatar = require('../../../assets/5035712059_300x300.png')
          }
          this.author = response[0].author;
          fetch(
            `http://43.156.106.129/api/MaxPort/people/get-sum-visit-by-id?id=${this.author}`
          )
            .then((res) => res.json())
            .then(
              (response) => {
                this.visit = response.visit
                console.log(response)
                console.log(this.author)
              },
              (error) => {
                console.log("请求失败", error.message);
              }
            );
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      )
    },
  }
}
</script>

<style scoped>


.author {
  margin-bottom: 20px;
  background: #fff;
  padding: 1.25rem;
}

.user-item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e4e6eb;
  padding-bottom: 1rem;
}

.user-item > img {
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

.username {
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  min-width: 0;
  margin-left: 16px;
}

.stat-item {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}

.icon, .zan {
  margin-right: 1rem;
}

.context {
  font-size: 0.875rem;
  color: #252933;
  font-weight: 400;
}
</style>