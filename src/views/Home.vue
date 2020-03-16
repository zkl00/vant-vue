<template>
  <div class="home">
    <van-cell title="选择区域" is-link @click="showPopup" />
    <van-popup v-model="show" @close="onClose" position="bottom">
      <Area :columns-num="3" :area-list="areaList" @confirm="funt" v-model="value" />
    </van-popup>
    <br />
    <Button type="primary">测试</Button>

    <van-tabbar v-model="active" @change="pathClik">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// @ is an alias to /src
// import { Button, Area, Popup, cell, Tabbar,TabbarItem } from "vant";
import areaList from "../assets/js/area";
export default {
  name: "",
  components: {
    Button,
    Area,
    // Popup
    [Popup.name]: Popup,
    [cell.name]: cell,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]:TabbarItem
  },
  data() {
    return {
      active: 0,
      areaList,
      show: false,
      title: "那么",
      show: false,
      value: ""
    };
  },
  methods: {
    funt(e) {
      this.show = false;
    },
    showPopup() {
      //  console.log("------");
      this.show = true;
    },
    onClose() {
      this.show = false;
    },
    pathClik(){
      console.log(this.$route.path)
    }
  }
};
</script>
