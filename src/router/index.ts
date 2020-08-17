import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home/index.vue";
import Layout from "@/layout/index.vue"
const routes: Array<any> = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  {
    path: "/",
    name: "Home",
    component: Layout,
    redirect:"home",
    children:[
      {
        path:"home",
        component:Home,
        
      }
    ],
    meta:{
      title:"首页"  
      }
  },
  {
    path: "/todo",
    name: "Todo",
    component: Layout,
    children:[
      {
        path:"/todo",
        component:()=>import("@/views/todo/index.vue"),
        
        
      }
    ],
    meta:{
      title:"待办事项"  
      }
  },
  {
    path: "/todowithstore",
    name: "TodoWithStore",
    component: Layout,
    children:[
      {
        path:"/todowithstore",
        component:()=>import("@/views/todoWithStore/index.vue"),
        
      }
    ],
    meta:{
      title:"待办事项-vuex"  
      }
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
