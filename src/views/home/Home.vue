<template>
  <CommonPage>
    <template #header-title>
      主页
    </template>
    <template #action-button>
      <el-button type="primary">新增</el-button>
      <el-button type="primary">转跳</el-button>
    </template>
    <template #body>
      这是页面主体
       <el-card style="max-width: 480px">
    <template #header>Yummy hamburger</template>
    <img
      src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      style="width: 100%"
    />
  </el-card> <el-card style="max-width: 480px">
    <template #header>Yummy hamburger</template>
    <img
      src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      style="width: 100%"
    />
  </el-card> <el-card style="max-width: 480px">
    <template #header>Yummy hamburger</template>
    <img
      src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      style="width: 100%"
    />
  </el-card> <el-card style="max-width: 480px">
    <template #header>Yummy hamburger</template>
    <img
      src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      style="width: 100%"
    />
  </el-card>
    </template>
  </CommonPage>
</template>
<script setup>
import CommonPage from "@/components/common/CommonPage.vue";
</script>
<style></style>