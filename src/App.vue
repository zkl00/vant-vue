<template>
  <div id="app">
    <keep-alive  exclude="Details">
      <router-view />
    </keep-alive>
    <Tabbar></Tabbar>
  </div>
</template>
<script>
import Tabbar from "./components/common/Tabbar/tabbar";
export default {
  components: {
    Tabbar
  }
};
</script>

<style lang="scss">
@import "./assets/css/index.css";
</style>
