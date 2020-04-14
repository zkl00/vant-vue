<template>
 <!-- <van-tabs v-model="active" sticky> -->
  <van-tabs v-model="activeName" @click="TabClik"   animated>
    <van-tab title="流行" name="pop">
      <div class="Good-wap">
        <div v-for="(item,index) in goods" :key="index" class="warpList" @click="deatilClick(item)">
            <img :src="item.show.img" alt="">
            <div class="botton">
                <p class="title">{{item.title}}</p>          
            </div>
             <div class="good_wap">
           <span class="price">￥{{item.price}}</span>
           <span class="cfav"><img src="../../../assets/img/common/collect.svg" alt="" @load="newImgLong">{{item.cfav}}</span>
       </div>
        </div>
      </div>
    </van-tab>
    <van-tab title="新款" name="new">
         <div class="Good-wap">
        <div v-for="(item,index) in goods" :key="index" class="warpList" @click="deatilClick(item)">
            <img :src="item.show.img" alt="" @load="newImgLong">
            <div class="botton">
                <p class="title">{{item.title}}</p>          
            </div>
             <div class="good_wap">
           <span class="price">￥{{item.price}}</span>
           <span class="cfav"><img src="../../../assets/img/common/collect.svg" alt="">{{item.cfav}}</span>
       </div>
        </div>
      </div>
    </van-tab>
    <van-tab title="精选" name="sell">
         <div class="Good-wap">
        <div v-for="(item,index) in goods" :key="index" class="warpList" @click="deatilClick(item)"> 
            <img :src="item.show.img" alt="">
            <div class="botton">
                <p class="title">{{item.title}}</p>          
            </div>
             <div class="good_wap">
           <span class="price">￥{{item.price}}</span>
           <span class="cfav"><img src="../../../assets/img/common/collect.svg" alt="" @load="newImgLong">{{item.cfav}}</span>
       </div>
        </div>
      </div>
    </van-tab>
  </van-tabs>
</template>
<script>
import { Tab, Tabs, Col, Row ,List } from "vant";
export default {
  props: {
    goods: {
      type: Array
    }
  },
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Col.name]: Col,
    [Row.name]: Row,
    [List.name]:List
  },
  data() {
    return {
      activeName: "pop"
    };
  },
  methods: {
    TabClik(e) {
      this.$emit("TabClik", e);
    },
    // 监听图片加载完成
    newImgLong(){
      this.$emit("newImgLonge")
    },
    // 跳转详情页面
    deatilClick(id){
     this.$router.push({
       path:'/details',
       query:{
         iid:id.iid
       }
     })
    },
  }
};
</script>
<style scoped>
.warpList{
    width:48%;
}
.Good-wap{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px 0;
}
.Good-wap img{
    width: 100%;
    height: 240px;
}
.botton{
    font-size: 14px;
    text-align: center;
}
.title{
    width: 100%;
    /* flex-wrap: nowrap; */
    white-space: nowrap;
    overflow:hidden;
     text-overflow: ellipsis;
}
.good_wap{
    display: flex;
     padding: 0 10px 5px 0;
}
.good_wap span{
    display: inline-block;
    padding: 0 10px;
}
.price{
      color: #ff5777;
      padding: 0 20px;
      font-size: 12px;
}
.cfav{
    position: relative;
    /* margin-left: 30px; */
    display: flex;
    align-items: center;
     font-size: 12px;

}
.cfav img{
    position: absolute;
    left: 84%;
    width: 15px;
    height: 15px;
    top: 0px;
}
</style>


