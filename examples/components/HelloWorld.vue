<template>
  <div class="com">
    <EditTable :abilityTree="tableData" showTotal></EditTable>
    <BackTop></BackTop>
  </div>
</template>

<script>
import TableData from '../JsonData/editTable.json'
// import { EditTable, BackTop } from '../../packages/index'
export default {
  // components: { EditTable, BackTop },
  data() {
    return {
      tableData: TableData
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style scoped>
/* .com {
  height: 1200px;
} */
</style>
