<template>
    <div class="common-layout">
        <el-container class="main-container">
            <Siderbar/>
            <el-container>
                <el-header class="header"><Navbar/></el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import Siderbar from '@/layouts/main/normal/siderbar/Siderbar.vue'
import Navbar from '@/layouts/main/normal/header/Navbar.vue'
</script>

<style lang="scss" scoped>
.common-layout {
    height: 100vh;
}

.header {
    height: 60px !important;
}
.main-container {
    height: 100%;
}
</style>