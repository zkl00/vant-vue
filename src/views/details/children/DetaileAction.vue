<template>
<van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服"  />
  <van-goods-action-icon icon="cart-o" text="购物车" :info="cont" />
  <van-goods-action-icon icon="shop-o" text="店铺"  />
  <van-goods-action-button type="warning" text="加入购物车" @click="addCart" />
  <van-goods-action-button type="danger" text="立即购买" />
</van-goods-action>
</template>
<script>
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from "vant";
export default {
  components: {
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton
  },
  data(){
      return{
          cont:null
      }
  },
  methods:{
    // 发送到外面
    addCart(){
      this.$emit("addCart")
    },
  }
};
</script>

