<script setup>
function handleLinkClick(link) {
  window.open(link)
}
</script>

<template>
  <i
      class="function-button"
      @click="handleLinkClick('https://github.com/carocall/template-vue.git')"
  >
    <img src="@/assets/icon/github.svg" class="icon-img" alt="github">
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