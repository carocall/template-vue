<script setup>
import {ref, watch, onMounted} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {Close} from "@element-plus/icons-vue";

const route = useRoute()
const router = useRouter()

const activeTab = ref('')
const tabsContainer = ref(null)

const tabs = ref([
    {name: '首页', id: '/', path: '/'}
])

const handleTabClick = (tab) => {
    activeTab.value = tab.name
    router.push(tab.path)
}

const handleClose = (tabId, event) => {
    event.stopPropagation()
    if (tabs.value.length <= 1) return
    
    const index = tabs.value.findIndex(tab => tab.id === tabId)
    if (index > -1) {
        const closedTab = tabs.value[index]
        tabs.value.splice(index, 1)
        if (tabs.value.length > 0 && activeTab.value === closedTab.name) {
            const newActiveTab = tabs.value[0]
            activeTab.value = newActiveTab.name
            router.push(newActiveTab.path)
        }
    }
}

const addTab = (routeItem) => {
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

const handleWheel = (event) => {
    if (tabsContainer.value && event.deltaY !== 0) {
        event.preventDefault()
        tabsContainer.value.scrollLeft += event.deltaY
    }
}

watch(() => route.path, (newPath) => {
    addTab(route)
}, {immediate: true})

onMounted(() => {
    addTab(route)
})
</script>

<template>
    <div ref="tabsContainer" class="custom-tabs" @wheel="handleWheel">
        <div
            v-for="tab in tabs"
            :key="tab.id"
            class="tab-item"
            :class="{ active: activeTab === tab.name }"
            @click="handleTabClick(tab)"
        >
            <span class="tab-name">{{ tab.name }}</span>
            <span 
                v-if="tabs.length > 1" 
                class="tab-close" 
                @click="handleClose(tab.id, $event)"
            >
                <el-icon><Close/></el-icon>
            </span>
        </div>
    </div>
</template>

<style scoped>
.custom-tabs {
    flex: 1 1 0%; /* 关键属性：占据剩余空间 */
    min-width: 0; /* 允许内容收缩 */
    overflow-x: auto; /* 允许水平滚动 */
    overflow-y: hidden; /* 隐藏垂直滚动 */
    display: flex;
    align-items: center;
    scrollbar-width: none; /* Firefox 隐藏滚动条 */
    -ms-overflow-style: none; /* IE 和 Edge 隐藏滚动条 */

    gap: 8px;
    background: #fff;
}

/* Chrome、Safari 和 Opera 隐藏滚动条 */
.custom-tabs::-webkit-scrollbar {
    display: none;
}

.tab-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    background: #fff;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 14px;
    color: #606266;
    height: 20px;
}

.tab-item:hover {
    color: #409eff;
    border-color: #c6e2ff;
}

.tab-item.active {
    background: #ecf5ff;
    color: #409eff;
    border-color: #409eff;
}

.tab-name {
    white-space: nowrap;
}

.tab-close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s;
    color: #909399;
}

.tab-close:hover {
    background: #919191;
    color: #fff;
}
</style>
