<script setup>
import { useSiderbarStore } from '@/stores/siderbar.js'

const sidebarStore = useSiderbarStore()

const logoUrl = new URL('@/assets/vue.svg', import.meta.url).href
</script>
<template>
  <div class="brand"  v-if="sidebarStore.isCollapse">
    <el-image :src="logoUrl" class="logo-img-collapse" alt="logo" />
  </div>
  <div class="brand" v-else>
    <el-image :src="logoUrl" class="logo-img" alt="logo" />
    <div class="info-card">
      <h1 class="title">template Vue</h1>
      <p class="description">后台管理系统</p>
    </div>
  </div>
</template>

<style scoped>
.brand {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  border-right: 1px solid #e5e7eb;
  box-sizing: border-box
}

.logo-img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
.logo-img-collapse {
  width: 30px;
  height: 30px;
}

.title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333333;
}

.description {
  font-size: 12px;
  color: #666666;
}

</style>