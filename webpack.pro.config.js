const path = require('path')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BaseConfig = require('./webpack.base.config.js')


const ProConfig = { 
    mode: 'production',
    plugins: [
        // 将打包后的 js 文件自动导入到 html 文件中
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: path.resolve(__dirname, 'dist/index.html'),
            inject: true, // true：默认值，script标签位于html文件的 body 底部
            hash: true, // 在打包的资源插入html会加上hash
            //  html 文件进行压缩
            minify: {
                removeComments: true,               //去注释
                collapseWhitespace: true,           //压缩空格
                removeAttributeQuotes: true         //去除属性引用
            }
        }),
    ],
}
module.exports = merge(BaseConfig,ProConfig)