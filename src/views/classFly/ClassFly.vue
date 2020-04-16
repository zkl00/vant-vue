<template>
  <div class="classfly">
    <NavBar :title="title" class="title"></NavBar>
    <bettorScroll class="scrollOV" ref="scroll">
      <div class="box">
      <sidebar :barlist="list" @itemBar="getcontent" class="het"></sidebar>
      <contentItem :content="indexListContent"></contentItem>
      </div>
    </bettorScroll>
  </div>
</template>
<script>
import NavBar from '../../components/common/NavBar/navBar'
import bettorScroll from '../../components/content/bettor-scroll'
import sidebar from './children/sidebar'
import contentItem from './children/contentItem'
import {getCategory,getSubcategory} from '../../network/category'
export default {
  components: {
    NavBar,
    bettorScroll,
    sidebar,
    contentItem
  },
  data() {
    return {
      title:"商品分类",
      list:[],
      indexListContent:[],
    };
  },
  mounted() {
    this.getcate()
  },
  methods: {
     async getcate(){
       const res = await getCategory()
      //  console.log(res)
       this.list = res.data.category.list
       this.getcontent(0)
    },
     async getcontent(index){
      let maitKey =  this.list[index].maitKey
       const res = await getSubcategory(maitKey)
      //  console.log(res)
       this.indexListContent = res.data.list
       this.$refs.scroll.scroll.refresh()
    },
  }
};
</script>
<style scoped>
.classfly{
  height: 100vh;
  position: relative;
}
.het{
  height: 100%;
}
.box{
  display: flex;
}
.title{
   background: #ff8198;
   color: white;
}
.scrollOV{
  position: absolute;
  height: 86%;
  overflow: hidden;
  top: 45px;
  bottom: 100px;
  left: 0;
  right: 0;
}
</style>


