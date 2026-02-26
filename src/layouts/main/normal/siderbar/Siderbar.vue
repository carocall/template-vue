<template>
    <el-aside :width="sidebarStore.isCollapse ? '64px' : '200px'" class="side-zone">
      <SideLogo/>
      <SideMenu/>
    </el-aside>
</template>

<script setup>
import SideMenu from "@/layouts/main/componenet/SideMenu.vue";
import SideLogo from "@/layouts/main/componenet/SideLogo.vue";

import { useSiderbarStore } from '@/stores/siderbar.js'

const sidebarStore = useSiderbarStore()

</script>

<style scoped lang="scss">
//TODO 侧边栏宽度变化时,侧边栏宽度会溢出,现在是先隐藏滚动条,等宽度变化完成后再显示滚动条,日后需要修改
.side-zone {
  height: 100%;
  background: #fff;
  border-right: 1px solid #e5e7eb;
  overflow-x: hidden;
  box-sizing: border-box;
  transition: width 0.3s ease;
}
</style>
