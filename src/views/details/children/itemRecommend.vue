<template>
    <div class="redcommend">
        <div class="hot">热门推荐</div>
        <div class="Good-wap">
        <div v-for="(item,index) in commend" :key="index" class="warpList">
              <img :src="item.image" alt="">
               <div class="botton">
                <p class="title">{{item.title}}</p>          
            </div>
             <div class="good_wap">
           <span class="price">￥{{item.price}}</span>
           <span class="cfav"><img src="../../../assets/img/common/collect.svg" alt="">{{item.cfav}}</span>
       </div>
       </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    props:{
        commend:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>
<style scoped>
.redcommend{
    padding: 0 10px;
}
.hot{
    font-size: 18px;
    padding: 10px 0;
}
.warpList{
    width:48%;
}
.Good-wap{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px 0;
}
.Good-wap img{
    width: 100%;
    height: 240px;
}
.botton{
    font-size: 14px;
    text-align: center;
}
.title{
    width: 100%;
    /* flex-wrap: nowrap; */
    white-space: nowrap;
    overflow:hidden;
     text-overflow: ellipsis;
}
.good_wap{
    display: flex;
     padding: 0 10px 5px 0;
}
.good_wap span{
    display: inline-block;
    padding: 0 10px;
}
.price{
      color: #ff5777;
      padding: 0 20px;
      font-size: 12px;
}
.cfav{
    position: relative;
    /* margin-left: 30px; */
    display: flex;
    align-items: center;
     font-size: 12px;

}
.cfav img{
    position: absolute;
    left: 84%;
    width: 15px;
    height: 15px;
    top: 0px;
}
</style>


