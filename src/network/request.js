import axios from 'axios'


export  function request(confing){
    
    return new Promise((resLove,resobj)=>{
        //创建axios实例
        const install = axios.create({
            
        })
        //响应拦截
        install.interceptors.request.use((confing)=>{
            // console.log(confing)
            return confing
        })
        //请求拦截
        install.interceptors.response.use((confing)=>{
            return confing.data
        })

        // 真正的请求拦截
        install(confing).then((res)=>{
            // console.log(res)
            resLove(res)
        }).catch((error)=>{
            resobj(error)
        })
    })

}