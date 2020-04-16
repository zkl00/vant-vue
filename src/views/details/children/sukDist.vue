<template>
    <van-sku
  v-model="show"
  :sku="sku"
  :goods="goods"
  :goods-id="goodsId"
  :quota="quota"
  :quota-used="quotaUsed"
  :hide-stock="sku.hide_stock"
  :message-config="messageConfig"
  @buy-clicked="onBuyClicked"
  @add-cart="onAddCartClicked"
/>
</template>
<script>
import {suk} from 'vant'
export default {
    components:{
        [suk.name]:suk
    },
    data(){
        return{
            show:false
        }
    }
}
</script>

