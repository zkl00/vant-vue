<template>
  <div class="navTab">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="centen">
      <slot name="centen"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.navTab{
    display: flex;
    height: 49px;
    line-height: 49px;
    text-align: center;
}
.left{
    width: 40px;
    /* background: pink; */
}
.right{
    width: 40px;
    /* background: burlywood; */
}
.centen{
    flex: 1;
    /* background: orange; */
}
</style>


