<script setup>
import {useFullscreen} from '@vueuse/core'

const {isFullscreen,toggle} = useFullscreen()
</script>

<template>
<i @click="toggle"  class="flex-box function-button">
  <img class="icon" v-if="isFullscreen" src="@/assets/icon/minimize.svg" alt="minimize">
  <img class="icon"  v-else src="@/assets/icon/maximize.svg" alt="maximize">
</i>
</template>

<style scoped>
.flex-box {
  display: flex;
  align-items: center;
  justify-content: center;
}
.function-button{
  margin-right: 16px;
  cursor: pointer;
  height: 20px;
  width: 20px;
}
.icon{
  height: 20px;
  width: 20px;
}
</style>