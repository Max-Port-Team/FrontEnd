<template>
  <div class="catalog-container" ref="container" @mousedown="prevent($event)">
    <link
      rel="stylesheet"
      href="//at.alicdn.com/t/font_1473319176_4914331.css"
    />
    <header class="catalog-header" v-if='maxH'>目录</header>
    <ul class="catalog-body" ref="scrollBody">
      <li v-for="(one, key) in catalogList" :key="key">
        <a
          @click="jump(one.id)"
          :style="`textIndent:${(one.getAttribute('h') * 1 - maxH) * 30}px`"
          >{{ one.innerText }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  
  name: "catalog",
  data() {
    return {
      catalogList: [],
      maxH: 0,
    };
  },
  methods: {
    prevent(e){
      e.preventDefault();
      
    }
    ,
    jump(id){
      document.querySelector(`#${id}`).scrollIntoView(top)
    },
    throttle(fnc, time) {
      let flag = true;
      return () => {
        if (flag) {
          flag = false;
          fnc();
          setTimeout(() => {
            flag = true;
          }, time);
        }
      };
    },
  },
  mounted() {
    document.addEventListener("scroll", () => {
      if (window.pageYOffset > 1245) {
        this.$refs.container.className = "catalog-container2";
      }
      if (window.pageYOffset < 1245) {
        this.$refs.container.className = "catalog-container";
      }
    });
    const timer = setInterval(() => {
      const ArticleBody = document.querySelector(".ArticleBody");
      if (ArticleBody.hasChildNodes()) {
        clearInterval(timer);
        for (let i = 6; i >= 1; i--) {
          ArticleBody.querySelectorAll(`h${i}`).forEach((v,k) => {
            v.setAttribute("H", i);
            v.setAttribute("id",`h${i}${k}`);
            this.maxH = i;
          });
        }
        this.catalogList.push(...ArticleBody.querySelectorAll("[H]"));
        let catalogscroll = this.throttle(() => {
          let lis = document
            .querySelector(".catalog-body")
            .querySelectorAll("li");
          this.catalogList.forEach((v, key) => {
            if (
              v.offsetTop+70 <= window.pageYOffset &&
              this.catalogList[key + 1]?.offsetTop+125 >= window.pageYOffset
            ) {
              lis.forEach((v)=>{v.classList.remove('catalog-liborder')})
                lis[key].classList.add('catalog-liborder')
                this.$refs.scrollBody.scrollTop=lis[key].offsetTop-98-this.$refs.scrollBody.clientWidth/2-50;
            }
          });
        }, 10);
        document.addEventListener("scroll", catalogscroll);
      }
    }, 100);
  },
};
</script>

<style scoped>
.catalog-container {
  position: absolute;
  width: 250px;
  max-height: 620px;
  right: -267px;
  top: 870px;
  padding-top: 0px;
  background-color: white;
  z-index: 1000;
}
.catalog-container2 {
  position: fixed;
  width: 250px;
  max-height: 620px;
  margin-left: 915px;
  top: 20px;
  padding-top: 0px;
  background-color: white;
  z-index: 1000;
}
.catalog-header {
  font-weight: 500;
  padding: 20.004px 0;
  margin: 0 15.996px;
  font-size: 16px;
  line-height: 2rem;
  color: #1d2129;
  border-bottom: 1px solid #e4e6eb;
}
.catalog-body {
  max-height: 540px;
  list-style: none;
  overflow-y: scroll;
  scrollbar-width: thin;
}
.catalog-body::-webkit-scrollbar{ 
  width:6px; 
}
.catalog-body::-webkit-scrollbar-thumb{
  height:auto;
  width: 6px;
  border-radius: 3px;
  background-color: rgb(228, 230, 235);
}
.catalog-body li {
  position: relative;
  height: 15px;
  margin-top: 25px;
  border-radius: 1px;
  cursor: pointer;
}
.catalog-liborder {
  border: 2px solid transparent;
  border-left: 4px solid rgb(43, 133, 250);
  color: rgb(43, 133, 250);
}

.catalog-body a {
  position: absolute;
  color: inherit;
  left: 11px;
  height: 30px;
  top: -8px;
  text-indent: 5px;
  line-height: 30px;
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-decoration: none;
  text-overflow: ellipsis;
}
.catalog-body a:hover {
  background-color: rgb(248, 248, 248);
  border-radius: 3px;
}
</style>
