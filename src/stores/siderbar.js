import { defineStore } from 'pinia'
import { ref } from 'vue'



export const useSiderbarStore = defineStore('siderbar',()=> {
    const isCollapse = ref(false)

    function toggleCollapse() {
        isCollapse.value = !isCollapse.value
    }
    
    return {
        isCollapse,
        toggleCollapse
    }
})