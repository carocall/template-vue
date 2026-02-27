<script setup>
import { useRouter, useRoute } from 'vue-router'
import { useSiderbarStore } from '@/stores/siderbar.js'

const sidebarStore = useSiderbarStore()
const router = useRouter()
const route = useRoute()


const selectMenu = (key) => {
  router.push(`${key.index}`)
}

const menuData =  [
  {
    code: 'home',
    name: '首页',
    path: '/',
    icon: 'HomeFilled',
  },
  {
    code: 'yunying',
    name: '运营管理',
    icon: 'Compass',
    children: [
      {
        code: 'dashboard',
        name: '数据分析',
        path: '/dashboard',
        icon: 'PieChart',
      },
      {
        code: 'knowledge',
        name: '知识库',
        path: '/knowledge',
        icon: 'Document',
      },
    ]
  },
  {
    code: 'system',
    name: '系统管理',
    icon: 'Setting',
    children: [
      {
        code: 'user',
        name: '用户管理',
        path: '/user',
        icon: 'User',
      },
      {
        code: 'role',
        name: '角色管理',
        path: '/role',
        icon: 'Coin',
      }
    ]
  },
]

</script>

<template>
  <el-menu :collapse="sidebarStore.isCollapse" :collapse-transition="false" :default-active="route.path" class="side-menu">
    <!-- 遍历菜单数据 -->
    <template v-for="item in menuData" :key="item.path">
      <!-- 如果没有子菜单，直接渲染为普通菜单项 -->
      <el-menu-item @click="selectMenu" v-if="!item.children" :index="item.path">
        <el-icon>
          <component :is="item.icon" />
        </el-icon>
        <span>{{ item.name }}</span>
      </el-menu-item>
      <!-- 如果有子菜单，渲染为下拉菜单 -->
      <el-sub-menu v-else :index="item.code">
        <!-- 多级菜单的标题 -->
        <template #title>
          <el-icon>
            <component :is="item.icon" />
          </el-icon>
          <span>{{ item.name }}</span>
        </template>
        <!-- 遍历子菜单 -->
        <el-menu-item @click="selectMenu" v-for="child in item.children" :key="child.path" :index="child.path">
          <el-icon>
            <component :is="child.icon" />
          </el-icon>
          {{ child.name }}
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>

</template>

<style>
.side-menu {
  height: calc(100% - 60px);
  border-right: none;
  /* 隐藏滚动条但保持滚动功能 */
  overflow-y: auto;
  scrollbar-width: none;

  /* Firefox */
  &::-webkit-scrollbar {
    display: none;
    /* Chrome/Safari/Edge */
  }
}
</style>