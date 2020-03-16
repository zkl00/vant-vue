import axios from 'axios'


export  function request(confing){
    
    return new Promise((resLove,resobj)=>{
        //创建axios实例
        const install = axios.create({
            baseURL:"http://123.207.32.32:8000/api/wh",
        })
        //响应拦截
        install.interceptors.response.use((confing)=>{
            return confing.data
        })
        //请求拦截
        install.interceptors.response.use((confing)=>{
            return confing.data
        })

        // 真正的请求拦截
        install(confing).then((res)=>{
            resLove(res)
        }).catch((error)=>{
            resobj(error)
        })
    })

}