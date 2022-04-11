<template>
    <section>
        <h2>회원가입</h2>
        <form @submit.prevent="signupApi">
            <fieldset>
                <label for="username">아이디 :</label>
                <input type="text" id="username" ref="usernameInput" v-model.trim="username" placeholder="아이디를 입력하세요">
                <strong v-show="checkId">중복된 아이디입니다.</strong>
            </fieldset>
            <fieldset>
                <label for="pwd">비밀번호 :</label>
                <input type="password" id="pwd" v-model.trim="pwd" placeholder="비밀번호를 입력하세요">
            </fieldset>
            <fieldset>
                <label for="pwdConfirm">비밀번호 확인 :</label>
                <input type="password" ref="pwdConfirmInput" id="pwdConfirm" v-model.trim="pwdConfirm" v-on:change="validatePwd" placeholder="비밀번호를 입력하세요">
                <strong v-show="checkPwd">비밀번호가 일치하지 않습니다.</strong>
            </fieldset>
            <button type="submit">가입하기</button>
            <router-link to="/login">아이디가 있으신가요? 그럼 여기</router-link>
        </form>
    </section>
</template>

<script>
import { userAPI } from '../api/index.js';

export default {
    data() {
        return {
            checkId: false,
            checkPwd: false,
            username: "",
            pwd: "",
            pwdConfirm: "",
        }
    },
    methods: {
        validatePwd() {
            this.checkPwd = (this.pwd === this.pwdConfirm) ? false : true
            if (this.checkPwd === true) {
                this.$refs.pwdConfirmInput.focus();
                this.pwdConfirm = "";
            }
        },
        signupApi() {
            const data = {
                username: this.username,
                password: this.pwd
            };

            userAPI.signUp(data)
            .then(() => {
                alert("회원가입 되었습니다.");
                this.$router.push("login");
            })
            .catch(err => {
                console.log(err);
                this.$refs.usernameInput.focus();
                alert("이미 가입된 아이디입니다.");
            });
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
    section fieldset strong {
        display: block;
        color: rgba(255,0,0,0.7);
        margin-top: 5px;
    }
</style>
