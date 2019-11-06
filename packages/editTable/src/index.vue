<!--
abilityTree：能力数据（必传参数）
tier：勾选层级，0:无法勾选，1-3:第1-3级。默认为0
defaultKeys：初始化时自动勾选的id数组，勾选层级不为0时生效
isEdit：是否可编辑
baseParams：编辑状态下所有请求都会附带的基础参数
addRequest、deleteRequest、editRequest、moveRequest、dragRequest：增、删、改、上下移、拖拽请求的url和参数
taskAbility：典型工作任务各课程对应能力的对象，例子：{id：1}
showRequire：是否开启能力要求勾选
showLevel：是否开启学习水平勾选
catlogId，abilityId：项目或者任务、能力id
showTotal：是否开启数据统计
onlyShowChecked：是否仅显示已勾选项目
onlyShowChecked：各项目的勾选次数对象，例子：{id：1}
limitNum：限制最多勾选几次时发出警告
canDelete：是否开启删除功能
 -->
<template>
  <div class="po-r">
    <!-- <div>{{checkedTree}}</div> -->
    <!-- <div>{{staticNum}}</div> -->
    <div v-if="showTotal" class="total-row mb-10">
      <div class="text-bold">数据统计：</div>
      <div class="color-light">工作项目（<span class="color-primary">{{ projectNum }}个</span>）</div>
      <div class="color-light ml-10">工作任务：（<span class="color-primary">{{ taskNum }}个</span>）</div>
      <div class="color-light ml-10">职业能力：（<span class="color-primary">{{ abilityNum }}个</span>）</div>
    </div>
    <div v-show="isEdit||tableData.length>0" class="flex-table">
      <div class="table-header">
        <div class="header-project">
          <div class="itme-title">工作项目</div>
          <!-- <div class="data-numer">合计：<span class="num-color">{{projectNum}}</span></div> -->
        </div>
        <div class="header-children">
          <div class="header-task">
            <div class="itme-title">工作任务</div>
            <!-- <div class="data-numer">合计：<span class="num-color">{{taskNum}}</span></div> -->
          </div>
          <div class="header-ability">
            <div class="ability-title">
              <div class="itme-title">职业能力（技能、工具、方法、要求、知识）</div>
              <!-- <div class="data-numer">合计：<span class="num-color">{{abilityNum}}</span></div> -->
            </div>
            <div v-if="showRequire" class="header-level">
              <div class="level-title">能力要求</div>
              <div class="level-box">
                <div>高</div>
                <div>中</div>
              </div>
            </div>
            <div v-if="showLevel" class="header-level">
              <div class="level-title">学习水平</div>
              <div class="level-box">
                <div>中职</div>
                <div>高职</div>
                <div>本科</div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="itemChildren">
        <div class="header-task">工作任务</div>
        <div class="itemChildren">
          <div class="header-ability">职业能力</div>
        </div>
      </div> -->
      </div>
      <div class="flexBox">
        <template v-for="(project,i) in tableData">
          <div v-if="!onlyShowChecked||project.CheckStatus" :key="i" class="flexRow borProj" :class="[taskAbility[project.Id]?'black':'white']" @contextmenu.prevent.stop="rightClick($event,project)">
            <div class="itemCode object-area" :style="staticNum[project.Id]&&{color:returnColor(staticNum[project.Id])}" :data-obj="toJson(project)" @mousedown="beforeDown(project,$event)">
              <div class="taskText just-c">
                <i v-if="tier>=1&&project.Id" class="fa check-icon" :class="project.CheckStatus|statusFilter" @click="()=>{checkBox(project);}" />
                <span v-if="project.Id||isEdit">{{ isEdit?isAddZero(i+1):project.Code||isAddZero(i+1) }}
                  <!-- {{i+1}} -->
                </span>
              </div>
            </div>
            <div class="itemName object-area" :class="isEdit&&'no-padding'" :data-obj="toJson(project)" :style="staticNum[project.Id]&&{color:returnColor(staticNum[project.Id])}" @mousedown="beforeDown(project,$event)">
              <!-- <textarea v-model="project.Name" v-if="isEdit" style="height:40px" class="text-area"></textarea> -->
              <div v-if="project.focus" class="input-box">
                <el-input v-model="project.Name" type="textarea" autosize resize="none" class="text-input mlr-5" :data-focus="project.focus" :readonly="!isEdit" @input="changeStatus(project)" @change="updateAdd(project,$event)" @keydown.enter.native.prevent="updateAdd(project,$event)" />
              </div>
              <div v-else class="projText just-c">{{ project.Name }}</div>
            </div>
            <div class="itemChildren">
              <template v-for="(task,j) in project.Children">
                <div v-if="!onlyShowChecked||task.CheckStatus" :key="j" class="flexRow" :class="[j==(project.Children.length-1)?'borItemL':'borItem',taskAbility[task.Id]?'black':'white']" @contextmenu.prevent.stop="rightClick($event,task)">
                  <div class="itemCode object-area" :style="staticNum[task.Id]&&{color:returnColor(staticNum[task.Id])}" :data-obj="toJson(task)" @mousedown.stop="beforeDown(task,$event)">
                    <div class="taskText just-c">
                      <i v-if="tier>=2&&task.Id" class="fa check-icon" :class="task.CheckStatus|statusFilter" @click="()=>{checkBox(task,project);}" /><span v-if="task.Id||isEdit">
                        {{ isEdit?(isAddZero(i+1)+'-'+isAddZero(j+1)):task.Code||(isAddZero(i+1)+'-'+isAddZero(j+1)) }}
                        <!-- ::{{staticNum[task.Id]}} -->
                        <!-- {{(i+1)+'-'+(j+1)}} -->
                      </span>
                    </div>
                  </div>
                  <div class="itemName object-area" :class="isEdit&&'no-padding'" :data-obj="toJson(task)" :style="staticNum[task.Id]&&{color:returnColor(staticNum[task.Id])}" @mousedown.stop="beforeDown(task,$event)">
                    <div v-if="task.focus" class="input-box">
                      <el-input v-model="task.Name" type="textarea" autosize resize="none" class="text-input mlr-5" :readonly="!isEdit" :data-focus="task.focus" @input="changeStatus(task)" @change="updateAdd(task,$event)" @keydown.enter.native.prevent="updateAdd(task,$event)" />
                    </div>
                    <div v-else class="taskText just-c">{{ task.Name }}</div>
                  </div>
                  <div class="itemChildren">
                    <template v-for="(ability,k) in task.Children">
                      <div v-if="!onlyShowChecked||ability.CheckStatus" :key="k" class="flexRow" :class="[k==(task.Children.length-1)?'borItemL':'borItem',taskAbility[ability.Id]?'black':'white']" :style="staticNum[ability.Id]&&{color:returnColor(staticNum[ability.Id])}" @contextmenu.prevent.stop="rightClick($event,ability)">
                        <div class="itemCodeA object-area" :data-obj="toJson(ability)" @mousedown.stop="beforeDown(ability,$event)">
                          <div class="abilText just-c"><i v-if="tier>=3&&ability.Id" class="fa check-icon" :class="ability.CheckStatus|statusFilter" @click="()=>{checkBox(ability,task,project);}" /><span v-if="ability.Id||isEdit">
                            {{ isEdit?(isAddZero(i+1)+'-'+isAddZero(j+1)+'-'+isAddZero(k+1)): ability.Code||(isAddZero(i+1)+'-'+isAddZero(j+1)+'-'+isAddZero(k+1)) }}
                            <!-- {{(i+1)+'-'+(j+1)+'-'+(k+1)}} -->
                          </span>
                          </div>
                        </div>
                        <div class="itemNameA object-area" :class="isEdit&&'no-padding'" :data-obj="toJson(ability)" @mousedown.stop="beforeDown(ability,$event)">
                          <div v-if="ability.focus" class="input-box">
                            <el-input v-model="ability.Name" type="textarea" autosize resize="none" :readonly="!isEdit" class="text-input ability-input" :data-focus="ability.focus" @change="updateAdd(ability,$event)" @input="changeStatus(ability)" @keydown.enter.native.prevent="updateAdd(ability,$event)" />
                          </div>
                          <div v-else class="abilText">{{ ability.Name }}</div>
                        </div>
                        <div v-if="showRequire" class="level-box">
                          <div class="item-level">
                            <div class="abilText radio">
                              <el-radio v-model="ability.Demand" label="1" :disabled="!isEdit" @change="(n,$event)=>{changeStatus(ability);updateAdd(ability,$event,n)}" />
                            </div>
                          </div>
                          <div class="item-level">
                            <div class="abilText radio">
                              <el-radio v-model="ability.Demand" label="0" :disabled="!isEdit" @change="(n,$event)=>{changeStatus(ability);updateAdd(ability,$event,n)}" />
                            </div>
                          </div>
                        </div>
                        <div v-if="showLevel" class="level-box">
                          <div class="item-level" @click.stop="domClick(ability,$event)">
                            <div v-if="ability.focus" class="input-box">
                              <el-input v-model="ability.Li" type="textarea" autosize resize="none" :readonly="!isEdit" class="text-input ability-input" @change="updateAdd(ability,$event)" @input="changeStatus(ability)" @keydown.enter.native.prevent="updateAdd(ability,$event)" />
                            </div>
                            <div v-else class="abilText">{{ ability.Li }}</div>
                          </div>
                          <div class="item-level" @click.stop="domClick(ability,$event)">
                            <div v-if="ability.focus" class="input-box">
                              <el-input v-model="ability.Lj" type="textarea" autosize resize="none" :readonly="!isEdit" class="text-input ability-input" @change="updateAdd(ability,$event)" @input="changeStatus(ability)" @keydown.enter.native.prevent="updateAdd(ability,$event)" />
                            </div>
                            <div v-else class="abilText">{{ ability.Lj }}</div>
                          </div>
                          <div class="item-level" @click.stop="domClick(ability,$event)">
                            <div v-if="ability.focus" class="input-box">
                              <el-input v-model="ability.Lk" type="textarea" autosize resize="none" :readonly="!isEdit" class="text-input ability-input" @change="updateAdd(ability,$event)" @input="changeStatus(ability)" @keydown.enter.native.prevent="updateAdd(ability,$event)" />
                            </div>
                            <div v-else class="abilText">{{ ability.Lk }}</div>
                          </div>
                        </div>
                      </div>
                    </template>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
      <div v-show="showMenu" id="fixedMenu" ref="fixedMenu" class="fixed-menu">
        <ul>
          <li @click="topMove">向上移一行</li>
          <li @click="bottomMove">向下移一行</li>
          <hr>
          <li @click="topAdd()">在上方插入一行</li>
          <li @click="bottomAdd()">在下方插入一行</li>
          <hr>
          <li @click="copyItem()">复制</li>
          <li @click="pasteItem()">粘贴</li>
          <hr>
          <li v-if="canDelete" class="delete" @click="beforeDeleteCurent">删除所在行和子集</li>
        </ul>
      </div>
    </div>
    <div v-show="!isEdit&&tableData.length==0" class="text-c ptb-60">
      <img src="/img/暂无内容.png" alt="">
    </div>
    <BackTop />
    <div id="drag-icon" />
  </div>
