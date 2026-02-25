<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const selectMenu = (key) => {
  const currentRoute = router.options.routes[0]
  router.push(`${currentRoute.path}${key.index}`)
}

</script>

<template>
  <el-menu-item @click="selectMenu" v-for="item in router.options.routes[0].children" :key="item.path"
                :index="item.path">
    <el-icon>
      <component :is="item.meta.icon" />
    </el-icon>
    <span>{{ item.meta.title }}</span>
  </el-menu-item>
</template>

<style scoped>

</style>