const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,

  devServer: {
    open:true,
    host:'localhost',
    port:8080,

    proxy: {
      '/api': {
        target: 'http://leju.bufan.cloud/',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        },
      }
    }
  },
});
