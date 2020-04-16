<template>
    <div>
        <div class="massageList">
             <van-popup v-model="show" position="left" :style="{ width: '100%',height:'100%' }" closeable
  close-icon="close" >
               <goodShop  v-for="item in shopList" :shoplist="item" :key="item.iid"/>
             </van-popup>
        <div class="icon">
          <van-icon name="shopping-cart-o" />
        </div>
        <div class="mass" @click="mychart">我的购物车</div>
        </div>
         <div class="massageList">
        <div class="icon">
          <van-icon name="pause-circle-o" />
        </div>
        <div class="mass">下载购物App</div>
        </div>
        </div>
    </div>
</template>
<script>
import { Icon,Popup,NoticeBar } from "vant";
import goodShop from '../../cart/childreen/goodShop'
export default {
    components:{
          [Icon.name]:Icon,
          [Popup.name]:Popup,
          [NoticeBar.name]:NoticeBar,
          goodShop
    },
    data(){
        return{
            show:false
        }
    },
    computed:{
         shopList() {
      return this.$store.state.countList;
    }
    },
    methods:{
        mychart(){
            this.show = !this.show
        }
    }
}
</script>
<style scoped>
.massageList{
    display: flex;
    padding: 10px;
}
.icon{
    font-size: 25px;
}
.mass{
    width: 100%;
    padding: 0 10px;
    font-size: 18px;
    border-bottom: 1px solid #eee;
}
</style>


