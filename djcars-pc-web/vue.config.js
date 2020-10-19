/*
 * @Author: YJ
 * @Date: 2020-08-12 15:44:09
 * @
# Description: 
 */
//vue.config.js
// const data = require('数据路径')

module.exports = {
    publicPath: '/', // 根路径
    outputDir: 'dist', // 构建输出目录
    assetsDir: 'assets', // 静态资源目录(js,css,img,fonts)
    lintOnSave: false, // 是否开启eslint保存检测,有效值（true||false||error)
    devServer: {
        open: true, // 有效值（true||false) npm run serve后,是否打开浏览器
        // host: 'localhost', // 配置端口号
        host: '127.0.0.1',
        port: 8000,
        https: false, // 有效值(true||false)
        hotOnly: true, // 热更新
        compress: true,
        disableHostCheck: true, //webpack4.0 开启热更新
        proxy: {
            // 配置跨域
            '/api': {
                // target: 'http://localhost:8080/',
                target: 'http://djcars.cn', // 正式服务器地址
                ws: true, // 是否跨域
                changeOrigin: true,
                // 重写地址
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },

    // pluginOptions: {
    //     "sass-resources-loader": {
    //         // 'preProcessor': 'scss',
    //         'patterns': [
    //             path.resolve(__dirname, './src/assets/css/*.scss'),
    //         ]
    //     }
    // },

    // 在服务内部的所有其他中间件之前， 提供执行自定义中间件的功能。 这可以用来配置自定义处理程序
    // before(app) {
    //     //   加载本地数据
    //     // app.get('api/data', (req, res) => {
    //     //   res.json()
    //     // })
    //     // 在浏览器输入localhost:8080/api/data就可以拿到数据了
    // }
}