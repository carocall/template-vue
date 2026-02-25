<template>
    <div class="auth-layout">

        <div class="left-section">
            <div class="content">
                <h2>欢迎来到template vue</h2>
                <p>请登录或注册以继续</p>
                <div class="logo">
                    <img :src="logoUrl" class="logo-image" alt="template vue">
                </div>
            </div>
        </div>


        <div class="right-section">
            <router-view></router-view>
        </div>

    </div>
</template>
<script setup>
const logoUrl = new URL('@/assets/vue.svg', import.meta.url).href
</script>

<style scoped>
.logo-image {
    width: 100px;
    height: 100px;
}

.auth-layout {
    display: flex;
}

.left-section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    background:#a0c1ff;
    height: 100vh;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.title {
    margin-bottom: 20px;
    font-size: 40px;
    font-weight: bold;
    color: #fff;
}

.text {
    margin-bottom: 20px;
    width: 460px;
    font-size: 20px;
    color: #fff;
    text-align: center;
}

.robot {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.2);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.right-section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 100vh;
    background-color: #fff;
}
</style>