</template>

<script>
import BackTop from './BackTop'
export default {
  name: 'EditTable',
  components: { BackTop },
  filters: {
    statusFilter(status) {
      const statusMap = {
        0: 'fa-square-o',
        1: 'fa-check-square',
        2: 'fa-minus-square'
      }
      return statusMap[status]
    }
  },
  // props: ['tier', 'defaultKeys', 'abilityTree', 'isEdit', 'baseParams'],
  props: {
    // 勾选层级，0:无法勾选，1-3:第1-3级
    tier: {
      type: Number,
      default: 0
    },
    // 默认勾选id数组，只在勾选状态下生效
    defaultKeys: {
      type: Array,
      default: () => []
    },
    // 表对象数组
    abilityTree: {
      type: Array,
      default: () => []
    },
    // 是否可编辑
    isEdit: {
      type: Boolean,
      default: false
    },
    // 编辑状态下请求参数
    baseParams: {
      type: Object,
      default: () => ({})
    },
    // 编辑状态下添加url
    addRequest: {
      type: Object,
      default: () => ({})
    },
    // 编辑状态下修改url
    editRequest: {
      type: Object,
      default: () => ({})
    },
    deleteRequest: {
      type: Object,
      default: () => ({})
    },
    moveRequest: {
      type: Object,
      default: () => ({})
    },
    taskAbility: {
      type: Object,
      default: () => ({})
    },
    dragRequest: {
      type: Object,
      default: () => ({
        url: '/VocationalAbility/Move'
      })
    },
    showRequire: {
      type: Boolean,
      default: false
    },
    showLevel: {
      type: Boolean,
      default: false
    },
    catlogId: {
      type: String,
      default: '481f7e6e-374d-4002-8123-14064d75f69c'
    },
    abilityId: {
      type: String,
      default: 'd895143f-c7b6-466e-b241-1b56fb3a79b8'
    },
    showTotal: {
      type: Boolean,
      default: false
    },
    onlyShowChecked: {
      type: Boolean,
      default: false
    },
    checkedTree: {
      type: Object,
      default: () => ({})
    },
    limitNum: {
      type: Number,
      default: 3
    },
    canDelete: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      abilityCatelog: [],
      tableData: [],
      showMenu: false,
      handleObj: {},
      cloneData: {
        CheckStatus: 0,
        Checked: false,
        IsChanged: false,
        focus: 0,
        Code: '',
        Id: '',
        Name: '',
        ParentId: null,
        SelectCount: null,
        Type: 'Project',
        Children: [
          {
            CheckStatus: 0,
            Checked: false,
            IsChanged: false,
            focus: 0,
            Code: '',
            Id: '',
            Name: '',
            ParentId: '',
            SelectCount: null,
            Type: 'Task',
            Children: [
              {
                CheckStatus: 0,
                Checked: false,
                Children: [],
                focus: 0,
                Code: '',
                Id: '',
                Sort: 0,
                Name: '',
                ParentId: '',
                SelectCount: null,
                Type: 'Ability',
                IsChanged: false,
                Demand: '1'
              }
            ]
          }
        ]
      },
      projectNum: 0,
      taskNum: 0,
      abilityNum: 0,
      currentObj: {},
      stopUpdate: false,
      loading: false,
      staticNum: {},
      numColor: ['#333', '#4971F1', '#FF3300'],
      copyData: ''
    }
  },
  watch: {
    abilityTree(n) {
      // console.log('数据变哈U',n)
      // this.tableData = JSON.parse(JSON.stringify(this.abilityTree))
      this.addIndex()
    },
    defaultKeys(n) {
      // console.log('更新', n)
      // debugger
      this.addIndex()
      this.addDefaultKey()
    },
    isEdit(n) {
      this.addIndex()
    },
    // taskAbility(n){
    //   console.log('典型工作任务对应能力',n)
    // },
    checkedTree(n) {
      if (JSON.stringify(this.checkedTree) === '{}') {
        this.staticNum = {}
      } else {
        // let result = {}
        // let arr = Object.keys(this.checkedTree)
        // arr.forEach(e => {
        //   // result[e] = this.checkedTree[e]
        //   let obj = this.findObj(e, this.tableData)
        //   if (obj) {
        //     // result[obj.Id] = this.checkedTree[e]
        //     if (obj.Children && obj.Children.length > 0) {
        //       this.setSelectNum(obj.Children, this.checkedTree[e], result)
        //     }
        //   }
        // })
        // arr.forEach(e => {
        //   if (result[e]) {
        //     result[e] += this.checkedTree[e]
        //   } else {
        //     result[e] = this.checkedTree[e]
        //   }
        // })
        // console.log(result)
        this.staticNum = n
      }
    }
    // onlyShowChecked(n) {
    //   console.log('显示已选', n)
    // }
    // isEdit(n) {
    //   if (n) {
    //     this.editTextArea()
    //   }
    // }
  },
  mounted() {
    this.addIndex()
    this.addDefaultKey()
    document.addEventListener('click', () => {
      // var fixedMenu = document.querySelector('#fixedMenu')
      // fixedMenu.style.display = 'none'
      this.showMenu = false
      // this.handleObj = {}
    })
    // document.documentElement
    this.$refs.fixedMenu.addEventListener('click', e => {
      e.stopPropagation()
    })
    // })
  },
  destroyed() {
    window.removeEventListener('click', () => {
      this.showMenu = false
      // this.handleObj = {}
    })
    window.removeEventListener('scroll', () => {
      this.showMenu = false
      // this.handleObj = {}
    })
  },
  methods: {
    async getTree(params) {
      const res = await this.$http.get('/VocationalAbility/GetAbilityTree', { params })
      if (res.Result.Status) {
        this.$message({
          message: '登录异常，请重试！',
          type: 'error',
          duration: 3000
        })
        return
      }
      this.abilityCatelog = res.Result.Children
    },
    isAddZero(num) {
      return num < 10 ? '0' + num : num
    },
    toJson(obj) {
      return JSON.stringify(obj)
    },
    copyItem() {
      this.showMenu = false
      this.copyData = this.handleObj.Name
    },
    pasteItem() {
      this.showMenu = false
      this.handleObj.Name = this.copyData
      this.handleObj.IsChanged = true
      this.updateAdd(this.handleObj)
    },
    // 拖拽处理函数
    dragFun(data, ev) {
      const downTime = new Date().getTime()
      // var disX = 0
      // var disY = 0

      // var oEvent = ev || event
      var oDiv = document.getElementById('drag-icon')
      let timer = null
      timer = setTimeout(() => {
        oDiv.style.display = 'block'
      }, 500)
      // const { left: rootLeft, top: rootTop } = this.$el.getBoundingClientRect()
      // oDiv.style.left = oEvent.clientX - rootLeft + 'px'
      // oDiv.style.top = oEvent.clientY - rootTop + 'px'
      // disX = oEvent.clientX - rootLeft
      // disY = oEvent.clientY - rootTop
      // var oRoot = document.documentElement || document.body
      // let { scrollLeft, scrollTop } = oRoot
      // console.log(rootLeft, rootTop,this.$el.offsetWidth + rootLeft)
      document.onmousemove = function(ev) {
        this.$el.classList.add('none-select')
        oDiv.style.display = 'block'
        const {
          left: rootLeft,
          top: rootTop
        } = this.$el.getBoundingClientRect()
        var oEvent = ev || event
        var l = oEvent.clientX - rootLeft
        var t = oEvent.clientY - rootTop
        // console.log(l, t, rootTop)
        if (l < 0) {
          l = 0
        } else if (l > this.$el.offsetWidth - oDiv.offsetWidth) {
          l = this.$el.offsetWidth - oDiv.offsetWidth
        }

        if (t < 0) {
          t = 0
        } else if (t > this.$el.offsetHeight - oDiv.offsetHeight) {
          t = this.$el.offsetHeight - oDiv.offsetHeight
        }

        oDiv.style.left = l + 'px'
        oDiv.style.top = t + 'px'
      }.bind(this)

      document.onmouseup = async ev => {
        const upTime = new Date().getTime()
        if (upTime - downTime < 500) {
          document.onmousemove = null
          document.onmouseup = null
          clearTimeout(timer)
          oDiv.style.display = 'none'
          this.$el.classList.remove('none-select')
          return
        }
        clearTimeout(timer)
        oDiv.style.display = 'none'
        this.$el.classList.remove('none-select')
        document.onmousemove = null
        document.onmouseup = null
        var oEvent = ev || event
        var l = oEvent.clientX
        var t = oEvent.clientY
        if (!data.Id) {
          this.$message({
            showClose: true,
            message: '当前操作项目为留空项目，不可操作！',
            type: 'warning',
            duration: 2000
          })
          return
        }
        // console.log(l, t, oDiv.style.left, oDiv.style.top)
        const areaArr = Array.prototype.slice.call(
          document.querySelectorAll('.object-area')
        )
        const element = areaArr.find(e => {
          const { left, top } = e.getBoundingClientRect()
          const width = e.offsetWidth
          const height = e.offsetHeight
          return l >= left && l <= left + width && t >= top && t <= top + height
        })
        if (element) {
          // console.log(element)
          const handleObj = JSON.parse(element.dataset.obj)
          if (element.dataset.obj === JSON.stringify(data)) {
            return
          }
          if (!handleObj.ParentId && handleObj.Type !== 'Project') {
            this.$message({
              showClose: true,
              message: '当前操作项目为留空项目，不可操作！',
              type: 'warning',
              duration: 2000
            })
            return
          }
          if (handleObj.Type !== data.Type) {
            this.$message({
              showClose: true,
              message: '只能同级之间移动！',
              type: 'warning',
              duration: 2000
            })
            return
          }
          // const { left, top } = element.getBoundingClientRect()
          // const width = element.offsetWidth
          // const height = element.offsetHeight
          // 删除拖动的对象
          let arr = []
          const index = data.numIndex
          if (data.ParentId) {
            arr = this.findObj(data.ParentId, this.tableData).Children
          } else {
            arr = this.tableData
          }
          console.log(arr, index)
          // if (handleObj.ParentId != data.ParentId)
          arr.splice(index, 1)
          // this.addNumIndex(this.tableData)
          // end

          // this.handleObj = data
          // await this.deleteCurent()
          this.handleObj = handleObj
          // if (t < top + height / 2 || !handleObj.Id) {
          // console.log('放上边')
          this.topAdd(JSON.parse(JSON.stringify(data)))
          // } else {
          //   // console.log('放下边')
          //   this.bottomAdd(JSON.parse(JSON.stringify(data)))
          // }
          // this.addNumIndex(this.tableData)
          console.log('删除后还有么', this.tableData)
          const resultObj = this.findObj(data.Id, this.tableData)
          const parentObj = this.findObj(resultObj.ParentId, this.tableData)
          resultObj.IsChanged = true
          console.log('结果对象', resultObj, parentObj)
          this.moveItem(resultObj)
        } else {
          console.log('位置不对')
        }
      }

      return false
    },
    // 拖拽请求
    async moveItem(obj, e, Demand) {
      if (obj.Type !== 'Project' && !obj.ParentId) {
        this.$message({
          type: 'error',
          message: '该项父级为空，请先添加父级再进行此操作！'
        })
        return
      }
      if (this.loading) {
        return
      } else {
        this.loading = true
      }
      // if (!this.stopUpdate) {
      //   obj.focus = 0
      // }
      this.handleObj = obj
      // const { arr, index } = this.strikeHandle()
      // 修改删除操作
      if (!obj.IsChanged) {
        console.log('hello你好，你没改内容')
        this.loading = false
        // 如果未修改，不提交
        return
      }
      if (!obj.Name) {
        // 内容为空，提示
        this.$message({
          type: 'error',
          message: '内容不能为空！'
        })
        this.loading = false
        return
      }
      let params = this.getParams(obj, Demand)
      // console.log(params)
      if (this.baseParams) {
        // 父组件是否传入参数
        params = {
          ...params,
          ...this.baseParams
        }
      }
      try {
        let res = null
        res = await this.$http.post(this.dragRequest.url, {
          ...params,
          ...this.dragRequest.params
        })
        if (res.Result) {
          this.addNumIndex(this.tableData)
          obj.IsChanged = false
        } else {
          throw new Error('123')
        }
      } catch (err) {
        console.log(err)
        this.$message({
          type: 'error',
          message: '操作失败，请重试！'
        })
      } finally {
        this.loading = false
      }
    },
    returnColor(num) {
      if (num < 3) {
        return this.numColor[num - 1]
      } else {
        return this.numColor[2]
      }
    },
    setSelectNum(arr, num, result) {
      arr.forEach(e => {
        result[e.Id] = num
        if (e.Children && e.Children.length > 0) {
          this.setSelectNum(e.Children, num, result)
        }
      })
    },
    domClick(data, e) {
      // return
      if (!this.isEdit) {
        return
      }
      // console.log(this.currentObj.Code==data.Code&&this.currentObj.ParentId==data.ParentId)
      if (
        this.currentObj.Code !== data.Code ||
        this.currentObj.ParentId !== data.ParentId
      ) {
        this.currentObj.focus = 0
      }
      // console.log(data)
      this.currentObj = data
      data.focus = 1
      this.$nextTick(() => {
        // let oInput = Array.prototype.slice.call(
        //   document.querySelectorAll('.el-textarea__inner')
        // )
        // console.log(data, oInput)
        // let nextInput = oInput.find(e => e.dataset.focus == 1)
        // if (nextInput) {
        //   nextInput.focus()
        // }
        // console.log(e.target)
        if (e.target.className === 'el-textarea__inner') {
          e.target.focus()
        } else if (
          e.target.getElementsByClassName('el-textarea__inner').length
        ) {
          const input = e.target.getElementsByClassName('el-textarea__inner')
          input[0].focus()
        }
      })
    },
    beforeDown(data, e) {
      // return
      if (!this.isEdit) {
        return
      }
      // console.log(this.currentObj.Code==data.Code&&this.currentObj.ParentId==data.ParentId)
      if (
        this.currentObj.Code !== data.Code ||
        this.currentObj.ParentId !== data.ParentId
      ) {
        this.currentObj.focus = 0
      }
      // console.log(data)
      this.currentObj = data
      data.focus = 1
      this.$nextTick(() => {
        // let oInput = Array.prototype.slice.call(
        //   document.querySelectorAll('.el-textarea__inner')
        // )
        // console.log(data, oInput)
        // let nextInput = oInput.find(e => e.dataset.focus == 1)
        // if (nextInput) {
        //   nextInput.focus()
        // }
        // console.log(e.target)
        if (e.target.className === 'el-textarea__inner') {
          e.target.focus()
        } else if (
          e.target.getElementsByClassName('el-textarea__inner').length
        ) {
          const input = e.target.getElementsByClassName('el-textarea__inner')
          input[0].focus()
        }
      })
      this.dragFun(data)
    },
    handleRadio(n, obj) {
      obj.Demand = n
      // console.log(n)
    },
    keyListen(obj, event) {
      // this.send() // 发送文本
      event.preventDefault() // 阻止浏览器默认换行操作
      return false
    },
    async updateAdd(obj, e, Demand) {
      if (obj.Type !== 'Project' && !obj.ParentId) {
        this.$message({
          type: 'error',
          message: '该项父级为空，请先添加父级再进行此操作！'
        })
        return
      }
      if (this.loading) {
        return
      } else {
        this.loading = true
      }
      // if (!this.stopUpdate) {
      //   obj.focus = 0
      // }
      this.handleObj = obj
      const { arr, index } = this.strikeHandle()
      // 修改删除操作
      if (!obj.IsChanged) {
        console.log('hello你好，你没改内容')
        this.loading = false
        // 如果未修改，不提交
        return
      }
      if (!obj.Name) {
        // 内容为空，提示
        this.$message({
          type: 'error',
          message: '内容不能为空！'
        })
        this.loading = false
        return
      }
      let params = this.getParams(obj, Demand)
      // console.log(params)
      if (this.baseParams) {
        // 父组件是否传入参数
        params = {
          ...params,
          ...this.baseParams
        }
      }
      try {
        let res = null
        if (!params.Id) {
          res = await this.$http.post(this.addRequest.url, {
            ...params,
            ...this.addRequest.params
          })
        } else {
          res = await this.$http.post(this.editRequest.url, {
            ...params,
            ...this.editRequest.params
          })
        }
        if (res.Result) {
          if (!params.Id) {
            obj.Id = res.Result
            obj.Children.forEach(e => {
              e.ParentId = obj.Id
            })
            console.log('修改后的对象', obj)
            this.addNumIndex(this.tableData)
            if (e && e.keyCode) {
              arr[index + 1].focus = 1
              this.$nextTick(() => {
                const oInput = Array.prototype.slice.call(
                  document.querySelectorAll('.el-textarea__inner')
                )
                const nextInput = oInput.find(e => e.dataset.focus === 1)
                if (nextInput) {
                  nextInput.focus()
                }
              })
            }
          }
          obj.IsChanged = false
        } else {
          throw new Error('123')
        }
      } catch (err) {
        console.log(err)
        this.$message({
          type: 'error',
          message: '操作失败，请重试！'
        })
      } finally {
        this.loading = false
      }
    },
    getParams(obj, Demand) {
      // 根据选择的层级返回对应的修改、添加所需参数
      let result = {}
      if (obj.Type === 'Ability') {
        result = {
          Sort: obj.numIndex + 1,
          Name: obj.Name,
          AbilityCatelog: obj.ParentId,
          Id: obj.Id,
          TableId: this.abilityId,
          Li: obj.Li,
          Lj: obj.Lj,
          Lk: obj.Lk,
          Demand: obj.Demand
        }
        if (Demand) {
          result.Demand = Demand
        }
      } else {
        result = {
          Sort: obj.numIndex + 1,
          Name: obj.Name,
          Parent: obj.ParentId,
          Id: obj.Id,
          TableId: this.catlogId
        }
      }
      // result = {
      //   ...result,
      //   ...this.baseParams
      // }
      return Object.assign(result, this.baseParams)
    },
    getEdit() {
      // 获取已修改项，废弃方案，没用
      this.tableData.forEach((e, i) => {
        let hadEdit = {}
        hadEdit = e.IsChanged ? e : {}
        if (e.Children) {
          e.Children.forEach((p, q) => {
            if (JSON.stringify(hadEdit) === '{}') {
              hadEdit = p.IsChanged ? p : {}
            } else {
              hadEdit.Children = p.IsChanged ? p : {}
            }
            if (p.Children) {
              p.Children.forEach((m, n) => {})
            }
          })
        }
      })
    },
    changeStatus(obj) {
      // 修改内容，修改标识字段为true
      obj.IsChanged = true
    },
    beforeDeleteCurent(e) {
      // e.stopPropagation()
      this.showMenu = false
      this.$confirm('此操作将会删除所有已勾选该项的记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          // console.log(this.handleObj)
          this.deleteCurent()
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    async deleteCurent() {
      console.log(this.handleObj)
      // 删除当前选中项
      const { arr, index } = this.strikeHandle()
      if (!this.handleObj.Id && index === arr.length - 1) {
        this.$message({
          type: 'warning',
          message: '当前项为空数据，无法删除！'
        })
        return
      }
      this.showMenu = false
      // console.log(arr, index)
      // console.log(this.handleObj)
      let params = {}
      // 根据所选项的层级操作不同数据表
      if (this.handleObj.Type === 'Ability') {
        params = {
          TableId: this.abilityId,
          Id: this.handleObj.Id
        }
      } else {
        params = {
          TableId: this.catlogId,
          Id: this.handleObj.Id
        }
      }
      try {
        if (this.handleObj.Id) {
          await this.$http.get(this.deleteRequest.url, {
            params: { ...params, ...this.deleteRequest.params }
          })
        }
        arr.splice(index, 1)
        this.addNumIndex(this.tableData)
      } catch (err) {
        // console.log(err)
        this.$message({
          type: 'error',
          message: '操作失败，请重试！'
        })
      }
    },
    topAdd(assignObj) {
      // 向上添加
      if (this.handleObj.Type !== 'Project' && !this.handleObj.ParentId) {
        this.$message({
          type: 'warning',
          message: '此项还没有父级，无法添加！'
        })
        return
      }
      var { arr, index } = this.strikeHandle()
      this.showMenu = false
      if (assignObj) {
        const clonObj = JSON.parse(JSON.stringify(assignObj))
        if (
          this.handleObj.ParentId === clonObj.ParentId &&
          index >= clonObj.Sort
        ) {
          index -= 1
        }
        console.log(
          '条件',
          this.handleObj.ParentId === clonObj.ParentId,
          index,
          clonObj.Sort
        )
      }
      // console.log('结果',arr, index)
      if (this.handleObj.Type === 'Project') {
        const addObj = assignObj || JSON.parse(JSON.stringify(this.cloneData))
        // addObj.Children = []
        arr.splice(index, 0, addObj)
      } else if (this.handleObj.Type === 'Ability') {
        const addObj =
          assignObj ||
          JSON.parse(JSON.stringify(this.cloneData.Children[0].Children[0]))
        addObj.ParentId = this.handleObj.ParentId
        // console.log(index, assignObj)
        arr.splice(index, 0, addObj)
      } else {
        const addObj =
          assignObj || JSON.parse(JSON.stringify(this.cloneData.Children[0]))
        addObj.ParentId = this.handleObj.ParentId
        arr.splice(index, 0, addObj)
      }
      this.addNumIndex(this.tableData)
    },
    bottomAdd(assignObj) {
      // 向下添加
      if (this.handleObj.Type !== 'Project' && !this.handleObj.ParentId) {
        this.$message({
          type: 'warning',
          message: '此项还没有父级，无法添加！'
        })
        return
      }
      const { arr, index } = this.strikeHandle()
      this.showMenu = false
      // let cloneObj = this.cloneObj(this.handleObj)
      // console.log(cloneObj)
      if (this.handleObj.Type === 'Project') {
        const obj = assignObj || JSON.parse(JSON.stringify(this.cloneData))
        // obj.Children = []
        arr.splice(index + 1, 0, obj)
      } else if (this.handleObj.Type === 'Ability') {
        const addObj =
          assignObj ||
          JSON.parse(JSON.stringify(this.cloneData.Children[0].Children[0]))
        // addObj.Children = []
        addObj.ParentId = this.handleObj.ParentId
        arr.splice(index + 1, 0, addObj)
      } else {
        const addObj =
          assignObj || JSON.parse(JSON.stringify(this.cloneData.Children[0]))
        // addObj.Children = []
        addObj.ParentId = this.handleObj.ParentId
        arr.splice(index + 1, 0, addObj)
      }
      this.addNumIndex(this.tableData)
    },
    // 向上移动
    async topMove() {
      const { arr, index } = this.strikeHandle()
      this.showMenu = false
      if (!this.handleObj.Id) {
        this.$message({
          type: 'warning',
          message: '该项数据为空，请保存后操作！'
        })
        return
      }
      // console.log(parent, index)
      if (index !== 0) {
        let params = {}
        if (this.handleObj.Type === 'Ability') {
          params = {
            TableId: this.abilityId,
            aId: this.handleObj.Id,
            bId: arr[index - 1].Id
          }
        } else {
          params = {
            TableId: this.catlogId,
            aId: this.handleObj.Id,
            bId: arr[index - 1].Id
          }
        }
        // console.log(arr, params)
        const res = await this.$http.get(this.moveRequest.url, {
          params: { ...params, ...this.moveRequest.params }
        })
        if (res.Result) {
          this.swapArray(arr, index, index - 1)
          this.addNumIndex(this.tableData)
        } else {
          this.$message({
            type: 'error',
            message: '操作失败，请重试'
          })
        }
      } else {
        this.$message({
          type: 'warning',
          message: '已经处于第一个，无法上移'
        })
        // alert('已经处于第一个，无法上移')
      }
    },
    strikeHandle() {
      // 根据所选对象，找出所在父级，以及索引值
      // this.showMenu = false
      let arr = []
      if (this.handleObj.ParentId) {
        arr = this.findObj(this.handleObj.ParentId, this.tableData).Children
      } else {
        arr = this.tableData
      }
      // let index = arr.findIndex(e => e.Id == this.handleObj.Id)
      return { arr, index: this.handleObj.numIndex }
    },
    // 向下移动
    async bottomMove() {
      const { arr, index } = this.strikeHandle()
      this.showMenu = false
      if (!this.handleObj.Id) {
        this.$message({
          type: 'warning',
          message: '该项数据为空，请保存后操作！'
        })
        return
      }
      if (!arr[index + 1].Id) {
        this.$message({
          type: 'warning',
          message: '已经处于最后一个，无法下移！'
        })
        return
      }
      // console.log(arr, index, index + 1)
      if (index + 1 !== arr.length) {
        let params = {}
        if (this.handleObj.Type === 'Ability') {
          params = {
            TableId: this.abilityId,
            aId: this.handleObj.Id,
            bId: arr[index + 1].Id
          }
        } else {
          params = {
            TableId: this.catlogId,
            aId: this.handleObj.Id,
            bId: arr[index + 1].Id
          }
        }
        // console.log(arr, params)
        const res = await this.$http.get(this.moveRequest.url, {
          params: { ...params, ...this.moveRequest.params }
        })
        if (res.Result) {
          this.swapArray(arr, index, index + 1)
          this.addNumIndex(this.tableData)
        } else {
          this.$message({
            type: 'warning',
            message: '操作失败，请重试'
          })
        }
      } else {
        this.$message({
          type: 'warning',
          message: '已经处于最后一个，无法下移'
        })
        // alert('已经处于最后一个，无法下移')
      }
    },
    swapArray(arr, index1, index2) {
      // 数组交换元素
      arr[index1] = arr.splice(index2, 1, arr[index1])[0]
      return arr
    },
    cloneObj(obj) {
      // 针对树结构对象是否存在Children进行深克隆，并将属性值置空
      const result = {}
      for (const key in obj) {
        if (key === 'Type') {
          result[key] = obj[key]
        } else if (key === 'Children') {
          console.log(obj[key].length)
          if (obj[key] && obj[key].length > 0) {
            result[key] = [this.cloneObj(obj[key][0])]
          } else {
            result[key] = []
          }
        } else {
          result[key] = ''
        }
      }
      return result
    },
    rightClick(e, obj) {
      // 阻止鼠标右键默认行为，在当前指针处弹出操作框
      if (!this.isEdit) return
      // e.preventDefault()
      const clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight
      // console.log(clientHeight, e.clientY, this.$refs.fixedMenu.offsetHeight,clientHeight <= e.clientY + this.$refs.fixedMenu.offsetHeight)
      if (clientHeight <= e.clientY + 260 + 60) {
        this.$refs.fixedMenu.style.bottom = 60 + 'px'
        this.$refs.fixedMenu.style.top = 'auto'
      } else {
        this.$refs.fixedMenu.style.top = e.clientY + 'px'
      }
      this.$refs.fixedMenu.style.left = e.clientX + 'px'
      // this.$refs.fixedMenu.style.display = 'block'
      this.handleObj = obj
      this.showMenu = true
    },
    addIndex() {
      // 初始化表格数组
      const arr = JSON.parse(JSON.stringify(this.abilityTree))
      // if (this.isEdit) {
      //   let obj = JSON.parse(JSON.stringify(this.cloneData))
      //   obj.Children = []
      //   arr.push(obj)
      // }
      this.addNumIndex(arr)
      this.tableData = arr
      // console.log(this.tableData)
    },
    addNumIndex(arr) {
      this.statistics(arr)
      if (
        (arr.length <= 0 && this.isEdit) ||
        (arr.length && arr[arr.length - 1].Id && this.isEdit)
      ) {
        const obj = JSON.parse(JSON.stringify(this.cloneData))
        // obj.Children = []
        arr.push(obj)
      }
      // 为数组添加索引值字段，并为已存在的项目、任务添加一个子集
      let index = 0
      arr.forEach((e, i) => {
        e.numIndex = i
        if (e.Children && e.Children.length > 0) {
          // console.log(e.Children)
          if (e.Children[e.Children.length - 1].Id && this.isEdit) {
            const obj = JSON.parse(JSON.stringify(this.cloneData.Children[0]))
            obj.ParentId = e.Id
            // obj.Children = []
            e.Children.push(obj)
          }
          e.Children.forEach((p, q) => {
            p.numIndex = q
            ++index
            p.Index = index
            if (p.Children && p.Children.length > 0) {
              if (p.Children[p.Children.length - 1].Id && this.isEdit) {
                const obj = JSON.parse(
                  JSON.stringify(this.cloneData.Children[0].Children[0])
                )
                obj.ParentId = p.Id
                // obj.Children = []
                obj.numIndex = 0
                p.Children.push(obj)
              }
              p.Children.forEach((m, n) => {
                m.numIndex = n
              })
            } else {
              if (p.Id) {
                const obj = JSON.parse(
                  JSON.stringify(this.cloneData.Children[0].Children[0])
                )
                obj.ParentId = p.Id
                obj.numIndex = 0
                p.Children = [obj]
              }
            }
          })
        } else {
          const obj = JSON.parse(JSON.stringify(this.cloneData.Children[0]))
          // obj.Children = []
          obj.ParentId = e.Id
          obj.numIndex = 0
          // obj.Children[0].numIndex = 0
          e.Children = [obj]
          // console.log('添加任务', e)
        }
      })
      this.addFocus(arr)
    },
    addFocus(arr) {
      arr.forEach((e, i) => {
        e.focus = 0
        if (e.Children && e.Children.length) {
          e.Children.forEach(p => {
            p.focus = 0
            if (p.Children && p.Children.length) {
              p.Children.forEach(m => {
                m.focus = 0
              })
            }
          })
        }
      })
    },
    statistics(arr) {
      let projectNum = 0
      let taskNum = 0
      let abilityNum = 0
      arr.forEach(project => {
        if (project.Id) projectNum++
        // taskNum += project.Children.length
        if (project.Children && project.Children.length > 0) {
          project.Children.forEach(task => {
            if (task.Id) taskNum++
            if (task.Children && task.Children.length) {
              task.Children.forEach(ability => {
                if (ability.Id) abilityNum++
              })
            }
            // abilityNum += task.Children.length
          })
        }
      })
      this.projectNum = projectNum
      this.taskNum = taskNum
      this.abilityNum = abilityNum
      this.$emit('update:projectNum', this.projectNum)
      this.$emit('update:taskNum', this.taskNum)
      this.$emit('update:abilityNum', this.abilityNum)
      // console.log(this.projectNum, this.taskNum, this.abilityNum)
    },
    editTextArea() {
      // 将textArea标签手动改为高度自适应，已换用element input组件，弃用
      this.$nextTick(() => {
        var textarea = Array.prototype.slice.call(
          document.querySelectorAll('.el-textarea__inner'),
          0
        )
        textarea.forEach(e => {
          this.makeExpandingArea(e)
          // console.log(e.scrollHeight)
        })
        // console.log(document.querySelectorAll('.el-textarea__inner'))
      })
    },
    async intialize() {
      // 获取能力树，现在由父组件传入，弃用
      // 获取能力树
      await this.getTree({
        params: {
          schoolId: this.userSid,
          majorId: this.majorObj.BaseMajorId
        }
      })
      this.tableData = JSON.parse(JSON.stringify(this.abilityCatelog))
    },
    addDefaultKey() {
      // 如果默认选中key数组存在进行自动选中操作
      // debugger
      if (this.defaultKeys) {
        // console.log('defaultKeys',this.defaultKeys)
        this.defaultKeys.forEach(e => {
          const ability = this.findObj(e, this.tableData)
          let task = null
          let project = null
          // console.log(ability)
          if (ability && ability.ParentId) {
            task = this.findObj(ability.ParentId, this.tableData)
            if (task.ParentId) {
              project = this.findObj(task.ParentId, this.tableData)
            }
          }
          // this.selectDefaultKey(ability)
          this.selectDefaultKey(ability, task, project)
          // console.log(ability,this.tableData)
        })
      }
    },
    selectDefaultKey(item, parent, grandParent) {
      // 根据默认选中key数组自动选中
      if (!item) {
        return
      }
      item.Checked = true
      item.CheckStatus = 1
      if (item.Children.length > 0) {
        item.Children.map(p => {
          p.Checked = item.Checked
          p.CheckStatus = item.CheckStatus
          if (p.Children.length > 0) {
            p.Children.map(q => {
              q.CheckStatus = item.CheckStatus
              q.Checked = item.Checked
            })
          }
        })
      }
      if (parent) {
        // 同级节点选中个数
        var sibChechedCount = parent.Children.filter(p => p.Checked).length
        if (sibChechedCount === 0) {
          parent.Checked = false
          parent.CheckStatus = 0
        } else if (parent.Children.length === sibChechedCount) {
          parent.Checked = true
          parent.CheckStatus = 1
        } else {
          parent.Checked = false
          parent.CheckStatus = 2
        }
      }
      if (grandParent) {
        var sibCount = grandParent.Children.filter(p => p.Checked).length
        var isHasChecked =
          grandParent.Children.filter(p => p.CheckStatus === 2).length > 0
        if (sibCount === 0 && !isHasChecked) {
          grandParent.Checked = false
          grandParent.CheckStatus = 0
        } else if (grandParent.Children.length === sibCount) {
          grandParent.Checked = true
          grandParent.CheckStatus = 1
        } else {
          grandParent.Checked = false
          grandParent.CheckStatus = 2
        }
      }
    },
    findObj(id, arr) {
      // 从表格数组中查找指定对象
      const result = arr.find(e => e.Id === id)
      if (result) {
        return result
        // console.log('target',this.target)
      } else {
        let aaa = null
        arr.forEach(p => {
          if (p.Children && this.findObj(id, p.Children)) {
            aaa = this.findObj(id, p.Children, this.target)
          }
        })
        return aaa
      }
    },
    getProject() {
      // 获取已勾选项目
      const arr = []
      this.tableData.forEach(e => {
        if (e.Checked) {
          arr.push(e.Id)
        }
      })
      return arr
    },
    getTask() {
      // 获取已勾选任务
      const arr = []
      this.tableData.forEach(e => {
        if (e.Children && e.Children.length > 0) {
          e.Children.forEach(p => {
            if (p.Checked) {
              arr.push(p.Id)
            }
          })
        }
      })
      return arr
    },
    getVal() {
      // 获取已勾选能力
      const arr = []
      this.tableData.forEach(e => {
        if (e.Children && e.Children.length > 0) {
          e.Children.forEach(p => {
            if (p.Children && p.Children.length > 0) {
              p.Children.forEach(m => {
                if (m.Checked) {
                  arr.push(m.Id)
                }
              })
            }
          })
        }
      })
      return arr
      // this.
    },
    getFinaly() {
      // let project = [],
      //   task = []
      // ability = []
      const arr = []
      this.tableData.forEach(e => {
        if (e.Checked) {
          // project.push({Project:e.Id})
          arr.push(e.Id)
        } else {
          if (e.Children && e.Children.length > 0) {
            e.Children.forEach(p => {
              if (p.Checked) {
                // task.push({Task:p.Id})
                arr.push(p.Id)
              } else {
                if (p.Children && p.Children.length > 0) {
                  p.Children.forEach(m => {
                    if (m.Checked) {
                      // ability.push({Ability:m.Id})
                      arr.push(m.Id)
                    }
                  })
                }
              }
            })
          }
        }
      })
      // return {project,task,ability}
      return arr
    },
    emitChange() {
      // 向父组件发射勾选的数据
      this.$emit('check-change', this.getFinaly())
    },
    checkBox(item, parent, grandParent) {
      if (
        this.staticNum[item.Id] &&
        this.staticNum[item.Id] >= this.limitNum &&
        !item.Checked
      ) {
        console.log(this.staticNum[item.Id])
        this.$message({
          type: 'warning',
          message: '建议最多勾选' + this.limitNum + '次！'
        })
        // return
      }
      // 修改勾选状态
      // debugger
      item.Checked = !item.Checked
      if (item.Checked) {
        // if(this.staticNum[item.Id]){
        //   if(this.staticNum[item.Id]<3){
        //     this.staticNum[item.Id] += 1
        //   }
        // }else{
        //   this.staticNum[item.Id] = 1
        // }
        this.staticNum[item.Id] = this.staticNum[item.Id]
          ? (this.staticNum[item.Id] += 1)
          : 1
      } else {
        if (this.staticNum[item.Id]) {
          this.staticNum[item.Id] -= 1
        }
        // this.staticNum[item.Id] = this.staticNum[item.Id]
        //   ? (this.staticNum[item.Id] -= 1)
        //   : 1
      }
      item.CheckStatus = item.Checked ? 1 : 0
      if (item.Children.length > 0) {
        item.Children.map(p => {
          if (item.Checked && p.Checked) {
            if (this.staticNum[p.Id]) {
              this.staticNum[p.Id] -= 1
            }
          }
          p.Checked = item.Checked
          p.CheckStatus = item.CheckStatus
          if (p.Children.length > 0) {
            p.Children.map(q => {
              if (p.Checked && q.Checked) {
                if (this.staticNum[q.Id]) {
                  this.staticNum[q.Id] -= 1
                }
              }
              q.CheckStatus = item.CheckStatus
              q.Checked = item.Checked
            })
          }
        })
      }
      if (parent) {
        // 同级节点选中个数
        var sibChechedCount = parent.Children.filter(p => p.Checked).length
        if (sibChechedCount === 0) {
          parent.Checked = false
          parent.CheckStatus = 0
        } else if (parent.Children.length === sibChechedCount) {
          parent.Children.forEach(e => {
            if (this.staticNum[e.Id]) {
              this.staticNum[e.Id] -= 1
            }
          })
          parent.Checked = true
          parent.CheckStatus = 1
        } else {
          if (parent.Checked) {
            parent.Children.forEach(x => {
              if (x.Checked) {
                if (this.staticNum[x.Id] >= 3) {
                  this.staticNum[x.Id] += 1
                  this.$message({
                    message: '有能力已经勾选了三次，将会自动取消勾选！',
                    type: 'error'
                  })
                  this.checkBox(x, parent, grandParent)
                  // console.log(x)
                } else {
                  this.staticNum[x.Id] = this.staticNum[x.Id]
                    ? (this.staticNum[x.Id] += 1)
                    : 1
                }
              }
            })
          }
          parent.Checked = false
          parent.CheckStatus = 2
        }
      }
      if (grandParent) {
        var sibCount = grandParent.Children.filter(p => p.Checked).length
        var isHasChecked =
          grandParent.Children.filter(p => p.CheckStatus === 2).length > 0
        if (sibCount === 0 && !isHasChecked) {
          grandParent.Checked = false
          grandParent.CheckStatus = 0
        } else if (grandParent.Children.length === sibCount) {
          grandParent.Checked = true
          grandParent.CheckStatus = 1
        } else {
          grandParent.Checked = false
          grandParent.CheckStatus = 2
        }
      }
      this.emitChange()
    },
    makeExpandingArea(el) {
      // 将textArea标签手动改为高度自适应，已换用element input组件，弃用
      var timer = null
      // 由于ie8有溢出堆栈问题，故调整了这里
      var setStyle = function(el, auto) {
        if (auto) el.style.height = 'auto'
        el.style.height = el.scrollHeight + 'px'
      }
      var delayedResize = function(el) {
        if (timer) {
          clearTimeout(timer)
          timer = null
        }
        timer = setTimeout(function() {
          setStyle(el)
        }, 200)
      }
      if (el.addEventListener) {
        el.addEventListener(
          'input',
          function() {
            setStyle(el, 1)
          },
          false
        )
        setStyle(el)
      } else if (el.attachEvent) {
        el.attachEvent('onpropertychange', function() {
          setStyle(el)
        })
        setStyle(el)
      }
      if (window.VBArray && window.addEventListener) {
        // IE9
        el.attachEvent('onkeydown', function() {
          var key = window.event.keyCode
          if (key === 8 || key === 46) delayedResize(el)
        })
        el.attachEvent('oncut', function() {
          delayedResize(el)
        }) // 处理粘贴
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#drag-icon {
  width: 30px;
  height: 15px;
  background-color: #fff;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  box-sizing: border-box;
  border: 1px dashed #666;
}
.none-select {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
div {
  box-sizing: border-box;
}
.total-row {
  display: flex;
  align-items: center;
}
.fixed-menu {
  position: fixed;
  width: 180px;
  // height: 260px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
  // display: none;
  ul {
    padding: 10px 0;
    hr {
      height: 1px;
      background: rgba(231, 233, 243, 1);
      margin: 4px 0;
    }
    li {
      // height: 40px;
      // line-height: 40px;
      font-size: 14px;
      padding: 6px 30px;
      cursor: pointer;
      &.delete {
        color: #ff6666;
      }
      &:hover {
        color: #4971f1;
        background-color: #eceff7;
      }
    }
  }
}
.el-form-item__content {
  .flex-table {
    line-height: initial;
  }
}
.table-header {
  border: 1px solid #b5bacc;
  border-bottom: none;
  display: flex;
  align-items: stretch;
  background-color: #d5d9e7;
  .data-numer {
    padding-bottom: 10px;
    font-weight: 400;
  }
  .itme-title {
    padding: 10px 0;
  }

  .num-color {
    color: #4971f1;
  }
  div {
    // border: 1px #d5d9e7 solid;
    // border-right: 1px solid transparent;
    // border-left: 1px solid transparent;
    text-align: center;
    // border-top: 1px #b5bacc solid;
    // padding: 10px 0;
    box-sizing: border-box;
    color: #666666;
    font-weight: bold;
  }
  .header-project {
    border-left: 1px solid transparent;
    border-right: 1px solid #b5bacc;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 5;
  }
  .header-children {
    align-items: stretch;
    display: flex;
    padding: 0;
    flex: 25;
    .header-task {
      border-left: 2px solid transparent;
      border-right: 1px solid #b5bacc;
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 5;
    }
    .header-ability {
      flex: 15;
      display: flex;
      align-items: stretch;
      padding: 0;
      // border-right: 1px #d5d9e7 solid;
      .ability-title {
        border-left: 2px solid transparent;
        border-right: 1px solid #b5bacc;
        flex: 18;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .header-level {
      // padding: 10px 0;
      .level-title {
        border-bottom: 1px solid #b5bacc;
        padding: 5px 0;
      }
      flex: 6;
      .level-box {
        display: flex;
        border-left: 1px solid transparent;
        div {
          padding: 5px 0;
          flex: 1;
          border-left: 1px solid transparent;
          border-right: 1px solid #b5bacc;
          &:last-of-type {
            border-right: none;
          }
        }
      }
    }
  }
}
.flexBox {
  display: flex;
  flex-direction: column;
  border-top: 1px #b5bacc solid;
  border-left: 1px #b5bacc solid;
}
.flexRow {
  display: flex;
  align-items: stretch;
  -ms-align-items: stretch;
  max-width: 100%;
}
.borProj {
  border-bottom: 1px #b5bacc solid;
  border-right: 1px #b5bacc solid;
}
.borItem {
  border-bottom: 1px #b5bacc solid;
  border-left: 1px #b5bacc solid;
}
.borItemL {
  border-left: 1px #b5bacc solid;
}
.flexCol {
  display: flex;
  flex-direction: column;
}
.itemCode {
  // padding: 13px 0;
  flex: 2;
  display: flex;
  align-items: center;
  max-width: 100%;
}
.itemName {
  // padding: 13px 0;
  flex: 3;
  display: flex;
  align-items: center;
  border-left: 1px #b5bacc solid;
  max-width: 100%;
}
div.no-padding {
  padding: 0;
}
.itemChildren {
  flex: 25;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  div.flexRow:last-of-type {
    flex: 1;
  }
  .itemCode {
    flex: 2;
  }
  .itemName {
    flex: 3;
  }
  .itemChildren {
    flex: 15;
  }
}
.itemCodeA {
  // padding: 9px 0;
  display: flex;
  align-items: center;
  flex: 4;
}
.itemNameA {
  // padding: 9px 0;
  display: flex;
  flex: 14;
  border-left: 1px #b5bacc solid;
  align-items: center;
}
.level-box {
  flex: 6;
  display: flex;
  .item-level {
    border-left: 1px #b5bacc solid;
    display: flex;
    align-items: center;
    flex: 1;
    .abilText.radio {
      justify-content: center;
    }
  }
}
.fa.check-icon {
  color: #adadad;
  font-size: 20px;
  width: 30px;
  cursor: pointer;
  &.fa-check-square,
  &.fa-minus-square {
    color: #4971f1;
    // & + span {
    //   color: #4971f1;
    // }
  }
}
.just-c {
  justify-content: center;
}
.abilText,
.taskText,
.projText {
  padding: 11px 5px;
  display: flex;
  align-items: center;
  width: 100%;
  word-break: break-all;
  box-sizing: border-box;
  min-height: 40px;
  // margin-left: 10px;
  // margin-right: 10px;
}
.itemChildren {
  // background-color: red;
  .itemChildren .flexRow.checked {
    background-color: #fff6e4;
  }
}
.flexRow.white {
  background-color: #fff;
}
.flexRow.black {
  background-color: #ecf5ff;
}
.input-box {
  display: flex;
  width: 100%;
  .icon-box {
    // display: none;
    // flex: 1;
    cursor: pointer;
    color: #4971f1;
    font-size: 20px;
    i {
      margin: 0 5px;
      font-weight: 400;
      font-size: 18px;
      &:last-of-type {
        color: rgb(255, 51, 0);
      }
    }
  }
  align-items: center;
}
</style>
<style lang="scss">
// 文本框
.text-input {
  flex: 1;
  // margin: 0 5px;
  .el-textarea__inner {
    border: 1px solid transparent;
    border-radius: 0;
    overflow: hidden;
    padding: 5px;
    font-size: 16px;
    color: #333;
    line-height: 2;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    // height: 46px !important;
    background-color: rgba(255, 255, 255, 0);
  }
  .el-textarea__inner:focus {
    outline: none;
    border-color: #4971f1;
    // background-color: rgba(255, 255, 255, 1);
    // &+.icon-box{
    //   display: block;
    // }
  }
  // &.ability-input{
  //   height: 100%;
  //   .el-textarea__inner{
  //     height: 100% !important;
  //     box-sizing: border-box;
  //   }
  // }
}
// .el-textarea.is-readonly .el-textarea__inner {
//     background-color: #fff;
//     border: none;
//     color: #333;
//     cursor: not-allowed;
// }
.abilText .el-radio__label {
  display: none;
}
.flex-table {
  .el-radio__input.is-disabled.is-checked .el-radio__inner {
    border-color: #4971f1;
    background: #4971f1;
  }
}
.mb-10{
  margin-bottom: 10px;
}
</style>
