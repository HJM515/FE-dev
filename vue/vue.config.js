const path = require('path')

module.exports = {
  outputDir: path.resolve(__dirname, '../web'), // [构建文件的目录, 默认值 'dist']
  indexPath: '../views/site/index.php', // [生成index.html的输出路径(相对于outputDir), 默认值 'index.html']
  publicPath: '', // [部署应用包的基本URL, 默认值 '/'] 所有资源别链接为相对路径, 构建包可部署在任意路径 (多页应用 / history路由模式避免使用 相对路径)

  configureWebpack: config => {
    if (process.env.NODE_ENV !== 'development') { // 非开发环境, 去掉console
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }
    config.performance = {
      hints: false // 去掉打包文件过大，影响web性能的警告
    }
  },
  devServer: {
    // contentBase: path.resolve(__dirname, '../web'), // [静态文件路径, 默认值 path.join(__dirname, 'public')] 多个目录放在数组中
    proxy: {
      '/': {
        target: process.env.PROXY_TARGET,
        ws: false,
        changeOrigin: true
      }
    }
  }
}
