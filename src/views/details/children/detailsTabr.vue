<template>
  <div class="navBar">
    <zklNavBar>
        <div slot="left">
           <img src="@/assets/img/common/back.svg" alt="" class="imgTop" @click="backClick">
        </div>
      <div slot="centen" class="titleFlex">
          <div
            v-for="(item,index) in deatil"
            :key="index"
            class="titleFlex-item"
            @click="deatilClick(index)"
            :class="{active:index == curreindex}"
          >{{item}}</div>
      </div>
    </zklNavBar>
  </div>
</template>
<script>
import zklNavBar from "../../../components/common/NavBar/zklNavBar";
export default {
  components: {
    zklNavBar
  },
  data() {
    return {
      deatil: ["商品", "参数", "评论", "推荐"],
      curreindex:0
    };
  },
  methods: {
    /**监听事件 */
    deatilClick(e) {
      this.curreindex = e;
      this.$emit("DetaileClick",e)
    },
    backClick(){
        this.$router.back()
    },
  }
};
</script>
<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  height: 44px;
  background:white;
}
.titleFlex {
  display: flex;
  font-size: 15px;
}
.titleFlex-item {
  flex: 1;
}
.active {
  color: #ff8198;
}
.imgTop{
    margin-top: 10px;
}
</style>


