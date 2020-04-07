<template>
  <div class="DetailsItemIfon" v-if="Object.keys(Goods).length !== 0">
    <div class="title">{{Goods.title}}</div>
    <div class="info_price">
      <span class="price">{{Goods.price}}</span>
      <span class="newPrice">{{Goods.lowPrice}}</span>
      <span class="discountDesc" :style="{background:Goods.discountBgColor}">{{Goods.discountDesc}}</span>
    </div>
    <div class="info-other">
      <span>{{Goods.columns[0]}}</span>
      <span>{{Goods.columns[1]}}</span>
      <span>{{Goods.services[Goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in Goods.services.length-1" :key="index">
        <img :src="Goods.services[index-1].icon" class="infoimg" />
        <span>{{Goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    Goods: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.DetailsItemIfon {
  margin-top: 15px;
  padding: 0 8px;
  border-bottom: 5px solid #f2f5f8;
}
.title {
  font-size: 16px;
}
.info_price {
  display: flex;
  align-items: center;
}
.price {
  color: #ff5777;
  padding: 0 10px;
}
.newPrice {
  text-decoration: line-through;
  font-size: 13px;
}
.discountDesc {
  margin: 0 10px;
  font-size: 12px;
  color: #fff;
  border-radius: 8px;
  padding: 2px 5px;
}
.info-other {
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  color: #999;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.info-service{
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    height: 60px;
    align-items: center;
   
}
  .info-service-item img {
    width: 14px;
    height: 14px;
    vertical-align:middle
    
  }
</style>


