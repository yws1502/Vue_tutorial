<template>
    <div class="container">
        <h2>전공 목록</h2>
        <form>
            <table>
                <thead>
                    <tr>
                        <th>전공</th>
                        <th>담당 교수</th>
                        <th>수정</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody v-for="subject in subjects" :key="subject.id">
                    <tr>
                        <td>{{subject.subjectName}}</td>
                        <td>
                            {{getProfessorOfSubject(subject)}}
                        </td>
                        <td><button type="button">수정 버튼</button></td>
                        <td><input type="checkbox" :value="subject.id"></td>
                    </tr>
                </tbody>
            </table>
            <button type="button" @click="showModal">등록하기</button>
            <button>삭제하기</button>
        </form>
        <Modal :mode="'subject'"></Modal>
    </div>
</template>

<script>
import { mapState } from "vuex";
import Modal from "../components/Modal.vue";


export default {
    created() {
        this.$store.dispatch("subjectStore/subjectFetcher");
    },
    methods: {
        getProfessorOfSubject(subject) {
            return subject.professors[0] ? subject.professors[0].professorName : "-";
        },
        showModal() {
            this.$store.commit("setIsShow")
        },
    },
    computed: {
        ...mapState("subjectStore", ["subjects"]),
    },
    components: {
        "Modal": Modal
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