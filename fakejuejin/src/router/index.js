import VueRouter from "vue-router";
import Body from '../pages/Body/Body.vue'
import ArticleDetail from '../pages/Body/Article/AricleDetail/ArticleDetail.vue'
import User from '../pages/User/User.vue'
import UserBody from "../pages/User/pages/UserBody.vue"
export default new VueRouter({
    routes:[
        {
            path:'/',
            component:Body
        },
        {
            name:'articledetail',
            path:'/articledetail',
            component:ArticleDetail,
        },
        {
            name:'user',
            path:'/user',
            component:User,
            children:[
                {
                    path:'body',
                    component:UserBody
                }
            ]  
        }
    ]
})
