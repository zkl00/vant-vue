<template>
    <van-sidebar v-model="activeKey" @change="onchlange">
  <van-sidebar-item :title="item.title"   v-for="item in barlist" :key="item.maitKey" />
</van-sidebar>
</template>
<script>
// import {}
import { Sidebar, SidebarItem } from 'vant';
export default {
    props:{
        barlist:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        [Sidebar.name]:Sidebar,
        [SidebarItem.name]:SidebarItem
    },
    data(){
        return{
            activeKey:0,
        }
    },
    methods:{
        onchlange(index){
            console.log(index)
            this.$emit("itemBar",index)
        }
    }
}
</script>

