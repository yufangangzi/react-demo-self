const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  module: {
    mode: 'development',
    entry: {
      app: './src/index.js',
    }, // 入口文件
    output: {
      filename: '[name].js',
      path: path.join(__dirname, './dist'),
      publishPath: path.join(__dirname, './')
    }, //输出配置
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
    hot: true
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