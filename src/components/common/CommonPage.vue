<script setup>


</script>

<template>
  <div class="common-page">

    <div class="header-card page-header flex-box">
      <div class="container-left">
        <slot name="header-title"></slot>
      </div>
      <div class="container-right">
        <slot name="action-button"></slot>
      </div>
    </div>


    <div class="main-card">
      <slot name="body"></slot>
    </div>

  </div>

</template>

<style scoped>
.common-page {
  height: 100%;
  width: 100%;
}

.page-header {
  width: 100%;

}

.header-card {
  width: 100%;
  height: 50px;
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
  padding: 20px;
  box-sizing: border-box
}

.main-card {
  width: calc(100% - 20px);
  height: calc(100% - 50px - 20px);
  margin: 10px;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-sizing: border-box;

  overflow: auto;
}

.flex-box {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>