<template>
    <van-nav-bar
     :title="title"
    :left-text="leftText"
     :left-arrow="leftArrow"
     class="color"
/>
</template>
<script>
import {NavBar} from 'vant'
export default {
    props:{
        title:{
            type:String
        },
        leftText:{
            type:String,
            default(){
                return "" 
            }
        },
        leftArrow:{
            type:Boolean,
            default(){
                return false
            },
        },
    },
    components:{
        [NavBar.name]:NavBar
    }
}
</script>
<style>
.van-nav-bar__title{
    color: white !important;
}
</style>


