import Vue from 'vue'
import Router from 'vue-router'
import "./assets/js/request.js"
import "./assets/js/flexble.js"
import "./assets/css/base.css"
Vue.use(Router)

//  首页路由
import home from "./views/index/home.vue"
import index from "./views/index/index.vue"
// 剧场路由
import cinama from "./views/cinama/cinama.vue"

// 购物车
import cart from "./views/cart/cart.vue"
// 城市列表
import city from "./views/city/city.vue"
// 详情页
import detail from "./views/detail/detail.vue"
// 剧场信息列表 
import cinamaList from "./views/cinamaList/cianmaList.vue"

// 从首页 进入 列表
import indexList from "./views/indexList/indexList.vue"
// 个人中心
import wode from "./views/wode/wode.vue"
// 从剧场 进入 列表
import allList from "./views/allList/allList.vue"
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:{"name":"home"}
    },
    {
      path:"/home",
      name: 'home',
      component: home,
      redirect:{"name":"index"},
      children:[
        {
          path:"/home/index",
          name:"index",
          component:index
        },
        {
          path:"/home/cinama",
          name:"cinama",
          component:cinama
        }
      ]
    },
    {
      path:"/city",
      name:"city",
      component:city
    },
    {
      path:"/cart",
      name:"cart",
      component:cart
    },
    {
      path:"/detail",
      name:"detail",
      component:detail
    },
    {
      path:"/cinamaList",
      name:"cinamaList",
      component:cinamaList
    },
    {
      path:"/indexList",
      name:"indexList",
      component:indexList
    },
    {
      path:"/allList",
      name:"allList",
      component:allList
    }
  ]
})
