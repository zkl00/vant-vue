<template>
  <div class="shop_wap" v-if="Object.keys(shoplist).length != 0">
    <div class="shpBox">
      <div class="checkbox">
        <van-checkbox v-model="checked" @click="checkedClick(shoplist.checked)"></van-checkbox>
      </div>
      <div class="imgs">
        <img :src="shoplist.Url" alt />
      </div>
      <div class="shopContent">
        <p class="deft">{{shoplist.desc}}</p>
        <p class="title">产品描述：{{shoplist.title}}</p>
        <div class="price">
          <p class="newprice">￥{{shoplist.newPrice}}</p>
          <p>x{{shoplist.count}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Checkbox, CheckboxGroup } from "vant";
export default {
  props: {
    shoplist: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup
  },
  data() {
    return {
        checked:true,
        aa:123
    };
  },
  methods: {
    checkedClick(e) {
        // console.log(object)
        this.checked = !this.checked
        // console.log(this.checked)
    //   this.shoplist.checked = !this.shoplist.checked;
    }
  }
};
</script>
<style  scoped>
.shop_wap {
  width: 100%;
  padding-bottom: 2px;
  padding-top: 12px;
}
.imgs img {
  width: 80px;
  height: 100%;
}
.shpBox {
  display: flex;
  align-items: center;
  padding: 5px 0;
  border-bottom: 1px solid #ccc;
}
.shopContent {
  padding: 0 10px;
}
.deft,
.title {
  width: 240px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 15px;
}
.title {
  padding: 20px 0;
  color: #666;
  font-size: 14px;
}
.checkbox {
  padding: 0 5px;
}
.price {
  width: 250px;
  display: flex;
  justify-content: space-between;
}
.newprice {
  color: orangered;
}
</style>


