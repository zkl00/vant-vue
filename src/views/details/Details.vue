<template>
  <div id="deatilList">
    <detailsTabr @DetaileClick="detaileClick" ref="deitClick" />
    <bettorScroll class="scrollDiv" ref="scroll" @HieghtScrollemny="HieghtScrollemny">
      <div>
        <!-- <li v-for="item in contentCart"> {{item}}</li> -->
      </div>
      <topSwipe :images="topImages" ref="base" />
      <DetailsIitemInfo :Goods="Goods"></DetailsIitemInfo>
      <DetailsShopInfo :shop="shop"></DetailsShopInfo>
      <DetailsdatainLinfo :detailInfo="detailInfo" @newOnloadeImge="Onloadimg"></DetailsdatainLinfo>
      <detailGoodsParam :detailGoodsParam="GoodsParam" ref="param"></detailGoodsParam>
      <DetailCommentInfo :detailcommentInfo="commentInfo" ref="comment"></DetailCommentInfo>
      <itemRecommend :commend="recommend" ref="recommend"></itemRecommend>
    </bettorScroll>
    <showImg @click.native="HideImg" v-if="show"></showImg>
    <DetaileAction @addCart="addToCart" ref="carCount"></DetaileAction>
  </div>
</template>
<script>
import detailsTabr from "./children/detailsTabr";
import topSwipe from "../../components/common/swipe/topSwipe";
import {
  detailstList,
  Goods,
  shop,
  GoodsParam,
  getCommints
} from "../../network/details";
import DetailsIitemInfo from "./children/DetailsIitemInfo";
import DetailsShopInfo from "./children/DetailsShopInfo";
import DetailsdatainLinfo from "./children/DetailsdatainLinfo";
import bettorScroll from "../../components/content/bettor-scroll";
import detailGoodsParam from "./children/detailGoodsParam";
import DetailCommentInfo from "./children/DetailCommentInfo";
import itemRecommend from "./children/itemRecommend";
import showImg from "../../components/content/showImg";
import DetaileAction from "./children/DetaileAction";

export default {
  name: "Details",
  components: {
    detailsTabr,
    topSwipe,
    DetailsIitemInfo,
    DetailsShopInfo,
    bettorScroll,
    DetailsdatainLinfo,
    detailGoodsParam,
    DetailCommentInfo,
    itemRecommend,
    showImg,
    DetaileAction
  },
  data() {
    return {
      iid: "",
      topImages: [],
      Goods: {},
      shop: {},
      detailInfo: {},
      show: false,
      GoodsParam: {},
      commentInfo: {},
      recommend: [],
      scrollY: [],
      currendIndex: null
    };
  },
  created() {
    this.iid = this.$route.query.iid;
  },
  computed:{
    // 购物车的数量
    ContentList(){
      return this.$store.state.countPush
    },
    contentCart(){
      return this.$store.state.countList
    }
  },
  mounted() {
    this.GetdetailstList();
    this.getRecommend(); //热门推荐
  },
  methods: {
    /***监听事件 */
    Onloadimg() {
      this.$refs.scroll.scroll.refresh();
      /**这里是获取组件的 距离上方或上层控件的位置，整型，单位像素 */
      this.scrollY = [];
      this.scrollY.push(this.$refs.base.$el.offsetTop);
      this.scrollY.push(this.$refs.param.$el.offsetTop);
      this.scrollY.push(this.$refs.comment.$el.offsetTop);
      this.scrollY.push(this.$refs.recommend.$el.offsetTop);
    },
    //回到原点
    detaileClick(e) {
      this.$refs.scroll.scrollTo(0, -this.scrollY[e]); //点击tab标题跳转到对应位置
    },
    // 回到顶部
    HideImg() {
      this.$refs.scroll.scrollTo(0, 0); //回到顶端
    },
    // 滚到到对应主题和隐藏滚动的图标
    HieghtScrollemny(e) {
      let prositionY = -e.y;
      let length = this.scrollY.length;
      for (let i = 0; i < length; i++) {
        if (
          (this.currendIndex != i &&
            (i < length - 1 &&
              prositionY >= this.scrollY[i] &&
              prositionY < this.scrollY[i + 1])) ||
          (i === length - 1 && prositionY >= this.scrollY[i])
        ) {
          this.currendIndex = i;
          this.$refs.deitClick.curreindex = i;
        }
      }
      if (e.y < -1000) {
        // alert("111")
        this.show = true;
      } else {
        this.show = false;
      }
      // this.hide = -e.y > this.scrollTop;
    },
    /***网路请求 */
    async GetdetailstList() {
      let iid = this.iid;
      const response = await detailstList(iid);

      const data = response.result;
      // 获取顶部轮播图
      this.topImages = data.itemInfo.topImages;
      // 获取商品信息
      this.Goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 创建店铺信息
      this.shop = new shop(data.shopInfo);
      // 保存商品详细信息
      (this.detailInfo = data.detailInfo),
        //获取尺寸
        (this.GoodsParam = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        ));
      // 评论信息
      if (data.rate.cRate != 0) {
        this.commentInfo = data.rate.list[0];
      }
    },
    // 热门推荐
    async getRecommend() {
      const res = await getCommints();
      this.recommend = res.data.list;
    },
    // 保存商品
    addToCart() {
      let obj = {};
      obj.iid = this.iid;
      obj.Url = this.topImages[0]
      obj.title = this.Goods.title;
      obj.desc = this.Goods.desc;
      obj.newPrice = this.Goods.nowPrice;
      
      // 保存到vuex中
      this.$store.commit('cartList',obj)
      this.$refs.carCount.cont = this.ContentList.length
    }
  }
};
</script>
<style scoped>
#deatilList {
  height: 100vh;
  position: relative;
  z-index: 19;
  background-color: #fff;
}
.scrollDiv {
  /* height: calc(100% - 44px); */
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 44px;
  overflow: hidden;
}
</style>


