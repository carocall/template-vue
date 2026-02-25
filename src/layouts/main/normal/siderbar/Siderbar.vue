<template>
    <el-aside :width="sidebarStore.isCollapse ? '64px' : '200px'">
        <el-menu :collapse="sidebarStore.isCollapse" :collapse-transition="false" default-active="2" class="side-menu">
                 <SideLogo/>
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
    height: 100%;
}
</style>
