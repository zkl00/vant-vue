<template>
  <div id="deatilList">
    <detailsTabr  />
    <bettorScroll class="scrollDiv" ref="scroll" @HieghtScrollemny="HieghtScrollemny">
      <topSwipe :images="topImages" />
      <DetailsIitemInfo :Goods="Goods"></DetailsIitemInfo>
      <DetailsShopInfo :shop="shop"></DetailsShopInfo>
      <DetailsdatainLinfo :detailInfo="detailInfo" @newOnloadeImge="Onloadimg"></DetailsdatainLinfo>
       <detailGoodsParam :detailGoodsParam="GoodsParam"></detailGoodsParam>
        <DetailCommentInfo :detailcommentInfo="commentInfo"></DetailCommentInfo>
    </bettorScroll>
     <showImg @click.native="HideImg" v-if="show"></showImg>
    
  </div>
</template>
<script>
import detailsTabr from "./children/detailsTabr";
import topSwipe from "../../components/common/swipe/topSwipe";
import { detailstList, Goods, shop,GoodsParam } from "../../network/details";
import DetailsIitemInfo from "./children/DetailsIitemInfo";
import DetailsShopInfo from "./children/DetailsShopInfo";
import DetailsdatainLinfo from './children/DetailsdatainLinfo'
import bettorScroll from "../../components/content/bettor-scroll";
import detailGoodsParam from './children/detailGoodsParam'
import DetailCommentInfo from './children/DetailCommentInfo'
import showImg from '../../components/content/showImg'

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
    showImg,
   
  },
  data() {
    return {
      iid: "",
      topImages: [],
      Goods: {},
      shop: {},
      detailInfo:{},
      show:false,
      GoodsParam:{},
      commentInfo:{},
    };
  },
  created() {
    this.iid = this.$route.query.iid;
  },
  mounted() {
    this.GetdetailstList();
  },
  methods: {
    /***监听事件 */
    Onloadimg(){
      this.$refs.scroll.scroll.refresh()
    },
    // 回到顶部
      HideImg() {
      this.$refs.scroll.scrollTo(0, 0); //回到顶端
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
    /***网路请求 */
    async GetdetailstList() {
      let iid = this.iid;
      const response = await detailstList(iid);
      console.log(response)

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
      this.detailInfo = data.detailInfo,
      //获取尺寸
      this.GoodsParam = new GoodsParam(data.itemParams.info,data.itemParams.rule)
      // 评论信息
      if(data.rate.cRate != 0){
         this.commentInfo = data.rate.list[0]
      }
     
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
    bottom: 0px;
   overflow: hidden;
}
</style>


