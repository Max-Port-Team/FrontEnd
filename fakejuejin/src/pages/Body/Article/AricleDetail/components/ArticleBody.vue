<template>
  <div>
    <div class="ArticleBody" ref="ArticleBody"></div>
     <div class="copy-tip" v-if="iscopy">代码复制成功</div>
  </div>
</template>
<script>
import { marked } from "marked";
export default {
  name: "ArticleBody",
  props: ["body"],
  data(){
    return{
      iscopy:false
    }
  },
  computed: {
    parsebody() {
      return marked.parse(this.body);
    },
  },
  methods:{
    loadScript(src,fnc){
      const script= document.createElement("script");
      script.src = src;
      script.onload = () => fnc();
      document.body.appendChild(script);
    },
    antishake(fnc,dalay){
        let timer=null
        return ()=>{
          clearTimeout(timer)
          timer=setTimeout(fnc,dalay)
        }
    }
  }
  ,
  mounted() {
    const timer = setInterval(() => {
      if (this.body) {
        clearInterval(timer);
        let html = marked.parse(this.body);
        this.$refs.ArticleBody.innerHTML = html.replace(/复制代码/g,"");
        document.querySelectorAll("pre").forEach((v) => (v.className = "language-javascript"));
        new Promise((resolve,reject)=>{
          this.loadScript("./index.js",resolve)
        })
        .then(() => {
            let copytip=this.antishake(()=>this.iscopy=false,2000)
            document.querySelectorAll("pre").forEach((v) => {
                v.style.position='relative';
                const stylestr="position:absolute;top:5px;color:rgb(212,207,207);right:5px;z-index:1000;font-size:13px;cursor:pointer;"
                v.insertAdjacentHTML("afterbegin",`<span class='copycode' style=${stylestr}>复制代码</span>`)
            });
            document.querySelectorAll('.copycode').forEach(v=>{
                  v.addEventListener("click",()=>{
                    navigator && navigator.clipboard && navigator.clipboard.writeText(v.parentNode.innerText.replace(/复制代码/g,''))
                    .then(()=>{
                      this.iscopy=true;
                      copytip()
                      })
                  })
                  v.addEventListener("mousedown",(e)=>{
                   e.preventDefault()
                  })
                  v.addEventListener("mouseover",()=>{
                    v.style.color='rgb(61, 61, 61)'
                  })
                  v.addEventListener("mouseout",()=>{
                    v.style.color='rgb(212,207,207)'
                  })
            })
        });
      }
    }, 100);
  },
};
</script>

<style scoped>
.ArticleBody {
  width: 90%;
  padding: 5%;
  word-break: break-word;
  line-height: 28px;
  font-weight: 400;
  font-size: 16px;
  overflow-x: hidden;
  color: #333;
}
.copy-tip{
  position: fixed;
  font-size: 15px;
  padding: 10px 20px;
  top: 40px;
  right: 40px;
  z-index: 10000;
  color: #007bff;
  background-color:#e6f3ff ;
  box-shadow: 0 1px 1px 0 hsla(0, 0%, 80.4%, .5);
  border: 1px solid #b3d0ef;
  border-radius: 2px;
  cursor:default;

}
</style>