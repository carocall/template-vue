<script setup>
import ExpandButton from "@/layouts/main/componenet/ExpandButton.vue";
import UserAvatar from "@/layouts/main/componenet/UserAvatar.vue";
import FullScreen from "@/layouts/main/componenet/FullScreen.vue";
</script>

<template>
    <div class="navbar">
        <div class="flex-box">
            <ExpandButton/>
            <p class="page-title">
                首页
            </p>
        </div>
        <div class="flex-box">
            <FullScreen/>
            <UserAvatar/>
        </div>
    </div>

</template>

<style scoped lang="scss">
.navbar {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    background: #fff;
    border-bottom: 1px solid #e5e7eb;
}

.flex-box {
    display: flex;
    align-items: center;
    justify-content: center;
}

.page-title {
    font-size: 18px;
    font-weight: bold;
    margin-left: 20px;
    color: #333333;
}
</style>