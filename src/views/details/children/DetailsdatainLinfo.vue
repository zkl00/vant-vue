<template>
  <div class="detailsGoods"  v-if="Object.keys(detailInfo) != 0">
    <div class="deatlisINof">
      <div class="top"></div>
      <div class="deatilsTitle">{{detailInfo.desc}}</div>
      <div class="bottom"></div>
      <div class="deatilstext">
         {{detailInfo.detailImage[0].key}}
      </div>
      <div class="info-list">
      <img v-for="(item, index) in detailInfo.detailImage[0].list" :src="item" alt="" :key="index" @load="newIMgOnload">
    </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods:{
    // 监听图片是否加载完成
    newIMgOnload(){
      this.$emit('newOnloadeImge')
    }
  }
};
</script>
<style scoped>
.detailsGoods{
  border-bottom: 5px solid #eee;
}
.top {
  width: 100px;
  border-bottom: 2px solid gray;
  margin: 10px 10px;
}
.deatilsTitle {
  font-size: 16px;
  width: 95%;
  margin: 0 auto;
}
.bottom {
  width: 100px;
  border-bottom: 2px solid gray;
  float: right;
   margin: 10px 10px;
}
.deatilstext{
    font-size: 15px;
    padding: 30px 10px;
}
  .info-list img {
    width: 100%;
  }
</style>


