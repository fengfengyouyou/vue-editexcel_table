// packages / index.js

// 导入单个组件
import EditTable from './editTable/index'
import BackTop from './BackTop/index'
// 以数组的结构保存组件，便于遍历
const components = [
  EditTable,
  BackTop
]
// 定义 install 方法
const install = function(Vue) {
  if (install.installed) return
  install.installed = true
  // 遍历并注册全局组件
  components.map(component => {
    Vue.component(component.name, component)
  })
}
// const componentsObj = components.reduce((pre, cur) => {
//   pre[cur.name] = cur
//   return pre
// }, {})
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {
  EditTable,
  BackTop
}

export default {
  // 导出的对象必须具备一个 install 方法
  install
  // 组件列表
  // EditTable,
  // BackTop
}
