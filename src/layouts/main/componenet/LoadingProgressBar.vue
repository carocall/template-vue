<script setup>
import {ref, onMounted} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter()
const isLoading = ref(false)
const isComplete = ref(false)

onMounted(() => {
    router.beforeEach((to, from, next) => {
        isComplete.value = false
        isLoading.value = true
        next()
    })

    router.afterEach(() => {
        isComplete.value = true
        setTimeout(() => {
            isLoading.value = false
            isComplete.value = false
        }, 400)
    })
})
</script>

<template>
    <div class="progress-bar" :class="{ active: isLoading, complete: isComplete }"></div>
</template>

<style scoped>
.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  width: 0;
  background: #409eff;
  z-index: 9999;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.progress-bar.active {
  opacity: 1;
  width: 70%;
  transition: width 10s cubic-bezier(0.1, 0.5, 0.1, 1);
}

.progress-bar.active.complete {
  width: 100% !important;
  transition: width 0.3s ease;
}
</style>
