module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    devServer: {
        proxy: {
            '/api': { // 匹配所有以'/api'开头的请求路径
                target: 'http://2a8778o883.imdo.co/travel/', // 代理目标的基础路径
                changeOrigin: true, // 支持跨域
                pathRewrite: {
                    '^/api': '' // 重写路径: 去掉路径开头的'/api'
                }
            },
        }
    }
}