<template>
  <div class="title">
    <div class="titleBox">
      <div class="phoneBox">
        <div class="img">
          <van-uploader v-model="fileList" :after-read="afterRead" multiple :max-count="1" />
        </div>
        <div class="logon">
          <p class="long-font">登录/注册</p>
          <p class="icon">
            <van-icon name="phone-o" />暂无手机绑定
          </p>
        </div>
      </div>
      <div class="right">></div>
    </div>
  </div>
</template>
<script>
import { Uploader, Icon } from "vant";
export default {
  components: {
    [Uploader.name]: Uploader,
    [Icon.name]: Icon
  },
  data() {
    return {
      fileList: [
        {
          url: "https://img.yzcdn.cn/vant/leaf.jpg"
          //   status: "uploading",
          //   message: "上传中..."
        }
      ]
    };
  },
  methods: {
    afterRead(file) {
      console.log(file);
    }
  }
};
</script>
<style scoped>
.title {
  width: 100%;
  background: #ff8198;

}
.titleBox {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}
.phoneBox {
  display: flex;
  /* align-items: center; */
}
.logon {
  width: 100px;
  text-align: center;
  color: #fff;
}
.long-font {
  font-size: 15px;
  padding: 10px 0;
}
.icon {
  font-size: 13px;
}
.right{
     color: #fff;

}
</style>
