import {request} from './request'

export const home = ()=>request({
    url:'/home/multidata'
}) 
export const getHOmeGoodes = (type,page)=>request({
    url:"/home/data",
    params:{
        type,
        page
    }
})
export const detailstList = (iid)=>request({
    url:'/detail',
    params:{
        iid
    }
})