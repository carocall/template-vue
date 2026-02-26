<script setup>

import {  Expand, Fold } from '@element-plus/icons-vue';
import { useSiderbarStore } from '@/stores/siderbar.js'

const sidebarStore = useSiderbarStore()

const toggleCollapse = () => {
  sidebarStore.toggleCollapse()
}

</script>

<template>
  <el-button @click="toggleCollapse">
    <el-icon v-if="!sidebarStore.isCollapse">
      <Expand />
    </el-icon>
    <el-icon v-else><Fold /></el-icon>
  </el-button>
</template>

<style>

</style>