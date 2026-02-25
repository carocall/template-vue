<script setup>

import {  Expand } from '@element-plus/icons-vue';

import { useSiderbarStore } from '@/stores/siderbar.js'

const sidebarStore = useSiderbarStore()

const toggleCollapse = () => {
  sidebarStore.toggleCollapse()
}

</script>

<template>
  <el-button @click="toggleCollapse">
    <el-icon>
      <Expand />
    </el-icon>
  </el-button>
</template>

<style>

</style>