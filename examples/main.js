import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import EditTable from '../packages/index.js'
// import { EditTable, BackTop } from '../packages/index'
// // 注册组件库
// // console.log(EditTable)
Vue.use(EditTable)
// Vue.use(BackTop)

new Vue({
  render: h => h(App)
}).$mount('#app')
