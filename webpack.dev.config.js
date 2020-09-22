const path = require('path')
const { merge } = require('webpack-merge')
const BaseConfig = require('./webpack.base.config.js')

const DevConfig = {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 8000,
        historyApiFallback: true,
    }
}
module.exports = merge(DevConfig,BaseConfig)