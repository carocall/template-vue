<script setup>
import {useFullscreen} from '@vueuse/core'

const {isFullscreen,toggle} = useFullscreen()
</script>

<template>
<i @click="toggle" class="flex-box">
  <img v-if="isFullscreen" src="@/assets/icon/minimize.svg" alt="minimize">
  <img  v-else src="@/assets/icon/maximize.svg" alt="maximize">
</i>
</template>

<style scoped>
.flex-box {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>