# reactUI
typesctipt + react 创建自己的组件库


npm i webpack webpack-cli -D
npm i react react-dom --save 
npm i webpack-dev-server --save
npm i --D html-webpack-plugin
npm i clean-webpack-plugin -D
npm i -D webpack-merge

npm i -D @babel/core @babel/preset-env @babel/preset-react 
npm i -D @babel/plugin-transform-runtime @babel/runtime @babel/runtime-corejs2

@babel/core babelbabel的核心库
@babel/preset-env 把es6,es7语法转换成es5。bebel7以上的版本只用这一个预设包就可以实现语法的转换，已经废弃了preset-stage-0，preset-stage-1，preset-stage-2等这些包。但是这个包还不能转换es6，es7的一些新特性比如Array.includes()，这就需要我们使用@babel/plugin-transform-runtime了
@babel/preset-react 把react语法转换为es5
@babel/plugin-transform-runtime 支持一些es6，es7的新语法

npm i -D babel-loader
npm i -D style-loader css-loader url-loader file-loader less less-loader


<link rel="stylesheet" href="/static/css/reset.min.css">
重新运行，你会发现找不到/static/css/reset.min.css。因为这里只是在index.html中引入了文件，但是并没有在webpack中处理静态文件，我们需要把static目录的内容通过webpack插架
编译构建到包里；此处需要用到copy-webpack-plugin

npm install -D copy-webpack-plugin