<script setup>
import {ref} from 'vue'
import {Close} from "@element-plus/icons-vue";

const activeTab = ref('首页')

const tabs = ref([
    {name: '首页', id: 'home'},
    {name: '图标 Icon', id: 'icon'},
    {name: '基础组件', id: 'component'}
])

const handleTabClick = (tabName) => {
    activeTab.value = tabName
}

const handleClose = (tabId, event) => {
    event.stopPropagation()
    const index = tabs.value.findIndex(tab => tab.id === tabId)
    if (index > -1) {
        tabs.value.splice(index, 1)
        // 如果关闭的是当前激活的tab，切换到第一个tab
        if (tabs.value.length > 0 && activeTab.value === tabs.value[index]?.name) {
            activeTab.value = tabs.value[0].name
        }
    }
}
</script>

<template>
    <div class="custom-tabs">
        <div
            v-for="tab in tabs"
            :key="tab.id"
            class="tab-item"
            :class="{ active: activeTab === tab.name }"
            @click="handleTabClick(tab.name)"
        >
            <span class="tab-name">{{ tab.name }}</span>
            <span class="tab-close" @click="handleClose(tab.id, $event)">
        <el-icon><Close/></el-icon>
      </span>
        </div>
    </div>
</template>

<style scoped>
.custom-tabs {
    flex: 1 1 0%; /* 关键属性：占据剩余空间 */
    min-width: 0; /* 允许内容收缩 */
    overflow: hidden;
    display: flex;
    align-items: center;

    gap: 8px;
    padding: 8px;
    background: #fff;
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
