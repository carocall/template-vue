<script setup>
import ExpandButton from "@/layouts/main/componenet/ExpandButton.vue";
import UserAvatar from "@/layouts/main/componenet/UserAvatar.vue";
import FullScreen from "@/layouts/main/componenet/FullScreen.vue";
import GiteeIcon from "@/layouts/main/componenet/GiteeIcon.vue";
import GithubIcon from "@/layouts/main/componenet/GithubIcon.vue";
import AppTab from "@/layouts/main/componenet/AppTab.vue";
</script>

<template>
    <div class="navbar">
        <div class="content-box">
            <ExpandButton/>
        </div>

        <AppTab/>

        <span class="separate">|</span>

        <div class="content-box">
            <GithubIcon/>
            <GiteeIcon/>
            <FullScreen/>
            <UserAvatar/>
        </div>
    </div>

</template>

<style scoped lang="scss">

.separate{
    margin-left: 12px;
    margin-right: 12px;
    opacity: 0.2;
}
.navbar {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    background: #fff;
    border-bottom: 1px solid #e5e7eb;
}

.content-box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.page-title {
    font-size: 18px;
    font-weight: bold;
    margin-left: 20px;
    color: #333333;
}
</style>