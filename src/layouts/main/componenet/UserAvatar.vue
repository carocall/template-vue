<script setup>

import {SwitchButton, User} from "@element-plus/icons-vue";
</script>

<template>
  <el-dropdown class="user-avatar">
    <div class="flex-box">
      <el-avatar class="avatar"
                 src="https://img2.baidu.com/it/u=3422222442,1928892222&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"/>
      <div>
        <p class="name">欸嘿嘿</p>
        <p class="job">[超级管理员]</p>
      </div>
    </div>
    <template #dropdown>
      <el-dropdown-menu>

        <el-dropdown-item>
          <span>
            <el-icon><User/></el-icon>
            个人中心
          </span>
        </el-dropdown-item>

        <el-dropdown-item>
          <span class="exit-button">
            <el-icon><SwitchButton /></el-icon>
            退出登录
          </span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style>
.user-avatar {
  flex-shrink: 0;
}
.exit-button {
  color: #ff5959 !important;
  display: flex;
  align-items: center;
}

.flex-box {
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar {
  height: 35px;
  width: 35px;
  margin: 0 10px;
}

.name {
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  font-size: 14px;
  margin-bottom: 5px;
  color: #333333;
}

.job {
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  font-size: 10px;
  color: #808080;
}

</style>