import {defineStore} from "pinia";
import {ref} from "vue";
import {LoginAPI} from "@/api/user";


export const useUserStore = defineStore('user', () => {
    const userInfo = ref({})


    const userLogin = async ({username, password}) => {
        const res = await LoginAPI({username, password})
        userInfo.value = res.result
    }

    const cleanUserInfo =()=>{
        userInfo.value = {}
    }

    return{
        userInfo,
        userLogin,
        cleanUserInfo,
    }
},{
    persist: true,
})