<template>
    <div class="container">
        <strong>교수 등록</strong>
        <form @submit.prevent="submitType">
            <fieldset>
                <label for="professorName">이름</label>
                <input type="text" id="professorName" v-model.trim="professorName">
            </fieldset>
            <fieldset>
                <label for="professorAge">나이</label>
                <input type="number" id="professorAge" v-model.trim="professorAge">
            </fieldset>
            <fieldset>
                <label for="subjectValue">담당 과목</label>
                <select name="subjectValue" id="subjectValue" v-model.trim="subjectName">
                    <option v-for="(subject, index) in subjectList" :key="index" :value="subject">{{subject}}</option>
                </select>
            </fieldset>
            <button type="submit">등록하기</button>
        </form>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { professorAPI, subjectAPI } from "../../api";


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
        subjectAPI.getAll()
        .then(data => {
            data.forEach((subjectInfo) => {
                this.subjectList.push(subjectInfo.subjectName);
            })
        });
    },
    watch: {
        "this.selectedProfessor": {
            handler: "setProfessorInfo",
            immediate: true,
        }
    },
    methods: {
        getPage() {
            this.$store.dispatch("professorStore/getProfessors", this.$route.params.id)
        },
        closeModal() {
            this.$store.commit("modalStore/setIsShow");
        },
        setProfessorInfo() {
            const { professorName, professorAge, subjectName } = this.selectedProfessor;
            this.professorName = professorName;
            this.professorAge = professorAge;
            this.subjectName = subjectName;
        },
        createProfessorApi() {
            const data = {
                professorName: this.professorName,
                professorAge: parseInt(this.professorAge),
                subjectName: this.subjectName
            }
            professorAPI.create(data)
                .then(() => {
                    alert("교수 등록이 완료되었습니다.");
                    this.getPage();
                    this.$store.commit("modalStore/setIsShow");
                })
        },
        updateProfessorApi() {
            const data = {
                professorName: this.professorName,
                professorAge: parseInt(this.professorAge),
                subjectName: this.subjectName
            };
            professorAPI.update(data, this.selectedProfessor.id)
            .then(() => {
                this.$store.commit("professorStore/clearSelectedProfessor");
                this.getPage();
                this.closeModal();
            })
        }
    },
    computed: {
        ...mapState("professorStore", ["selectedProfessor"]),
        submitType() {
            return this.selectedProfessor.id ? this.updateProfessorApi : this.createProfessorApi
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