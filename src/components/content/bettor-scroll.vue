<template>
  <div ref="content">
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.content, {
      probeType: 3,
      click: true,
      pullUpLoad: true //下拉加载更多
    });
    // 监听下拉的位置
    this.scroll.on("scroll", e => {
      // console.log(e)
    this.scroll &&  this.$emit("HieghtScrollemny",e)
    });
    //下拉加载更多事件
    this.scroll.on("pullingUp", () => {

     this.scroll && this.$emit("onLond");
      //这个是下拉加载完后重启启动
      //   scroll.finishPullUp();
    });
  },
  methods: {
      /**回到原点 */
      scrollTo(x,y,time=500){
          this.scroll.scrollTo(x,y,time)
      },
      /**清空下拉的次数 */
    emptyCentent() {
        this.scroll.finishPullUp()
    }
  }
};
</script>

