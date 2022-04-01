<template>
    <div class="container">
        <strong>교수 등록</strong>
        <form @submit.prevent="registerProfessorApi">
            <fieldset>
                <label for="professorName">이름</label>
                <input type="text" id="professorName" v-model="professorName">
            </fieldset>
            <fieldset>
                <label for="professorAge">나이</label>
                <input type="number" id="professorAge" v-model="professorAge">
            </fieldset>
            <fieldset>
                <label for="subjectValue">담당 과목</label>
                <select name="subjectValue" id="subjectValue" v-model="subjectName">
                    <option v-for="(subject, index) in subjectList" :key="index" :value="subject">{{subject}}</option>
                </select>
            </fieldset>
            <button type="submit">등록하기</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import { ENDPOINT } from '../../constants/constants'
export default {
    data() {
        return {
            professorName: "",
            professorAge: "",
            subjectName: "",
            subjectList: [],
        }
    },
    created() {
        axios.get(`${ENDPOINT}/subjects`)
        .then((res) => {
            res.data.forEach((subjectInfo) => {
                this.subjectList.push(subjectInfo.subjectName)
            })
        })
        .catch((err) => console.log(err))
    },
    methods: {
        registerProfessorApi() {
            const data = {
                professorName: this.professorName,
                professorAge: parseInt(this.professorAge),
                subjectName: this.subjectName
            }
            axios.post(`${ENDPOINT}/professors`, data)
            .then((res) => {
                console.log(res)
                alert("교수 등록이 완료되었습니다.")
                this.$store.commit("setIsShow")
            })
            .catch((err) => console.log(err))
        }
    }
}
</script>

<style scoped>
.container {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 10;
    transform: translate(-50%, -50%);
    width: 400px;
    border-radius: 10px;
    background-color: #fff;
    padding: 25px;
}
.container strong {
    display: block;
    font-size: 23px;
    font-weight: 550;
    margin-bottom: 25px;
}
.container fieldset {
    margin-bottom: 13px;
}
.container fieldset select,
.container fieldset input {
    width: 50%;
    padding: 3px;
}
</style>