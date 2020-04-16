<template>
    <div>
      <NavBar :title="title" class="nav"></NavBar>
      <myTitle></myTitle>
      <myPrice></myPrice>
      <massage></massage>
      <AppList/>
    </div>
</template>
<script>
import NavBar from '../../components/common/NavBar/navBar'
import myTitle from './childer/myTitle'
import myPrice from './childer/myPrice'
import massage from './childer/message'
import AppList from './childer/AppList'
export default {
    components:{
        NavBar,
        myTitle,
        myPrice,
        massage,
        AppList
    },
    data(){
        return{
            title:"我的"
        }
    }
}
</script>
<style scoped>
.nav {
  background: #ff8198;
}
</style>


