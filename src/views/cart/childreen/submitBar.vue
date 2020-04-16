<template>
  <van-submit-bar :price="cartCount"   button-text="提交订单"  @submit="onSubmit" :loading="fly">
    <van-checkbox v-model="checked" @click="defallList">全选</van-checkbox>
  </van-submit-bar>
</template>
<script>
import { SubmitBar,Checkbox,CheckboxGroup } from "vant";
import { setTimeout } from 'timers';
export default {
  components: {
    [SubmitBar.name]: SubmitBar,
    [Checkbox.name]:Checkbox,
    [CheckboxGroup.name]:CheckboxGroup
  },
  data(){
      return{
          checked:'checked',
          fly:false,
      }
  },
  // 计算总价格
  computed:{
    cartCount(){
      return this.$store.state.countList.filter(item=>{
        // console.log(item.checked)
        return item.checked
      }).reduce((pve,item)=>{  
        return pve +  item.newPrice * item.counts 
      },0)
    }
  },
  methods:{
      onSubmit(){},
      defallList(){
          this.$emit("defallList")
      },
  }
};
</script>

