<template>
  <div class="UserSidebar">
    <!-- 上层布局 -->
    <div class="achieve">
      <h3>个人成就</h3>
      <div class="list">
        <div class="item">
          <img src="./icons/1.png" /><span>文章被点赞 {{ items.star }}</span>
        </div>
        <div class="item">
          <img src="./icons/2.png" /><span>文章被阅读 {{ items.read }}</span>
        </div>
        <div class="item">
          <img src="./icons/3.png" /><span>掘力值 {{ items.value }}</span>
        </div>
      </div>
    </div>

    <!-- 中层布局 -->
    <div class="fans">
      <div class="fan">
        <span>关注了</span><span>{{ middle.follow }}</span>
      </div>
      <div class="line"></div>
      <div class="fan">
        <span>关注者</span><span>{{ middle.follower }}</span>
      </div>
    </div>

    <!-- 底层布局 -->
    <div class="detail">
      <div class="d-item">
        <span>收藏集</span><span>{{ bottom.collection }}</span>
      </div>
      <div class="d-item">
        <span>关注标签</span><span>{{ bottom.tags }}</span>
      </div>
      <div class="d-item">
        <span>加入于</span><span>{{ bottom.joinin }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserSidebar",
  components: {},
  data() {
    return {
      items: {
        star: 999,
        read: 4312,
        value: 12312,
      },
      middle: {
        follow: 39129,
        follower: "100w",
      },
      bottom: {
        collection: 43,
        tags: 2,
        joinin: "2022-2-14",
      },
    };
  },
  methods: {},
};
</script>

<style scoped>
.UserSidebar {
  width: 250px;
}
.achieve {
  height: 200px;
  width: 100%;
  background-color: white;
  color: rgb(49, 68, 91);
  display: flex;
  flex-direction: column;
}

.achieve h3 {
  padding: 12px;
  border-bottom: 1px solid lightgray;
}

.list {
  flex: 1;

  display: inherit;
  flex-direction: column;
  justify-content: space-evenly;
}

.item {
  height: 30px;
  line-height: 30px;
}
/* 设置 ”掘力值” 标签鼠标滑过效果 */
.item:nth-child(3) {
  cursor: pointer;
}

.item img {
  float: left;
  width: 30px;
  height: 30px;
  margin: 0 10px;
}

/* 中层布局 */
.fans {
  margin-top: 12px;
  height: 70px;
  width: 100%;
  background-color: white;
  color: rgb(49, 68, 91);
  display: flex;
  justify-content: space-evenly;
  align-content: center;
}
.fan {
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;

  transition: all 0.2s ease;
}
.fan:hover {
  color: gray;
}
.line {
  margin-top: 10px;
  width: 0;
  height: 50px;
  border-left: 1px solid lightgray;
}
.fan span {
  margin: 3px 0;
}
.fan span:nth-child(2) {
  font-weight: bold;
}

/* 底层布局 */
.detail {
  margin-top: 12px;

  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.d-item {
  height: 60px;
  line-height: 60px;
  border-top: 1px solid lightgray;
  display: inherit;
  justify-content: space-between;

  cursor: pointer;
  transition: all 0.2s ease;
}
.d-item:hover {
  color: gray;
}
.d-item:nth-child(3) {
  border-bottom: 1px solid lightgray;
}
</style>
