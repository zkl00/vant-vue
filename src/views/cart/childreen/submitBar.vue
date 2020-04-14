<template>
  <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
    <van-checkbox v-model="checked" @click="defallList">全选</van-checkbox>
  </van-submit-bar>
</template>
<script>
import { SubmitBar,Checkbox,CheckboxGroup } from "vant";
export default {
  components: {
    [SubmitBar.name]: SubmitBar,
    [Checkbox.name]:Checkbox,
    [CheckboxGroup.name]:CheckboxGroup
  },
  data(){
      return{
          checked:'checked'
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

