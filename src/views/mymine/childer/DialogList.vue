<template>
  <div>
    <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
       <van-notice-bar  color="#1989fa"  text="通知内容:易积分广告平台通过长期积累的终端设备信息数据，利用先进的数据挖掘算法，让广告主根据设备型号特征、移动运营商特征、媒体分类特征以及手机操作偏好 特性进行有选择、有效率的投放" left-icon="volume-o" background="#fff7cc" />
      <van-swipe :autoplay="3000" class="list">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" class="imgs" />
        </van-swipe-item>
      </van-swipe>
    </van-popup>
  </div>
</template>
<script>
import { Popup, Swipe, SwipeItem,NoticeBar } from "vant";
export default {
  components: {
    [Popup.name]: Popup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [NoticeBar.name]:NoticeBar
  },
  data() {
    return {
      show: false,
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
      ],
    };
  }
};
</script>
<style scoped>
.imgs{
  width: 100%;
  height: 200px;
}
</style>


