const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    // entry: './src/index.js',
    // 入口
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    // 输出
    output: {
        // filename: 'bundle.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map', // 开启source map跟踪打包前js文件
    // 热重载配置
    devServer: {
        contentBase: './dist'
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webapck output management'
        }), // 创建html文件自动引入bundle文件的插件
        new CleanWebpackPlugin(), // 清理输出dist文件夹
    ],
    // 加载资源
    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/,
    //             use: [
    //                 'style-loader',
    //                 'css-loader'
    //             ]
    //         },
    //         {
    //             test: '\.(png|svg|jpg\gif)$',
    //             use: [
    //                 'file-loader'
    //             ]
    //         },
    //         {
    //             test: '\.(woff|woff2|eot|tff|otf)',
    //             use: [
    //                 'file-loader'
    //             ]
    //         },

    //     ]
    // }
}