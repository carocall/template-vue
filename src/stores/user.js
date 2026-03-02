import {defineStore} from "pinia";
import {ref} from "vue";
import {LoginAPI} from "@/api/user";


export const useUserStore = defineStore('user', () => {
    const userInfo = ref({})


    const userLogin = async ({account, password}) => {
        const res = await LoginAPI({account, password})
        userInfo.value = res.result
    }

    const cleanUserInfo =()=>{
        userInfo.value = {}
    }

    return{
        userInfo,
        getUserInfo,
        cleanUserInfo,
    }
},{
    persist: true,
})