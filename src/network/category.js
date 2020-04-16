import {request} from './request'
// 侧边栏的数据
export const getCategory = ()=>request({
    url:'/category'
})

// 内容部分
export const getSubcategory = (maitKey)=>request({
    url:'subcategory',
    params:{
        maitKey
    }
})