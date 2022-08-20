<template>
  <div class="ArticleContainer" @click="Articledetail" @mousedown="prevent($event)" ref="ArticleContainer">
    <header class="article-header">
      <span id="article-name">{{one.authorName?one.authorName:nickName}}</span>
      <span id="article-timeage">{{ timeage }}</span>
      <span id="article-tag">{{ one.tag }}</span>
    </header>
    <h3 class="article-title">{{ one.title }}</h3>
    <h5 class="article-fake-body">{{strSplit()}}</h5>
    <footer class="article-footer">
        <span id="footer1">{{randowNum1}}</span>
        <span id="footer2">{{randowNum2}}</span>
        <span id="footer3">{{randowNum3}}</span>
        <div id="edit-delete" v-if="$route.params.userId" @click="showEDcontainer($event)">...
          <div id="ed-container" v-if='isShow'>
            <div class="edit" @click="goedit">编辑</div>
            <div class="delete" @click="comfirmDelete">删除</div>
          </div>
        </div>
        
    </footer>
    <img :src='srcrandom' class="article-img" v-if="appear">
  </div>
</template>

<script>
import time from "time.js";
export default {
  name: "Article",
  data() {
    return {
      randowNum1:Math.round(Math.random()*300),
      randowNum2:Math.round(Math.random()*200),
      randowNum3:Math.round(Math.random()*100),
      isShow:false
    };
  },
  props: ["one","nickName"],
  methods:{
    goedit(){
      let routeData = this.$router.resolve({path: `/editer?id=${this.one.id}`});
      window.open(routeData.href, '_blank');
    },
    comfirmDelete(){
      const isConfirm=confirm('删除文章后不可恢复，确定删除吗？');
      if(isConfirm){
        fetch('http://localhost:8080/api/MaxPort/article/deleteArticle',{
          method:'DELETE',
           headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify({
            id:this.one.id
          })
        }).then(()=>{
          this.$refs.ArticleContainer.hidden=true;
        })
      }
    },
    showEDcontainer(e){
      e.stopPropagation();
      this.isShow=!this.isShow
    },
    prevent(e){
      e.preventDefault();

    },
    strSplit(){
      if(this.appear){
        return this.one.intro.slice(0,30) + "..."
      }
      else{
        return this.one.intro.slice(0,45) + "..."
      }
    },
    Articledetail(){
      let routeData = this.$router.resolve({name: "articledetail",query:{id:this.one.id}});
      window.open(routeData.href, '_blank');
    }
  },
  computed: {
    timeage() {
      return time.ago(new Date(this.one.time).valueOf());
    },
    srcrandom(){
      return require('../../../assets/'+Math.round(Math.random()*10)+'.webp');
    },
    appear(){
      return Math.random()>0.6?true:false
    }
  },
  mounted(){
    document.addEventListener("click",()=>{
      this.isShow=false
    })
  }
};
</script>

