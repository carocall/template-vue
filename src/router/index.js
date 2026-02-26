import {createWebHistory, createRouter} from 'vue-router'

import MainLayout from '@/layouts/main/normal/MainLayout.vue'
import Statistics from '@/views/statistics/Statistics.vue'
import Knowledge from '@/views/knowledge/Knowledge.vue'
import Login from '@/views/auth/login/Login.vue'
import Register from '@/views/auth/register/Register.vue'
import AuthLayout from '@/layouts/auth/AuthLayout.vue'
import Home from "@/views/home/Home.vue";

const routes = [
    {
        path: '/',
        component: MainLayout,
        children: [
            {
                path: '',
                component: Home,
                meta: {
                    title: '首页',
                    icon: 'HomeFilled',
                }
            },
            {
                path: 'dashboard',
                component: Statistics,
                meta: {
                    title: '数据分析',
                    icon: 'PieChart',
                }
            },
            {
                path: 'knowledge',
                component: Knowledge,
                meta: {
                    title: '知识库',
                    icon: 'Document',
                }
            },
        ]
    }, {
        path: '/auth',
        component: AuthLayout,
        children: [
            {
                path: 'login',
                component: Login,
                meta: {
                    title: '登录',
                    icon: 'Login',
                }
            },
            {
                path: 'register',
                component: Register,
                meta: {
                    title: '注册',
                    icon: 'Register',
                }
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router