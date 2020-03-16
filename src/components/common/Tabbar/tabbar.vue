<template>
    <van-tabbar route>
  <van-tabbar-item replace to="/home" icon="wap-home-o">
    首页
  </van-tabbar-item>
  <van-tabbar-item  replace to="/classFly" icon="search">
    分类
  </van-tabbar-item>
   <van-tabbar-item replace  to="/cart" icon="cart-o">
    购物车
  </van-tabbar-item>
   <van-tabbar-item   to="/mymine" icon="friends-o">
    我的
  </van-tabbar-item>
</van-tabbar>
</template>
<script>
import {Tabbar,TabbarItem} from 'vant'
export default {
    components:{
       [Tabbar.name]: Tabbar,
        [TabbarItem.name]:TabbarItem
    }
}
</script>

