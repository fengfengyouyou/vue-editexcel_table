<template>
  <div class="com">
    <EditTable :abilityTree="tableData" showTotal></EditTable>
    <!-- <BackTop></BackTop> -->
  </div>
</template>

<script>
import TableData from '../JsonData/editTable.json'
import arr from '../../packages/index.js'
export default {
  // components: { BackTop },
  data() {
    return {
      tableData: TableData
    }
  },
  mounted() {
    const { BackTop } = arr
    this.$options.components.BackTop = BackTop
    console.log(BackTop)
  },
  methods: {}
}
</script>

<style scoped>
/* .com {
  height: 1200px;
} */
</style>
