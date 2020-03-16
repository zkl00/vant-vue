<template>
  <div id="app">
    <router-view/>
      <Tabbar></Tabbar>
  </div>
</template>
<script>
import Tabbar from './components/common/Tabbar/tabbar'
export default {
  components:{
    Tabbar
  }
  
}
</script>

<style lang="scss">
@import './assets/css/index.css';
</style>
