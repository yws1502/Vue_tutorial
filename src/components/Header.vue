<template>
    <div class="container">
        <nav>
            <router-link to="/">로고</router-link>
            <ul>
                <li><router-link to="/subject">전공</router-link></li>
                <li><router-link to="/professor">교수</router-link></li>
                <li><router-link to="/student">학생</router-link></li>
                <li v-if="!this.$store.state.userStore.isLogin"><router-link to="/login">로그인</router-link></li>
                <li v-if="!this.$store.state.userStore.isLogin"><router-link to="/register">회원가입</router-link></li>
                <li v-else>로그아웃</li>
            </ul>
        </nav>
    </div>
</template>

<script>

export default {
}
</script>

<style scoped>
    .container {
        border: 1px solid rgba(0,0,0,0.5);
    }
    nav {
        display: flex;
        justify-content: space-between;
        max-width: 1000px;
        padding: 30px;
        margin: 0 auto;
    }
    nav ul {
        display: flex;
        gap: 10px;
    }
    nav ul a:hover {
        color: pink;
    }
</style>