// packages/textarea/index.js

// 导入组件，组件必须声明 name
import EditTable from './src'

// 为组件添加 install 方法，用于按需引入
EditTable.install = function(Vue) {
  Vue.component(EditTable.name, EditTable)
}

export default EditTable
