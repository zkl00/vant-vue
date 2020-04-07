<template>
    <div class="recommend">
        <div class="recommend-Warp" v-for="(item,index) in recommend" :key="index">
                <a :href="item.link">
                    <img :src="item.image" alt="">
                    <p>{{item.title}}</p>
                </a>
                
        </div>
    </div>
</template>
<script>
export default {
    props:{
        recommend:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        
    }
}
</script>
<style scoped>
.recommend{
    display: flex;
    font-size: 14px;
    justify-content: space-between;
    text-align: center;
    /* padding: 10px 0; */
    padding: 0 10px;
    padding-bottom: 10px;
    border-bottom: 8px solid #eeee;
    
}
.recommend-Warp{
    padding: 10px 0;
}
.recommend-Warp img{
    width: 80px;
    height: 80px;
}
.recommend-Warp p{
    color: #000;
    font-size: 13px;
}
</style>


