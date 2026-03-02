<script setup>
import { computed } from 'vue';

const props = defineProps({
  currentPage: {
    type: Number,
    default: 1
  },
  pageSize: {
    type: Number,
    default: 10
  },
  total: {
    type: Number,
    default: 0
  },
  pageSizes: {
    type: Array,
    default: () => [10, 20, 50, 100]
  }
});

const emit = defineEmits(['update:currentPage', 'update:pageSize', 'size-change', 'current-change']);

const handleSizeChange = (val) => {
  emit('update:pageSize', val);
  emit('size-change', val);
};

const handleCurrentChange = (val) => {
  emit('update:currentPage', val);
  emit('current-change', val);
};
</script>

<template>
  <div class="pagination-container">
    <span class="total">共 {{ total }} 条数据</span>
    <el-pagination
      :current-page="currentPage"
      :page-size="pageSize"
      :page-sizes="pageSizes"
      :total="total"
       size="small" 
      layout=" sizes, prev, pager, next, jumper"
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<style scoped>
.pagination-container {
  display: flex;
  justify-content: space-between;
  background: #f5f7fa;
  border: 1px solid #ebebeb;
  padding: 10px 20px;
  border-radius: 4px;
  align-items: center;
}

.total {
  font-size: 14px;
  color: #606266;
}
</style>
