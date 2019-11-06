import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import EditTable from '../packages/index.js'
// 注册组件库
// console.log(EditTable)
Vue.use(EditTable)

new Vue({
  render: h => h(App)
}).$mount('#app')
