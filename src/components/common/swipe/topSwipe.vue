<template>
  <van-swipe :autoplay="3000" class="swipe">
    <van-swipe-item v-for="(item, index) in images" :key="index" class="swipe">
      <img v-lazy="item" width="100%" @load="loadImgeNew" />
    </van-swipe-item>
  </van-swipe>
</template>
<script>
import { Swipe, SwipeItem, Lazyload, Image } from "vant";
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
    [Image.name]: Image
  },
  data() {
    return {
      fly: true
    };
  },
  methods: {
    loadImgeNew() {
      if (this.fly) {
        this.$emit("loadImgeNew");
        this.fly = false;
      }
    }
  }
};
</script>
<style scoped>
.swipe {
  overflow: hidden;
  height: 300px;
}
.van-swipe {
  overflow: hidden;
}
</style>