<style scoped>
.ArticleContainer {
  position: relative;
  padding-top: 20px;

  margin: 0 auto;
  width: 90%;
  height: 140px;
  border-bottom: 1px solid rgb(165, 164, 164);
}
.ArticleContainer:hover{
  background-color: rgb(250, 250, 250);
}
.article-header {
  height: 20px;

}
#article-name {
  font-size: 13px;
  color: #000;
  padding-left: 5px;
  padding-right: 5px;
  border-right: 1px solid rgb(168, 167, 167);
}
#article-timeage {
  line-height: 22px;
  font-size: 13px;
  color: #86909c;
  padding-left: 5px;
  padding-right: 5px;
  border-right: 1px solid rgb(168, 167, 167);
}
#article-tag {
  font-size: 13px;
  color: #86909c;
  padding-left: 5px;
}
.article-title {
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #1d2129;
  margin-top: 10px;
}
.article-fake-body {
  width: 100%;
  white-space: nowrap;
  color: #86909c;
  font-size: 13px;
  line-height: 22px;
  margin-top: 10px;
  font-weight: normal;
}
.article-footer{
    position: relative;
    width: 100%;
    height: 15px;
    margin-top: 15px;
    color:rgb(78, 89, 105);
    font-size: 13px;
}
#footer1{
    display: inline-block;
    text-indent: 20px;
    line-height: 15px;
    height: 15px;
    width: 15px;
    background-image: url("https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/view.1eda8fa.png");
    background-size: 100% 100%;
}
#footer2{
    display: inline-block;
    text-indent: 20px;
    line-height: 15px;
    margin-left:40px;
    height: 15px;
    width: 15px;
     background-size: 100% 100%;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ9SURBVHgB7VZNbtNQEP7GP7AkN8DcoJyA5gRNTwCR2kqsUm9YEKEaoZRl0hUSBLWcAHOCpjdIT1AfIewgTjzM+AccxwHXLRYS/STnvbyxZ743b34e8L+DcEMMhu+fERk7DLTAuAwRjjz3eVD1+xsROD75eARmr7AczDlsVyVhoCbeDt85mXHmqLtkbst0Ko9jk31aVU9tAgvYW7FxYNJ3D85eufuTOZtKYiZu3X4z/LBdRU9tAia4E0+YL7I1z+3OmPEpkWOrip7aBED0RAcb7K8KeBb/alD+LQIa+TI48kxfuAfTVSlVMlybgAafpN1RYgujopwIOzpGEhuogGuloTc8bd2j5TmS8/VfHu7t5uUaeCaRygORPaqi00JFJAVn2UuNa667xXfEeJZ+rePR+Kool7gIQg67+RpBJTvo5QMoZHPXxFLW8Tld2lhoUqMOfg/JlKjdT2Pnpwf0bDlx3worG1EnPlENF0m5OayO5+7NyjRLHXgMfCsNQhumrBviRfRAhnqyu0KAYXmpcX/BfKKekL+dvBIheOUddkuNK7QO6A43ycXDvolYr5OtGTnlD3VU41rVZLdfccvIipMYDdYINAHZZJyicgR+4wQ0hbVH6Px7RBeNE9BM0lGbVxorTRNImhcxf8mvNxcDafOywBM0TUCqqEa/I09QbF6NECDQdjKuN6hGCJSlX2MENqXfGgFKS6hlmA9wi7hvLJ/qWEy/DL96AfMlEXWkU/mD0XiCkjud7kRk56iOltwRYz3ShM7KXlhpx4PheBR3qxzS6zbSi0YtyOZe9919D38ioNC2vIDl6NyQC2bWtzWVomvf93gWwg7KXH+HfwY/AGsn+Lf3Dim6AAAAAElFTkSuQmCC);
}
#footer3{
    display: inline-block;
    text-indent: 20px;
    line-height: 15px;
    margin-left:40px;
    height: 15px;
    width: 15px;
    background-size: 100% 100%;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKRSURBVHgB7VZNbtpQEJ55BlR15RvUOUHTG5ATJD1BQ9NU6gq8JKiKoyrJ0u2qUmkFOUGaE5TegJwg7gnqLRh7MvMwwiDbYHCUDZ9kHph5M9+bN38AO+zwzEAoiEv3xz4v/KAFiK/0S6J/qPCBoui+Y38cFlC3HgHH7Zk1FTXZUIt/mivEPVY6GFFw4difPNiWwNW3X+dLhj1iA3JqProXq7EQ8TVoz4A1147OWfPkAjYhcO1+twirt7FSEexPiG4+26cDyMEXt1s3AI7Z+LsZ4TEFB1newBzjf2B6Gi8kaqwyvEpHFgmVtjmxcTgm401R44I2G0M2KjpEV5W9KbG0koC+8znrt47d8GFDCAk+gJCQwNyvwqS1LLNwBbHbHuQ7G99bJ4rXgY4LRPGqz4T2koda8EAERl2zIrory7hArlBnDmdSDSbHyf8WrwDVNHKV0YOyQdGNXhAPMwlgnHKjaHQPJUNBOEjamL9fhI7SMt0/Q3uu08wjoJGWLk+FZQKefLyEwIKSETcxwTCbANFfWQLAIygZCFifrjkEQq73WgixCaUziHWi+p1JIC65Hj/mpdt1oCQkq2u7+f4uk4BAGo8minguFQy2hFRXvlonqTuXgK5aRLqHc/m8vXK7LdgCE6hYskolTGtqqWnYsU+dmITJrnCvv/7sOXKSDVCBiScrJgeVBHInIokDuYqEsB5KQqgMl7uk1A4DwrpCkFLLExL0x1HAWfXCr2H4X2TOWh+wEAGB7pBQcRITzgwymvmxEilcVtp+cX1cfs20Drv2VKyDSVUPI4Ij3lRPEfFJclzXEvIQlXhioZ4QYaNjn/Q3IrAMiQmDA0wB+QGEflr/ENK6xXOXFS8QRQdFx/YdnhyP1D0hcwr1KvEAAAAASUVORK5CYII=);
}
#edit-delete{
    position: absolute;
    display: inline-block;
    margin-left: 40px;
    top: -2px;
    letter-spacing: 1.5px;
    height: 20px;
    width: 20px;
    font-size: 15px;
    line-height: 10px;
    text-align: center;
}
#ed-container{
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: 50px;
  height: 82px;
  border-radius:5px ;
  box-shadow: 0 0 2px rgb(211, 210, 210);
  border: 1px solid rgb(224, 224, 224);
  background-color: rgb(255, 255, 255);
}
.delete{
  height: 20px;
  line-height: 20px;
}
.edit{
  height: 20px;
  line-height: 20px;
}
.edit:hover{
  background-color: rgb(241, 241, 241);
}
.delete:hover{
  background-color: rgb(241, 241, 241);
}
.article-img{
  position: absolute;
  width: 120px;
  height: 80px;
  right: 10px;
  bottom: 20px;
  border-radius: 5px;
}
</style>