<template>
  <div class="cart">
    <navBar :title="cartList" class="nav"></navBar>
    <bettorScroll class="bettosr">
      <goodShop ref="NoList" v-for="item in shopList" :shoplist="item" :key="item.iid"></goodShop>
    </bettorScroll>
    <submitBar class="post" @defallList="defallList"></submitBar>
  
  </div>
</template>
<script>
import navBar from "../../components/common/NavBar/navBar";
import bettorScroll from "../../components/content/bettor-scroll";
import goodShop from "./childreen/goodShop";
import submitBar from "./childreen/submitBar";
export default {
  components: {
    navBar,
    bettorScroll,
    goodShop,
    submitBar
  },
  data() {
    return {};
  },
  computed: {
    cartList() {
      return "购物车" + "(" + this.$store.state.countList.length + ")";
    },
    shopList() {
      return this.$store.state.countList;
    }
  },
  methods: {
    defallList() {
        let list = this.$refs.NoList
        list.forEach((item)=>{
            // console.log(item.checked)
            item.checked = !item.checked
        })
    }
  }
};
</script>
<style scoped>
.cart {
  height: 100vh;
}
.nav {
  background: #ff8198;
}
.bettosr {
  overflow: hidden;
  position: absolute;
  top: 45px;
  bottom: 100px;
  right: 0;
  left: 0;
}
.post {
  position: fixed;
  bottom: 8%;
}
</style>


