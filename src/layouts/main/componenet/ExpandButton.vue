<script setup>

import {  Expand, Fold } from '@element-plus/icons-vue';
import { useSiderbarStore } from '@/stores/siderbar.js'

const sidebarStore = useSiderbarStore()

const toggleCollapse = () => {
  sidebarStore.toggleCollapse()
}

</script>

<template>
  <div class="expand-button" @click="toggleCollapse">
    <el-icon v-if="sidebarStore.isCollapse">
      <Expand />
    </el-icon>
    <el-icon v-else><Fold /></el-icon>
  </div>
</template>

<style>
.expand-button {
    margin:0 10px;

    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    background: #fff;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 20px;
    color: #606266;
    height: 20px;
}

.expand-button:hover {
    color: #409eff;
    border-color: #c6e2ff;
}

</style>