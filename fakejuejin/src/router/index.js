import VueRouter from "vue-router";
import Body from "../pages/Body/Body.vue";
import ArticleDetail from "../pages/Body/Article/AricleDetail/ArticleDetail.vue";
import SideBar from "../component/SideBar/SideBar.vue";
import ArticleSideBar from "../component/SideBar/ArticleSideBar.vue";
import User from '../pages/User/User.vue'
import UserBody from '../pages/User/pages/UserBody.vue'
export default new VueRouter({
    routes: [{
        path: "/",
        components: {
            default: Body,
            SideBar,
        },
        children: [
            {
                path: 'Tag/:tag',
                component: Body
            }
        ]
    },
    {
        name: "articledetail",
        path: "/articledetail",
        components: {
            default: ArticleDetail,
            SideBar: ArticleSideBar,
        },
    },
    {
        name: "user",
        path: "/user",
        components: {
            default: User,
            SideBar: ArticleSideBar,
        },
        children:[
            {
                path:'',
                component:UserBody
            }
        ]
            
        
      },
    ],
});
