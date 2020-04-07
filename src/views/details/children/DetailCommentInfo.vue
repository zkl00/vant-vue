<template>
    <div class="DetailCommentInfo" v-if="Object.keys(detailcommentInfo).length  !== 0">
        <div class="DetailCommentInfo_title">
            <div>用户评论</div>
            <div>
                更多
            </div>
        </div>
        <!-- 评论的内容 -->
        <div class="DetailCommentInfo_comtnent">
            <div class="DetailCommentInfo_imgwarp">
                <div class="userImge">
                    <img :src="detailcommentInfo.user.avatar" alt="">
                </div>
                <div class="username">
                      <span>{{detailcommentInfo.user.uname}}</span>
                </div>
            </div>
            <div class="defalut">
                <p>{{detailcommentInfo.content}}</p>
            </div>
            <div class="detaile_int">
                <div class="timeGET">{{detailcommentInfo.created | getTime}}</div>
                <div>
                    {{detailcommentInfo.style}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {formatDate} from '../../../common/utils'
export default {
    props:{
        detailcommentInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    filters:{
        getTime(vlaue){
            console.log(vlaue)
            let dates = new Date(vlaue * 1000)
            return formatDate(dates,'yyyy-MM-dd')
        }
    }
}
</script>
<style scoped>
.DetailCommentInfo{
    width: 100%;
}
.DetailCommentInfo_title{
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    font-size: 17px;
    height: 40px;
    align-items: center;
    border-bottom:1px solid #f2f5f8;
}
.DetailCommentInfo_comtnent{
    width: 100%;
     border-bottom:5px solid #f2f5f8;
}
.DetailCommentInfo_imgwarp{
    display: flex;
    align-items: center;
    padding: 10px 0;
}
.defalut{
     padding: 0 20px;
}
.userImge{
    padding: 0 20px;
}
.userImge img{
        width: 42px;
    height: 42px;
    border-radius: 50%;
}
.username,.defalut{
    font-size: 16px;
}
.detaile_int{
    display: flex;
    padding: 20px 13px;
    /* justify-content: space-between; */

    font-size: 16px;
}
.timeGET {
    padding: 0px 10px;
}
</style>


