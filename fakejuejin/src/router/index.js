import VueRouter from "vue-router";
import Body from "../pages/Body/Body.vue";
import ArticleDetail from "../pages/Body/Article/AricleDetail/ArticleDetail.vue";
import SideBar from "../component/SideBar/SideBar.vue";
import ArticleSideBar from "../component/SideBar/ArticleSideBar.vue";
import User from '../pages/User/User.vue'
import UserBody from '../pages/User/pages/UserBody.vue'
import UserSideBar from '../pages/User/components/UserSidebar.vue'
import UserProfile from '../pages/User/components/UserProfile.vue'
import LogIn from "../component/LogIn.vue";
import Editer from "../pages/Editer.vue"
export default new VueRouter({
	routes: [
		{
			path: "/",
			components: {
				default: Body,
				SideBar,
			},
			children: [
				{
					path: "Tag/:tag",
					component: Body,
				},
			],
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
      name: "profile",
      path: "/user/profile",
      components: {default:UserProfile }
    },
		{
			name: "user",
			path: "/user/:userId",
			components: {
				default: User,
				SideBar: UserSideBar,
			},
			children: [
				{
					path: "/user/:userId/",
					component: UserBody,
				},
				{
					path: "/user/:userId/:type",
					component: UserBody,
				},
			],
		},
		{
			name: "LogIn",
			path: "/login",
			component: LogIn,
		},
		{
			name: "editer",
			path: "/editer",
			component: Editer,
		}
	],
  mode:'history'
});
