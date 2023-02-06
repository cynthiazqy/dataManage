'use strict';

const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

const name = 'hello vue2~~';
const port = 8088;

module.exports = {
  transpileDependencies: true,
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  lintOnSave: process.env.NODE_ENV === 'development',
  devServer: {
    port: port, // 自定义访问端口
    open: false
    // TODO 以下放开 编译不通过
    // overlay: {
    //   warnings: false,
    //   errors: true
    // }
    // proxy: {
    // '/api': {
    //   target: 'https:www.baidu.com',
    //   changeOrigin: true
    // }
    // }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      },
      extensions: ['.ts', '.tsx', '.js', '.vue', '.json']
    },
    // TODO module 或可提出来 用chainWebpack链式调用
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/]
          }
        }
      ]
    }
  }
};
