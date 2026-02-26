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

.side-zone {
  height: 100%;
  background: #fff;
  border-right: 1px solid #e5e7eb;
  overflow-x: hidden;
  box-sizing: border-box;
  transition: width 0.3s ease;
}
</style>
