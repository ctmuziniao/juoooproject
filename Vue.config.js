module.exports = {
    devServer : {
        proxy:{
            "/wp": {
                target: "http://m.wpiao.cn/",
                changeOrigin: true,
                pathRewrite:{
                    "^/wp": ''
                }
            }
        }
    }
}