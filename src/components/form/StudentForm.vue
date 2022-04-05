<template>
    <div class="container">
        <strong>학생 등록</strong>
        <form @submit.prevent="createStudentApi">
            <fieldset>
                <label for="studentName">이름 : </label>
                <input type="text" v-model.trim="studentName" id="studentName">
            </fieldset>
            <fieldset>
                <label for="studentAge">나이 : </label>
                <input type="number" v-model.trim="studentAge" id="studentAge">
            </fieldset>
            <fieldset>
                <label for="studentAddress">주소 : </label>
                <input type="text" v-model.trim="studentAddress" id="studentAddress">
            </fieldset>
            <fieldset>
                <label for="subjectInfo">전공 / 교수 : </label>
                <select name="subject" id="subjectInfo" v-model.trim="subjectInfo">
                    <option v-for="(info, idx) in subjectInfoList" :key="idx" :value="info">{{info[0]}} / {{info[1]}}</option>
                </select>
            </fieldset>
            <button type="submit">등록 하기</button>
        </form>
    </div>
</template>

<script>
import { subjectAPI, studentAPI } from '../../api';


export default {
    data() {
        return {
            studentName: "",
            studentAge: "",
            studentAddress: "",
            subjectInfo: "",
            subjectInfoList: [],
        }
    },
    created() {
        subjectAPI.getAll()
        .then(data => {
            data.forEach(subject => {
                subject.professors.forEach(professor => {
                    const temp = [subject.subjectName, professor.professorName];
                    this.subjectInfoList.push(temp);
                });
            });
        })
    },
    methods: {
        closeModal() {
            this.$store.commit("setIsShow");
        },
        getPage() {
            this.$store.dispatch("studentStore/getStudentPage", this.$route.params.id);
        },
        createStudentApi() {
            const data = {
                studentName: this.studentName,
                studentAge: parseInt(this.studentAge),
                studentAddress: this.studentAddress,
                subjectName: this.subjectInfo[0],
                professorName: this.subjectInfo[1],
            }
            studentAPI.create(data)
            .then(() => {
                this.closeModal();
                this.getPage();
            })
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