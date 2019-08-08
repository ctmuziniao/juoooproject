module.exports = {
    devServer : {
        proxy:{
            "/wp": {
                target: "http://wwww.wpiao.cn/",
                changeOrigin: true,
                pathRewrite:{
                    "^/wp": ''
                }
            }
        }
    }
}