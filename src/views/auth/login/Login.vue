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
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="form.username" size="large" autocomplete="off" />
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="form.password" type="password" size="large" autocomplete="off" show-password />
                </el-form-item>
                <el-button class="submit-button" type="primary" @click="doLogin">登录</el-button>
            </el-form>

        </div>

        <div class="footer">
            <p>还没有账号？<router-link to="/auth/register">去注册</router-link></p>
        </div>

    </div>
</template>
<script setup>
// 缺少的导入
import { ref } from 'vue'
import {useUserStore} from '@/stores/user'
import {ElMessage} from "element-plus";
import {useRouter} from "vue-router";
import {ArrowLeft} from "@element-plus/icons-vue";

const router = useRouter()
const userStore = useUserStore()


const form = ref({
    username: '',
    password: ''
})

const formRef = ref()

const rules = {
    account: [
        {required: true, message: '用户名不能为空'}
    ],
    password: [
        {required: true, message: '密码不能为空'},
        {min: 6, max: 24, message: '密码长度要求6-14个字符'}
    ],
}

const doLogin = () => {

    const { username, password } = form.value

    formRef.value.validate(async (valid) => {
        //其中valid是所有表单都要经过的校验
        console.log(valid)
        //所有valid做为判断条件
        if (valid) {
            //登录
            try {
                await userStore.userLogin({username, password})
                //成功,提醒用户
                ElMessage({
                    type: 'success',
                    message: '登录成功'
                })
                //转跳主页
                router.replace({path: '/'})
            }catch(err) {
                console.log(err)
            }
        }
    })

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