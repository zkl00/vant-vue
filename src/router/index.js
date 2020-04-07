import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'//首页

const Home = () => import('../views/home/Home.vue')//首页
const ClassFly = () => import('../views/classFly/ClassFly')//分类
const Cart = ()=>import('../views/cart/Cart')//购物车
const myMine = ()=>import('../views/mymine/myMine')//我的
const Details =()=>import('../views/details/Details')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    name: "home",
    component: Home
  },
  {
    path:'/classFly',
    name:'classFly',
    component:ClassFly
  },
  {
    path:'/cart',
    name:'cart',
    component:Cart
  },
  {
    path:'/mymine',
    name:'mymine',
    component:myMine
  },
  {
    path:'/details',
    name:'details',
    component:Details
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
