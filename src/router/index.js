import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue";
import ViewArticle from "../views/ViewArticle.vue";
import BlogPage from "../views/Blog.vue";
import Signin from "../views/Signin.vue";
import Register from "../views/Register.vue";
import Write from "../views/Write.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path:'/',
      name:'home',
      component: Home,
    },
    {
      path:'/article/view/:id',
      name:'View Article',
      component:ViewArticle,
    },
    {
      path:'/blog',
      name:"View All Articles",
      component:BlogPage,
    },
    {
      path:'/signin',
      name:"Signin",
      component:Signin,
    },
    {
      path:"/register",
      name:"Register Now",
      component:Register,
    },
    {
      path:"/write",
      name:"Write Article",
      component:Write,
    }
  ]
})

export default router
