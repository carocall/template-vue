//导入axios
import axios from "axios";
import { ElMessage } from "element-plus";
import { useUserStore } from "@/store/user";
import { useRouter } from "vue-router";

const httpInstance = axios.create({
    baseURL: 'localhost:8080',
    timeOut: 5000
})

//拦截器

//axios请求拦截器
httpInstance.interceptors.request.use(config => {

    //从pinia获取token数据
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    if (token) {
        //按照后端的要求拼接token数据
        config.headers.Authorization = `Bearer ${token}`
    }


    return config;
}, e => Promise.reject(e));

//axios响应拦截器
httpInstance.interceptors.response.use(
    res => {
        const { data } = res
        //判断状态码
        //成功的逻辑
        if (data.code === 200) {
            return data
        }
        //失败的逻辑
        else{
            ElMessage({
                target: 'warning',
                message: data.message,
            })
        }
    },
    e => {
        const router = useRouter();
        const userStore = useUserStore()
        //统一错误处理
        ElMessage({
            target: 'warning',
            message: e.response.data.message,
        })
        //处理401
        if (e.response.status === 401) {
            userStore.cleanUserInfo()
            router.push('/login')
        }
        return Promise.reject(e)
    }
)

export default httpInstance
