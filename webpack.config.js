const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    mode:'development',
    entry: ['./src/App.tsx'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    devtool: "source-map",
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    module: {
        rules: [
          {
            test: /\.(tsx|ts|js|jsx)?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
          },
          {
            test: /\.scss$/,
            use: [
              { loader: 'style-loader' },
              { loader: 'css-loader' },
              { loader: 'sass-loader' },
            ],
          },
        ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'src/assets', to: 'assets' }
        ],
      }),
      new HtmlWebPackPlugin({
          template: "./pubilc/index.html"
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
      // contentBase: path.resolve(__dirname, 'dist'), // 运行代码的目录
      port: "8181", //端口号
      open: true, // 自动开启浏览器
      compress: true, // 对网络请求文件进行压缩处理
      // 服务器代理，解决开发环境下跨域问题
      // proxy: {
      //   // 一旦devserver（5000）服务器接收到 /api/xxx的请求，就会把请求转发到另外一个服务器（3000）
      //   '/api': {
      //       target: 'http://localhost:3000',
      //       // 发送请求时，请求路径重写：将/api/xxx -> /xxx(去掉/api)
      //       pathRewrite:{
      //         '^/api': ''
      //       }
      //   }
      // }
    },
};