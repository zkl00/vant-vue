<template>
    <div class="itemContnt">
        <!-- {{content}} -->
        <div class="itembox" v-for="(item,index) in content" :key="index">
            <div class="title">
                <a :href="item.link"></a>
                <img :src="item.image" alt="">
                <p>{{item.title}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        content:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>
<style scoped>
.itemContnt{
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: space-around;
    padding: 10px 0;
}
.itembox{
    width: 33.3%;
}
.title{
    font-size: 15px;
}
.title img{
    width: 80px;
    /* height: 100%; */
}
</style>

