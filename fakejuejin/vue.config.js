const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  // devServer:{
  //   proxy: { // 代理
  //       '/API': {
  //         ws: false ,
  //         target: 'http://43.156.106.129',
  //         changeOrigin: true,
  //         secure: false,
  //         pathRewrite: {
  //           '/API': '/'
  //         }
  //       }}}
})
