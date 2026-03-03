import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTabStore = defineStore('tab', () => {
  // 状态
  const tabs = ref([{name: '首页', id: '/', path: '/'}])
  const activeTab = ref('')
  const reloading = ref(false)
  
  // 操作
  function addTab(routeItem) {
    const title = routeItem.meta?.title || routeItem.name || '未命名'
    const path = routeItem.path
    
    const existingTab = tabs.value.find(tab => tab.path === path)
    if (!existingTab) {
      tabs.value.push({
        name: title,
        id: path,
        path: path
      })
    }
    activeTab.value = title
  }
  
  function closeTab(tabId) {
    if (tabs.value.length <= 1) return null
    
    const index = tabs.value.findIndex(tab => tab.id === tabId)
    if (index > -1) {
      const closedTab = tabs.value[index]
      tabs.value.splice(index, 1)
      if (tabs.value.length > 0 && activeTab.value === closedTab.name) {
        const newActiveTab = tabs.value[0]
        activeTab.value = newActiveTab.name
        return newActiveTab
      }
    }
    return null
  }
  
  function setActiveTab(tabName) {
    activeTab.value = tabName
  }
  
  return {
    tabs,
    activeTab,
    reloading,
    addTab,
    closeTab,
    setActiveTab
  }
}, {
  // 持久化配置
  persist: {
    pick: ['tabs'],      // 只持久化 tabs 数组
    storage: sessionStorage,  // 存储在 sessionStorage 中
  },
})