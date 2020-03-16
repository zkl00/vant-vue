<template>
  <van-swipe :autoplay="3000" class="swipe">
    <van-swipe-item v-for="(item, index) in images" :key="index"  class="swipe">
      <img v-lazy="item.image" width="100%" height="100%"   />
    </van-swipe-item>
  </van-swipe>
</template>
<script>
import { Swipe, SwipeItem, Lazyload,Image } from "vant";
export default {
  props: {
    images: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Lazyload.name]: Lazyload,
    [Image.name]:Image
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.swipe{
   overflow: hidden;
   height: 200px;
}
.van-swipe{
  overflow: hidden;
}
.IMGdit {
  /* width: 300px; */
  width: 100%;
  height: 300px;
}
</style>


