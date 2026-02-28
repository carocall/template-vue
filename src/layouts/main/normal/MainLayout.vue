<template>
    <div class="common-layout">
        <LoadingProgressBar />
        <el-container class="main-container">
            <Siderbar/>
            <el-container>
                <el-header class="header"><Navbar/></el-header>
                <el-main class="main">
                    <router-view v-slot="{ Component }">
                        <transition name="fade" mode="out-in">
                            <component :is="Component" />
                        </transition>
                    </router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import Siderbar from '@/layouts/main/normal/siderbar/Siderbar.vue'
import Navbar from '@/layouts/main/normal/header/Navbar.vue'
import LoadingProgressBar from '@/layouts/main/componenet/LoadingProgressBar.vue'
</script>

<style lang="scss" scoped>
.common-layout {
    height: 100vh;
    overflow: hidden;
}

.header {
    height: 60px !important;
}
.main-container {
    height: 100%;
}
.main{
  margin: 0 ;
  padding: 0 ;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>