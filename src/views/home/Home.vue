<template>
  <!-- 有问题的地方 下拉加载更多没有传参  回到顶部有问题 -->
  <div id="home">
    <NavBar :title="title" class="nav"></NavBar>
    <!-- <Tab @TabClik="TabClik" @newImgLonge="newImgLonge" v-show="hide" ref="contentTab1" class="filx"></Tab> -->
    <bettorScroll class="scroll" @onLond="onLond" @HieghtScrollemny="HieghtScrollemny" ref="scroll">
      <Swipe :images="banner" @loadImgeNew="loadImgeNew"></Swipe>
      <Recommend :recommend="recommend" @newImgLong="newImgLong"></Recommend>
      <recommendImg></recommendImg>
      <Tab
        @TabClik="TabClik"
        :goods="goods[isActive].list"
        @newImgLonge="newImgLonge"
        ref="contentTab"
      ></Tab>
    </bettorScroll>
    <showImg @click.native="HideImg" v-if="show"></showImg>
  </div>
</template>
<script>
import NavBar from "../../components/common/NavBar/navBar";
import Swipe from "../../components/common/swipe/Swipe";
import Recommend from "./recommend";
import recommendImg from "./recommendImg";
import Tab from "../../components/common/tab/Tab";
import bettorScroll from "../../components/content/bettor-scroll";
import showImg from "../../components/content/showImg";
import { home, getHOmeGoodes } from "../../network/home";

export default {
  components: {
    NavBar,
    Swipe,
    Recommend,
    recommendImg,
    Tab,
    bettorScroll,
    showImg
  },
  data() {
    return {
      show: false,
      title: "购物街", //传到navbar组件
      banner: [], //轮播图部分
      recommend: [], //抢购部分
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      isActive: "pop",
      scrollY: null,
      scrollTop: "",
      hide: false, //隐藏导航
      scrollY: ""
    };
  },
  mounted() {
    this.homeAxios(); //请求首页和抢购
    this.GoodsList("pop");
    this.GoodsList("new");
    this.GoodsList("sell");
  },
  /***查看路由是否被销毁 */
  destroyed() {
    console.log("已经销毁");
  },
  /**路由的创建 */
  activated() {
    // console.log("创建")
    this.$refs.scroll.scrollTo(0, this.scrollY, 0);
    this.$refs.scroll.scroll.refresh();
  },
  /**路由离开的好时候 */
  deactivated() {
    // console.log('离开的好时候')
    this.scrollY = this.$refs.scroll.scroll.y;
  },
  methods: {
    /**监听事件 */
    HideImg() {
      this.$refs.scroll.scrollTo(0, 0); //回到顶端
    },
    newImgLong() {},
    loadImgeNew() {
      // console.log(this.$refs.contentTab.$el.offsetTop)
      this.scrollTop = this.$refs.contentTab.$el.offsetTop;
    },
    /****
     * 子组件
     * 的事件
     * 监听
     */
    newImgLonge() {
      this.$refs.scroll.scroll.refresh();
      // this.$refs.contentTab1.activeName = this.isActive
    },
    HieghtScrollemny(e) {
      // console.log(e)
      if (e.y < -1000) {
        // alert("111")
        this.show = true;
      } else {
        this.show = false;
      }
      // this.hide = -e.y > this.scrollTop;
    },
    onLond() {
      this.GoodsList(this.isActive);
      // this.$refs.contentTab1.activeName = this.isActive
    },
    TabClik(e) {
      this.isActive = e;
      // this.$refs.contentTab1.activeName = this.isActive;
      // this.$refs.contentTab.activeName = this.isActive;
    },
    /****
     * 网络请求
     */
    homeAxios() {
      home().then(res => {
        this.banner = res.data.banner.list; //轮播图
        this.recommend = res.data.recommend.list; //
      });
    },
    async GoodsList(type) {
      const page = this.goods[type].page + 1; //请求第一次的时候给page + 1
      // console.log(page)
      const res = await getHOmeGoodes(type, page);
      this.goods[type].list.push(...res.data.list);
      this.goods[type].page += 1; //每次给type就是定义的pop 每次给自身+=1
      this.$refs.scroll.emptyCentent(); //每次下拉一次就清空一次
    }
  }
};
</script>
<style scoped>
#home {
  height: 100vh;
  /* position: relative; */
}
.van-tabs__line {
  width: 69px !important;
  transform: translateX(69px) translateX(-50%);
  transition-duration: 0.3s;
}
.nav {
  background: #ff8198;
}
.van-nav-bar__title {
  color: white;
}
.scroll {
  overflow: hidden;
  position: absolute;
  top: 45px;
  bottom: 49px;
  right: 0;
  left: 0;
}
.filx {
  z-index: 49;
}
</style>


