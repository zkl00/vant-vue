<template>
    <div class="price">
        <div class="priceBox">
            <div class="bod">
                <h1>0.00<span>元</span></h1>
                <p>我的余额</p>
            </div>
             <div class="bod">
                <h1>0<span>个</span></h1>
                <p>我的优惠</p>
            </div>
             <div class="bod">
                <h1>0<span>分</span></h1>
                <p>我的积分</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.priceBox{
   display: flex;
   justify-content: space-around;
   border-bottom: 10px solid #eeee;

}
.bod{
    width: 33.3;
     border-right: 1px solid #eeee;
     text-align: center;
     padding:  20px;
}
.bod:nth-last-child(1){
    border: none;
}
.priceBox h1{
    font-size: 25px;
    color: red;
}
.priceBox span{
    font-size: 18px;
    color: black;
    font-weight: normal;
}
.priceBox p{
    font-size: 16px;
}
</style>


