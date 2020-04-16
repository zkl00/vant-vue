<template>
    <div class="massage">
        <van-popup v-model="show" position="bottom" :style="{ height: '30%' }" >
            <van-divider
  :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
>
  当前积分为0  
</van-divider>
 <van-notice-bar  color="#1989fa"  text="通知内容:易积分广
 告平台通过长期积累的终端设备信息数据，利用先进的数据挖掘算法，
 让广告主根据设备型号特征、移动运营商特征、媒体
 分类特征以及手机操作偏好 特性进行有选择、有
 效率的投放" left-icon="volume-o" background="#fff7cc" />
 </van-popup>
        <div class="massageList">
        <div class="icon">
           <van-icon name="comment-o" />
        </div>
        <div class="mass"  @click="mess">我的消息</div>
        </div>
         <div class="massageList">
        <div class="icon">
           <van-icon name="gift-o" />
        </div>
        <div class="mass" @click="shop">积分商城</div>
        </div>
         <div class="massageList">
        <div class="icon">
            <van-icon name="vip-card-o" />
        </div>
        <div class="mass" @click="membership">会员卡</div>
        </div>
        <DialogList ref="dialog" />
        </div>
    </div>
</template>
<script>
import { Icon ,Dialog,NoticeBar,Popup,Divider} from 'vant';
import DialogList from './DialogList'
export default {
    components:{
        [Icon.name]:Icon,
        [Dialog.name]:Dialog,
        [NoticeBar.name]:NoticeBar,
        [Popup.name]:Popup,
        [Divider.name]:Divider,
        DialogList

    },
    data(){
        return{
            show:false
        }
    },
    methods:{
        // 消息
        mess(action, done){
         Dialog.confirm({
        title: '我的消息',
        message: `<van-dialog v-model="show" title="标题" show-cancel-button>
  <img src="https://img.yzcdn.cn/vant/apple-3.jpg" style="width:150px"/>
</van-dialog>获取一部手机`,
        })
        .then(() => {
            // console.log("object")
        })
        .catch(() => {
            // on cancel
        });
        },
        // 商城
        shop(){
            this.show = true
        },
        //VIP
        membership(){
            this.$refs.dialog.show = true
        },
    }
}
</script>
<style scoped>
.massage{
    border-bottom: 10px solid #eee;
}
.massageList{
    display: flex;
    padding: 10px;
}
.icon{
    font-size: 25px;
}
.mass{
    width: 100%;
    padding: 0 10px;
    font-size: 18px;
    border-bottom: 1px solid #eee;
}

</style>


