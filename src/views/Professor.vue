<template>
    <div class="container">
        <h2>교수 명단</h2>
        <form @submit.prevent="deleteProfessor">
            <table>
                <thead>
                    <tr>
                        <th>교수이름</th>
                        <th>나이</th>
                        <th>담당학과</th>
                        <th>수정</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody v-for="professor in professors" :key="professor.id">
                    <tr>
                        <td>{{professor.professorName}}</td>
                        <td>{{professor.professorAge}}</td>
                        <td>{{professor.subjectName}}</td>
                        <td><button type="button">수정</button></td>
                        <td><input type="checkbox" v-model="deleteProfessorList" :value="professor.id"></td>
                    </tr>
                </tbody>
            </table>
            <button type="button" @click="showModal">교수등록</button>
            <button type="submit">삭제하기</button>
        </form>
        <Modal :mode="'Professor'"></Modal>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { professorAPI } from "../api";
import Modal from "../components/Modal.vue";

export default {
    data() {
        return {
            deleteProfessorList: [],
        }   
    },
    created() {
        this.getPage()
    },
    methods: {
        showModal() {
            this.$store.commit("setIsShow")
        },
        getPage() {
            this.$store.dispatch("professorStore/getProfessors", this.$route.params.id)
        },
        deleteProfessor() {
            if (this.deleteProfessorList.length === 0) return alert("삭제할 명단을 체크해주세요.");

            if (confirm("삭제하시겠습니까?")) {
                professorAPI.delete(this.deleteProfessorList)
                .then(() => {
                    this.getPage();
                    this.deleteProfessorList = [];
                })
            }
        },
    },
    components: {
        Modal,
    },
    computed: {
        ...mapState("professorStore", ["professors"])
    }
}
</script>

<style scoped>
.container {
    text-align: center;
}
h2 {
    font-size: 25px;
    font-weight: 550;
    margin-bottom: 30px;
}
table {
    margin: 0 auto 10px;
}
table th {
    font-size: 18px;
    font-weight: 550;
}
table th,
table td {
    padding: 8px;
}
</style>
