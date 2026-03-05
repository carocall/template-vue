//导入axios
import axios from "axios";
import { ElMessage } from "element-plus";
import { useUserStore } from "@/stores/user";
import router from "@/router";

const httpInstance = axios.create({
    baseURL: 'http://localhost:8080',
    timeOut: 5000
})

//拦截器

//axios请求拦截器
httpInstance.interceptors.request.use(config => {

    //从pinia获取token数据
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    if (token) {
        //TODO按照后端的要求拼接token数据,这里需要换名称和内容
        config.headers.authorization = `${token}`
    }


    return config;
}, e => Promise.reject(e));

//axios响应拦截器
httpInstance.interceptors.response.use(
    res => {
        const { data } = res
        //判断状态码
        //成功的逻辑
        //TODO这里是状态码为1代表成功,需要根据需求去改
        if (data.code === 1) {
            return data
        }
        //失败的逻辑
        else {
            ElMessage({
                target: 'warning',
                message: data.msg,
            })
            return Promise.reject(data.msg)
        }
    },
    e => {

        const userStore = useUserStore()
        //统一错误处理
         //处理401
        if (e.response && e.response.status === 401) {
            userStore.cleanUserInfo()
            router.push('/login')
            ElMessage({
                target: 'warning',
                message: '登录过期,请重新登录',
            })
        }else if (e.response) {
            //处理其他有响应的错误
            ElMessage({
                target: 'warning',
                message: e.response.data.error,
            })
        }else{
            //处理无响应错误（网络错误、超时等）
            ElMessage({
                target: 'error',
                message: '网络错误，请检查网络连接',
            })
        }
        return Promise.reject(e)
    }
)

export default httpInstance
