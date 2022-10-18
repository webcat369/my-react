const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    mode:'development',
    entry: ['./src/index.tsx'],
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
            //正则表达式，表示.css后缀的文件
            test:/\.css$/,
            //针对css文件使用的loader，有先后顺序，数组项越靠后越先执行(从下到上，从右到左)
            use:['style-loader','css-loader']
          },
          {
            test: /\.scss$/,
            use: [
              { loader: 'style-loader' },
              { loader: 'css-loader' },
              { loader: 'sass-loader' },
            ],
          },
          {
            test: /\.(jpg|png|gif|bmp|jpeg)$/,
            use: {
              loader: "url-loader",
              options: {
                name: 'image/[name][hash:9].[ext]', // 对打包之后的图片名称进行加密
                esModule: false,
                limit: 8 * 1024, // 将小于8kb的图片用based64处理
              }
            },
            type: 'javascript/auto' //转换 json 为 js
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
      client: {
        // 当出现编译错误或警告时，在浏览器中显示全屏覆盖。
        overlay: true,
        // 在浏览器中以百分比显示编译进度。
        progress: false,
        // 告诉 dev-server 它应该尝试重新连接客户端的次数。当为 true 时，它将无限次尝试重新连接。
        reconnect: true,
      },
      // 项目使用了react-router-dom的BrowserRouter,所以此项必须设置为true。否则会导致配置的路由404
      // 也就是说，当使用h5的history API时，必须将 historyApiFallback设置为true。
      historyApiFallback: true,
      // 启用gzip 压缩
      compress: true,
      port: 9000,
      // 启用webpack的模块热替换
      hot: true,
      // 告诉 dev-server 在服务器已经启动后打开默认的浏览器
      open: true,
      // 代理---处理跨域转发
      proxy: {
        // 一旦devserver（5000）服务器接收到 /api/xxx的请求，就会把请求转发到另外一个服务器（3000）
        '/api': {
            target: 'http://47.93.114.103:6688/manage',
            changeOrigin: true, //是否跨域
            // 发送请求时，请求路径重写：将/api/xxx -> /xxx(去掉/api)
            pathRewrite: { '^/api': '/' }
        }
      }
    },
};