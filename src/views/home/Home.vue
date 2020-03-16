<template>
  <div id="home">
    <NavBar :title="title" class="nav"></NavBar>
    <Swipe :images="banner"></Swipe>
    <Recommend :recommend="recommend"></Recommend>
    <recommendImg></recommendImg>
    <Tab @TabClik="TabClik" :goods="goods[isActive].list"></Tab>
  </div>
</template>
<script>
import NavBar from "../../components/common/NavBar/navBar";
import Swipe from "../../components/common/swipe/Swipe";
import Recommend from "./recommend";
import recommendImg from "./recommendImg";
import Tab from "../../components/common/tab/Tab";
import { home, getHOmeGoodes } from "../../network/home";
export default {
  components: {
    NavBar,
    Swipe,
    Recommend,
    recommendImg,
    Tab
  },
  data() {
    return {
      title: "购物街", //传到navbar组件
      banner: [], //轮播图部分
      recommend: [], //抢购部分
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      isActive:"pop"
    };
  },
  mounted() {
    this.homeAxios(); //请求首页和抢购
    this.GoodsList("pop");
    this.GoodsList("new");
    this.GoodsList("sell");
  },
  methods: {
    /****
     * 事件监听
     */
    TabClik(e) {
      this.isActive = e
    },
    /****
     * 网络请求
     */
    async homeAxios() {
      const res = await home();
      // console.log(res)
      this.banner = res.banner.list; //轮播图
      this.recommend = res.recommend.list; //
    },
    async GoodsList(type) {
      const page = this.goods[type].page + 1; //请求第一次的时候给page + 1
      const res = await getHOmeGoodes(type, page);

      console.log(res);
    //    let arr = res.data.list;
      this.goods[type].list.push(...res.list);
      this.goods[type].page += 1; //每次给type就是定义的pop 每次给自身+=1
    }
  }
};
</script>
<style scoped>
.nav {
  background: #ff8198;
}
.van-nav-bar__title {
  color: white;
}
</style>


