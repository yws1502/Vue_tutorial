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
import { mapGetters } from "vuex";
import Modal from "../components/Modal.vue"

export default {
    data() {
        return {
            deleteProfessorList: [],
            professors: [],
        }   
    },
    created() {
        this.$store.dispatch("professorStore/fetchProfessors", this.$route.params.id)
    },
    watch: {
        getProfessors(value) {
            this.professors = value
        },
    },
    methods: {
        showModal() {
            this.$store.commit("setIsShow")
        },
    },
    components: {
        Modal,
    },
    computed: {
        ...mapGetters("professorStore", ["getProfessors"])
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
