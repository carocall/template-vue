<script setup>
import {useRouter} from 'vue-router'
import {Pointer} from "@element-plus/icons-vue";
import { useSiderbarStore } from '@/stores/siderbar.js'

const sidebarStore = useSiderbarStore()
const router = useRouter()
const selectMenu = (key) => {
  const currentRoute = router.options.routes[0]
  router.push(`${currentRoute.path}${key.index}`)
}

</script>

<template>
  <el-menu :collapse="sidebarStore.isCollapse" :collapse-transition="false" default-active="2" class="side-menu" >
  <el-menu-item @click="selectMenu" v-for="item in router.options.routes[0].children" :key="item.path" :index="item.path">
    <el-icon>
      <component :is="item.meta.icon"/>
    </el-icon>
    <span>{{ item.meta.title }}</span>
  </el-menu-item>

  <el-menu-item @click="selectMenu">
    <el-icon>
      <Pointer/>
    </el-icon>
    <span>测试item</span>
  </el-menu-item>

  <el-menu-item @click="selectMenu">
    <el-icon>
      <Pointer/>
    </el-icon>
    <span>测试item</span>
  </el-menu-item>
  <el-menu-item @click="selectMenu">
    <el-icon>
      <Pointer/>
    </el-icon>
    <span>测试item</span>
  </el-menu-item>
  <el-menu-item @click="selectMenu">
    <el-icon>
      <Pointer/>
    </el-icon>
    <span>测试item</span>
  </el-menu-item>
  <el-menu-item @click="selectMenu">
    <el-icon>
      <Pointer/>
    </el-icon>
    <span>测试item</span>
  </el-menu-item>
  </el-menu>

</template>

<style>
.side-menu {
  height: calc(100% - 60px);
  border-right: none;
  /* 隐藏滚动条但保持滚动功能 */
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome/Safari/Edge */
  }
}
</style>