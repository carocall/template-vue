<script setup>

</script>

<template>
  <el-dropdown >
    <div class="flex-box">
      <el-avatar
          class="avatar" src="https://img2.baidu.com/it/u=3422222442,1928892222&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" />
      <p>admin</p>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>
          退出登录
        </el-dropdown-item>
        <el-dropdown-item>
          个人中心
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped>
.navbar {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
}

.flex-box {
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar{
  height: 35px;
  width: 35px;
  margin: 0 10px;
}
</style>