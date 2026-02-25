<template>
    <div class="container">

        <div class="title">
            <div class="back-home">
                <el-icon class="icon">
                    <arrow-left />
                </el-icon>
                <span>返回首页</span>
            </div>
            <div class="title-text">
                <h2>登录</h2>
                <p>登录后即可使用所有功能</p>
            </div>
        </div>


        <div class="form">
            <el-form ref="formRef" :model="form" :rules="rules" label-position="top" class="demo-ruleForm">
                <el-form-item label="用户名或者邮箱" prop="username">
                    <el-input v-model="form.username" size="large" autocomplete="off" />
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="form.password" type="password" size="large" autocomplete="off" show-password />
                </el-form-item>
                <el-button class="submit-button" type="primary" @click="submitForm">登录</el-button>
            </el-form>

        </div>

        <div class="footer">
            <p>还没有账号？<router-link to="/auth/register">去注册</router-link></p>
        </div>

    </div>
</template>
<script setup>
// 缺少的导入
import { ref, reactive } from 'vue'
const formRef = ref()

const form = reactive({
    username: '',
    password: ''
})

const rules = reactive({
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' }
    ]
})

const submitForm = async (formEl) => {
    if (!formEl) {
        return
    }
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log(fields)
        }
    }
    )
}
</script>
<style scoped lang="scss">
.container {
    width: 460px;
}

.submit-button {
    margin-top: 20px;
    width: 100%;
}

.back-home {
    margin-bottom: 30px;
}

.title-text {
    text-align: center;
    margin-bottom: 30px;

    .h2 {
        font-size: 30px;
        margin-bottom: 10px;
    }

    .p {
        font-size: 20px;
        color: #000;
    }
}

.footer {
    text-align: center;
    margin-top: 30px;
}
</style>