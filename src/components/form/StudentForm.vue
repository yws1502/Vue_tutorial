<template>
    <div class="container">
        <strong>학생 등록</strong>
        <form @submit.prevent="registerStudentApi">
            <fieldset>
                <label for="studentName">이름 : </label>
                <input type="text" v-model="studentName" id="studentName">
            </fieldset>
            <fieldset>
                <label for="studentAge">나이 : </label>
                <input type="number" v-model="studentAge" id="studentAge">
            </fieldset>
            <fieldset>
                <label for="studentAddress">주소 : </label>
                <input type="text" v-model="studentAddress" id="studentAddress">
            </fieldset>
            <fieldset>
                <label for="subjectName">전공 : </label>
                <select name="subject" id="subjectName" v-model="subjectName">
                    <option v-for="(subject, idx) in subjects" :key="idx" :value="subject">{{subject}}</option>
                </select>
            </fieldset>
            <fieldset>
                <label for="professorName">담당 교수 : </label>
                <select name="professor" id="professorName" v-model="professorName">
                    <option v-for="(professor, idx) in professors" :key="idx" :value="professor">{{professor}}</option>
                </select>
            </fieldset>
            <button type="submit">등록 하기</button>
        </form>
    </div>
</template>

<script>
import { ENDPOINT, HEADERS } from "../../constants/constants";
import axios from "axios";


export default {
    data() {
        return {
            studentName: "",
            studentAge: "",
            studentAddress: "",
            subjectName: "",
            professorName: "",
            subjects: [],
            professors: [],
        }
    },
    created() {
        axios.get(`${ENDPOINT}/subjects`)
        .then((res) => {
            res.data.forEach((subject) => {
                this.subjects.push(subject.subjectName);
            })
        })
        .catch((err) => console.log(err))

        axios.get(`${ENDPOINT}/professors`)
        .then((res) => {
            res.data.forEach((professor) => {
                this.professors.push(professor.professorName)
            })
        })
        .catch((err) => console.log(err))
    },
    methods: {
        registerStudentApi() {
            const data = {
                studentName: this.studentName.trim(),
                studentAge: parseInt(this.studentAge.trim()),
                studentAddress: this.studentAddress.trim(),
                subjectName: this.subjectName.trim(),
                professorName: this.professorName.trim(),
            }
            console.log(data)
            axios.post(`${ENDPOINT}/students`, JSON.stringify(data), HEADERS)
            .then((res) => {
                this.$store.commit("setIsShow")
                console.log(res.data)
            })
            .catch((err) => console.log(err))
        },
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