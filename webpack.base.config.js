const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const BaseConfig = {
    mode: 'development',
    entry: './src/index.js',
    output:{
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        // 设置别名
        alias: {
            '@src': path.resolve('src'),// 这样配置后 @ 可以指向 src 目录
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/, //屏蔽不需要处理的文件（文件夹）（可选）
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                            },
                            
                        }
                    },
                    'less-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000, // url-loader 包含file-loader，这里不用file-loader, 小于10000B的图片base64的方式引入，大于10000B的图片以路径的方式导入
                    name: 'static/img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000, // 小于10000B的图片base64的方式引入，大于10000B的图片以路径的方式导入
                    name: 'static/fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    plugins: [
        // 将打包后的 js 文件自动导入到 html 文件中
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: path.resolve(__dirname, 'dist/index.html'),
            inject: true, // true：默认值，script标签位于html文件的 body 底部
        }),
        new CleanWebpackPlugin(),
    ],
}
module.exports = BaseConfig