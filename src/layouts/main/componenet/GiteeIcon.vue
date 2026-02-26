<script setup>
function handleLinkClick(link) {
  window.open(link)
}
</script>

<template>
  <i
      class="function-button"
      @click="handleLinkClick('https://gitee.com/callcaro/template-vue')"
  >
    <img src="@/assets/icon/gitee.svg" class="icon-img" alt="gitee">
  </i>
</template>

<style scoped>
.function-button{
  margin-right: 16px;
  cursor: pointer;
  height: 20px;
  width: 20px;
}
.icon-img{
  width: 20px;
  height: 20px;
}
</style>