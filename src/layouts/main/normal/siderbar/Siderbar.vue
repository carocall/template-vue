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

}
</style>
