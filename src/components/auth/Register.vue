<template>
    <section>
        <h2>회원가입</h2>
        <form v-on:submit="submitForm">
            <fieldset>
                <label for="username">아이디 :</label>
                <input type="text" id="username" v-model="username" v-on:change="validateId" placeholder="아이디를 입력하세요">
                <strong v-show="checkId">중복된 아이디입니다.</strong>
            </fieldset>
            <fieldset>
                <label for="pwd">비밀번호 :</label>
                <input type="password" id="pwd" v-model="pwd" placeholder="비밀번호를 입력하세요">
            </fieldset>
            <fieldset>
                <label for="pwdConfirm">비밀번호 확인 :</label>
                <input type="password" id="pwdConfirm" v-model="pwdConfirm" v-on:change="validatePwd" placeholder="비밀번호를 입력하세요">
                <strong v-show="checkPwd">비밀번호가 일치하지 않습니다.</strong>
            </fieldset>
            <button type="submit">가입하기</button>
            <router-link to="/login">아이디가 있으신가요? 그럼 여기</router-link>
        </form>
    </section>
</template>

<script>
// import { ENDPOINT } from "../../constants/constants.js";


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
        submitForm(e) {
            e.preventDefault();
            console.log(this.username);
            console.log(this.pwd);
            console.log(this.pwdConfirm);
        },
        validateId(e) {
            const config = {
                method: "get",
                url: ENDPOINT,
                data: {
                "username": this.username,
                "password": this.pwd,
                "status": true
                }
            };
            console.log(config)
            axios(config).then((data) => {return console.lo})
            
            console.log(data);
        },
        validatePwd(e) {
            this.checkPwd = (this.pwd == this.pwdConfirm) ? false : true
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
