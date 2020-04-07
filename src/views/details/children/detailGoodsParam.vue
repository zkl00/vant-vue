<template>
  <div class="info_warp">
    <table v-for="(table, index) in detailGoodsParam.sizes" class="info-size" :key="index">
      <tr v-for="(tr,index) in table" :key="index">
        <td v-for="(td,index) in tr" :key="index">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info, index) in detailGoodsParam.infos" :key="index">
        <td class="info-param-key">{{info.key}}</td>
        <td class="param-value">{{info.value}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  props: {
    detailGoodsParam: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style scoped>
.info-size tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  font-size: 15px;
  height: 42px;
  text-align: center;
}
.info-param tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  font-size: 15px;
  height: 42px;
  text-align: center;
}
.info-size {
  width: 100%;
}
.info_warp {
  width: 100%;
}
.info-param-key {
  /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
  width: 95px;
}
.info-param {
  /* border-top: 1px solid rgba(0, 0, 0, 0.1); */
  font-size: 20px;
}
.param-value {
  color: #eb4868;
  font-size: 18px;
}

.info-img img {
  width: 100%;
}
</style>



