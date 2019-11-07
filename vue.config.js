module.exports = {
  // 将 examples 目录添加为新的页面
  pages: {
    index: {
      // page 的入口
      entry: 'examples/main.js',
      // 模板来源
      template: 'public/index.html',
      // 输出文件名
      filename: 'index.html'
    }
  },
  devServer: {
    open: true
  },
  // 强制内联CSS
  css: { extract: false }
  // 扩展 webpack 配置，使 packages 加入编译
  // chainWebpack: config => {
  //   config.module
  //     .rule('js')
  //     .include
  //     .add('/packages')
  //     .end()
  //     .use('babel')
  //     .loader('babel-loader')
  //     .tap(options => {
  //       // 修改它的选项...
  //       return options
  //     })
  // }
}
