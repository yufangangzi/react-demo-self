const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
  }, // 入口文件
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './dist')
  }, //输出配置
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react']
                }

            }
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    loader: "file-loader",
                    options: {}
                }
            ]
        },
        {
            test: /\.css$/,
            use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' },

            ]
        },
    ]
  }, // 放置loader 加载器
  devServer: {
    host: 'localhost',
    port: 8999,
    hot: true,
    historyApiFallback: {
      index: '/index.html' //与output的publicPath有关(HTMLplugin生成的html默认为index.html)
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      chunks: ['app'],
      cache: true,
      meta: {}
    }),
  ]
}