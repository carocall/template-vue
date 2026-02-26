<template>
    <el-aside :width="sidebarStore.isCollapse ? '64px' : '200px'" class="side-zone">
      <SideLogo/>
        <el-menu :collapse="sidebarStore.isCollapse" :collapse-transition="false" default-active="2" class="side-menu" >
          <SideMenuItems/>
        </el-menu>
    </el-aside>
</template>

<script setup>
import SideMenuItems from "@/layouts/main/componenet/SideMenuItems.vue";
import SideLogo from "@/layouts/main/componenet/SideLogo.vue";

import { useSiderbarStore } from '@/stores/siderbar.js'

const sidebarStore = useSiderbarStore()

</script>

<style scoped lang="scss">
.side-menu {
  height: calc(100% - 60px);
  /* 隐藏滚动条但保持滚动功能 */
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome/Safari/Edge */
  }
}
.side-zone {
  height: 100%;

}
</style>
