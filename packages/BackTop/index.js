// packages/textarea/index.js

// 导入组件，组件必须声明 name
import BackTop from './src'

// 为组件添加 install 方法，用于按需引入
BackTop.install = function(Vue) {
  Vue.component(BackTop.name, BackTop)
}

export default BackTop
