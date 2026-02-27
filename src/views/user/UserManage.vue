<script setup>
import CommonPage from "@/components/common/CommonPage.vue";
import { Plus, Search, Refresh, User, Key, Delete } from "@element-plus/icons-vue";
import { ref } from 'vue';
// 模拟用户数据
const userList = [
  {
    id: 1,
    username: 'admin',
    avatar: '',
    roles: ['超级管理员', '质检员'],
    gender: '男',
    email: 'admin@example.com',
    createdAt: '2023-11-18 16:18:59',
    status: true
  }
];

const currentPage = ref(1);
const pageSize = ref(10);
const total = ref(22);
</script>
<template>
  <CommonPage>
    <template #header-title>
      用户管理
    </template>
    <template #action-button>
      <el-button>
        <el-icon>
          <Plus />
        </el-icon>
        新增用户
      </el-button>
    </template>
    <template #body>
      <div class="user-manage-container">
        <!-- 搜索表单 -->
        <div class="search-container">
          <el-form :inline="true" class="search-form">
            <span class="search-container-left">
              <el-form-item label="用户名">
                <el-input placeholder="请输入用户名" />
              </el-form-item>
              <el-form-item label="性别">
                <el-select placeholder="请选择" style="width: 120px">
                  <el-option label="男" value="male" />
                  <el-option label="女" value="female" />
                </el-select>
              </el-form-item>
              <el-form-item label="状态">
                <el-select placeholder="请选择" style="width: 120px">
                  <el-option label="启用" value="enabled" />
                  <el-option label="禁用" value="disabled" />
                </el-select>
              </el-form-item>
            </span>
            <span class="search-container-right">
              <el-form-item>
                <el-button icon="Refresh" plain>重置</el-button>
              </el-form-item>
              <el-form-item>
                <el-button icon="Search">搜索</el-button>
              </el-form-item>
            </span>
          </el-form>
        </div>

        <!-- 用户表格 -->
        <div class="table-container">
          <el-table :data="userList" style="width: 100% ; --el-table-border-color: transparent;">
            <el-table-column prop="avatar" label="头像" width="80">
              <template #default="scope">
                <el-avatar size="small" :src="scope.row.avatar || 'https://img.icons8.com/color/48/000000/user.png'" />
              </template>
            </el-table-column>
            <el-table-column prop="username" label="用户名" />
            <el-table-column prop="roles" label="角色" width="200">
              <template #default="scope">
                <el-tag v-for="role in scope.row.roles" :key="role" size="small" type="success"
                  style="margin-right: 4px">
                  {{ role }}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="gender" label="性别" width="80" />
            <el-table-column prop="email" label="邮箱" />
            <el-table-column prop="createdAt" label="创建时间" width="180" />
            <el-table-column prop="status" label="状态" width="100">
              <template #default="scope">
                <el-switch v-model="scope.row.status" />
              </template>
            </el-table-column>
            <el-table-column label="操作" width="300" fixed="right">
              <template #default="scope">
                <el-button size="small" type="primary" icon="User" plain>分配角色</el-button>
                <el-button size="small" type="warning" icon="Key" plain>重置密码</el-button>
                <el-button size="small" type="danger" icon="Delete" plain>删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>

        <!-- 分页 -->
        <div class="pagination-container">
          <span class="total">共 {{ total }} 条数据</span>
          <el-pagination v-model:current-page="currentPage" size="small" :page-sizes="[10, 20, 50, 100]"
            :page-size="pageSize" layout="prev, pager, next" :total="total" background />
        </div>
      </div>
    </template>
  </CommonPage>
</template>


<style scoped>
.user-manage-container {
  background: #fff;
}

.search-container {
  padding: 16px;
  background: #f5f7fa;
  border: 1px solid #ebebeb;
  overflow: hidden;
  border-radius: 4px;
}

.search-form {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.pagination-container {
  display: flex;
  justify-content: space-between;
  background: #f5f7fa;
  border: 1px solid #ebebeb;
  padding: 10px 20px;
  border-radius: 4px;
  align-items: center;
  margin-top: 20px;
}

.total {
  font-size: 14px;
  color: #606266;
}

.table-container {
  margin: 10px 0;
  border: 1px solid #ebebeb;
  background: #fff;
  border-radius: 4px;
}
</style>
