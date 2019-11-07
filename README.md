# vue-editexcel_table

> 基于Vue的颜色选择器插件

[DEMO 演示](http://vue-color-picker.rxshc.com/)

## 安装

``` bash
$ npm install vue-editexcel_table -S
```
## 使用

在 `main.js` 文件中引入插件并注册

``` bash
# main.js
import vue-editexcel_table from 'vue-editexcel_table'
Vue.use(vue-editexcel_table)
```

在项目中使用 vue-editexcel_table

```js
<template>
  <editTable :abilityTree="tableData" />
</template>
<script>
  export default {
    data () {
      return {
        tableData: [
          {
            "Id": "bb02762b-7f04-4928-8918-0c058d862c85",
            "ParentId": null,
            "Sort": 2,
            "Code": "02",
            "Name": "第一行",
            "Type": "Project",
            "Checked": false,
            "SelectCount": null,
            "CheckStatus": 0,
            "IsChanged": false,
            "Children": [
              {
                "Id": "addd0007-40d8-4136-9b9d-e0edd802cef2",
                "ParentId": "bb02762b-7f04-4928-8918-0c058d862c85",
                "Sort": 1,
                "Code": "02-01",
                "Name": "略略略",
                "Type": "Task",
                "Checked": false,
                "SelectCount": null,
                "CheckStatus": 0,
                "IsChanged": false,
                "Children": [
                  {
                    "Id": "dd88524b-99a0-4e12-8525-866f3897c5e0",
                    "ParentId": "addd0007-40d8-4136-9b9d-e0edd802cef2",
                    "Sort": 1,
                    "Code": "02-01-01",
                    "Name": "嘻嘻",
                    "Type": "Ability",
                    "Checked": false,
                    "SelectCount": null,
                    "CheckStatus": 0,
                    "IsChanged": false,
                    "Children": [],
                    "Demand": null,
                    "Li": null,
                    "Lj": null,
                    "Lk": null
                  },
                  {
                    "Id": "c9222365-94fd-4a28-8df5-caa3659a9d2d",
                    "ParentId": "addd0007-40d8-4136-9b9d-e0edd802cef2",
                    "Sort": 2,
                    "Code": "02-01-02",
                    "Name": "嘻嘻",
                    "Type": "Ability",
                    "Checked": false,
                    "SelectCount": null,
                    "CheckStatus": 0,
                    "IsChanged": false,
                    "Children": [],
                    "Demand": null,
                    "Li": null,
                    "Lj": null,
                    "Lk": null
                  },
                  {
                    "Id": "821e3345-642c-4018-9a79-293958fc2139",
                    "ParentId": "addd0007-40d8-4136-9b9d-e0edd802cef2",
                    "Sort": 3,
                    "Code": "02-01-03",
                    "Name": "第三行",
                    "Type": "Ability",
                    "Checked": false,
                    "SelectCount": null,
                    "CheckStatus": 0,
                    "IsChanged": false,
                    "Children": [],
                    "Demand": null,
                    "Li": null,
                    "Lj": null,
                    "Lk": null
                  },
                  {
                    "Id": "410d1859-4e70-46c8-86ed-807d7e252cac",
                    "ParentId": "addd0007-40d8-4136-9b9d-e0edd802cef2",
                    "Sort": 4,
                    "Code": "02-01-04",
                    "Name": "第三行",
                    "Type": "Ability",
                    "Checked": false,
                    "SelectCount": null,
                    "CheckStatus": 0,
                    "IsChanged": false,
                    "Children": [],
                    "Demand": null,
                    "Li": null,
                    "Lj": null,
                    "Lk": null
                  }
                ],
                "Demand": null,
                "Li": null,
                "Lj": null,
                "Lk": null
              },
              {
                "Id": "78fd0978-2ed8-49e6-bcc6-1bd609c347f5",
                "ParentId": "bb02762b-7f04-4928-8918-0c058d862c85",
                "Sort": 2,
                "Code": "02-02",
                "Name": "啦啦啦",
                "Type": "Task",
                "Checked": false,
                "SelectCount": null,
                "CheckStatus": 0,
                "IsChanged": false,
                "Children": [],
                "Demand": null,
                "Li": null,
                "Lj": null,
                "Lk": null
              },
              {
                "Id": "bf74247f-84d5-4373-a0e8-11e3cdbcce8e",
                "ParentId": "bb02762b-7f04-4928-8918-0c058d862c85",
                "Sort": 3,
                "Code": "02-03",
                "Name": "第二行",
                "Type": "Task",
                "Checked": false,
                "SelectCount": null,
                "CheckStatus": 0,
                "IsChanged": false,
                "Children": [
                  {
                    "Id": "7c83805e-4892-4181-bcff-a4a69ae44279",
                    "ParentId": "bf74247f-84d5-4373-a0e8-11e3cdbcce8e",
                    "Sort": 1,
                    "Code": "02-03-01",
                    "Name": "么么哒",
                    "Type": "Ability",
                    "Checked": false,
                    "SelectCount": null,
                    "CheckStatus": 0,
                    "IsChanged": false,
                    "Children": [],
                    "Demand": null,
                    "Li": null,
                    "Lj": null,
                    "Lk": null
                  }
                ],
                "Demand": null,
                "Li": null,
                "Lj": null,
                "Lk": null
              },
              {
                "Id": "ea22c538-71c6-458e-a3bf-0120f71bb94b",
                "ParentId": "bb02762b-7f04-4928-8918-0c058d862c85",
                "Sort": 4,
                "Code": "02-04",
                "Name": "22",
                "Type": "Task",
                "Checked": false,
                "SelectCount": null,
                "CheckStatus": 0,
                "IsChanged": false,
                "Children": [
                  {
                    "Id": "dbfa9848-adf7-445c-96b7-094b45e14e6e",
                    "ParentId": "ea22c538-71c6-458e-a3bf-0120f71bb94b",
                    "Sort": 1,
                    "Code": "02-04-01",
                    "Name": "888",
                    "Type": "Ability",
                    "Checked": false,
                    "SelectCount": null,
                    "CheckStatus": 0,
                    "IsChanged": false,
                    "Children": [],
                    "Demand": null,
                    "Li": null,
                    "Lj": null,
                    "Lk": null
                  },
                  {
                    "Id": "12feff0a-f3f1-4773-a80b-d46988c76feb",
                    "ParentId": "ea22c538-71c6-458e-a3bf-0120f71bb94b",
                    "Sort": 2,
                    "Code": "02-04-02",
                    "Name": "嘻嘻",
                    "Type": "Ability",
                    "Checked": false,
                    "SelectCount": null,
                    "CheckStatus": 0,
                    "IsChanged": false,
                    "Children": [],
                    "Demand": null,
                    "Li": null,
                    "Lj": null,
                    "Lk": null
                  },
                  {
                    "Id": "a021fce0-604b-4395-80b7-12c8cb906478",
                    "ParentId": "ea22c538-71c6-458e-a3bf-0120f71bb94b",
                    "Sort": 3,
                    "Code": "02-04-03",
                    "Name": "3333",
                    "Type": "Ability",
                    "Checked": false,
                    "SelectCount": null,
                    "CheckStatus": 0,
                    "IsChanged": false,
                    "Children": [],
                    "Demand": null,
                    "Li": null,
                    "Lj": null,
                    "Lk": null
                  },
                  {
                    "Id": "19a1827a-18b3-4ac3-8c53-8539f7bd3367",
                    "ParentId": "ea22c538-71c6-458e-a3bf-0120f71bb94b",
                    "Sort": 4,
                    "Code": "02-04-04",
                    "Name": "666",
                    "Type": "Ability",
                    "Checked": false,
                    "SelectCount": null,
                    "CheckStatus": 0,
                    "IsChanged": false,
                    "Children": [],
                    "Demand": null,
                    "Li": null,
                    "Lj": null,
                    "Lk": null
                  },
                  {
                    "Id": "ac898ee3-9c80-4b60-a9ec-80cf545110c6",
                    "ParentId": "ea22c538-71c6-458e-a3bf-0120f71bb94b",
                    "Sort": 5,
                    "Code": "02-04-05",
                    "Name": "222",
                    "Type": "Ability",
                    "Checked": false,
                    "SelectCount": null,
                    "CheckStatus": 0,
                    "IsChanged": false,
                    "Children": [],
                    "Demand": null,
                    "Li": null,
                    "Lj": null,
                    "Lk": null
                  }
                ],
                "Demand": null,
                "Li": null,
                "Lj": null,
                "Lk": null
              }
            ],
            "Demand": null,
            "Li": null,
            "Lj": null,
            "Lk": null
          }
        ]
      }
    }
  }
</script>
```

## 特点
1. excel表格基本功能（增删改）、新增拖拽移动和上移下移
2. 提供以 `npm` 的形式安装提供全局注册组件以及按需引入
3. 支持局部注册组件

## 选项
1. 你可以通过在props设置以下属性来配置组件具体启用哪些功能
2. abilityTree：能力数据（必传参数）
3. tier：勾选层级，0:无法勾选，1-3:第1-3级。默认为0
4. defaultKeys：初始化时自动勾选的id数组，勾选层级不为0时生效
5. isEdit：是否可编辑
6. baseParams：编辑状态下所有请求都会附带的基础参数
7. addRequest、deleteRequest、editRequest、moveRequest、dragRequest：增、删、改、上下移、拖拽请求的url和参数
8. taskAbility：典型工作任务各课程对应能力的对象，例子：{id：1}
9. showRequire：是否开启能力要求勾选
10. showLevel：是否开启学习水平勾选
11. catlogId，abilityId：项目或者任务、能力id
12. showTotal：是否开启数据统计
13. onlyShowChecked：是否仅显示已勾选项目
14. onlyShowChecked：各项目的勾选次数对象，例子：{id：1}
15. limitNum：限制最多勾选几次时发出警告
16. canDelete：是否开启删除功能

## 通过.sync实现双向绑定属性
1. :projectNum.sync
2. :taskNum.sync
3. :abilityNum.sync

