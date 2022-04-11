<template>
    <section>
        <h2>로그인</h2>
        <form @submit.prevent="login">
            <fieldset>
                <label for="userId">아이디 :</label>
                <input type="text" id="userId" v-model="username" placeholder="아이디를 입력하세요">
            </fieldset>
            <fieldset>
                <label for="pwdId">비밀번호 :</label>
                <input type="password" id="pwdId" v-model="pwd" placeholder="비밀번호를 입력하세요">
            </fieldset>
            <button type="submit">로그인</button>
            <router-link to="/register">아이디가 없나요? 그럼 여기</router-link>
        </form>
    </section>
</template>

<script>
import { userAPI, setAuthInHeader } from "../api";
import router from "../router/router";

export default {
    data() {
        return {
            username: "",
            pwd: "",
        }
    },
    methods: {
        login() {
            const data = {
                "username": this.username,
                "password": this.pwd,
                "status": true
            };
            userAPI.login(data)
            .then(data => {
                setAuthInHeader(data.token);
                this.$store.commit("userStore/login", data);
                router.push("/?page=1");
            }).catch(err => {
                alert("아이디 혹은 비밀번호를 확인해주세요.")
                this.clearInput();
                console.log(err)
            })
        },
        clearInput() {
            this.username = "";
            this.pwd = "";
        }
    }
}
</script>

<style scoped>
    section {
        text-align: center;
        border: 1px solid #000;
        padding: 20px;
    }
    section h2 {
        font-size: 30px;
        font-weight: 550;
        margin-bottom: 50px;
    }
    section fieldset {
        margin-bottom: 20px;
    }
    section fieldset input {
        padding: 3px;
    }
</style>
