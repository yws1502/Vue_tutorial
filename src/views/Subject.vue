<template>
    <div class="container">
        <h2>전공 목록</h2>
        <form @submit.prevent="deleteSubject">
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
                        <td><button type="button" @click="updateSubject(subject)">수정 버튼</button></td>
                        <td><input type="checkbox" v-model="checkedSubjects" :value="subject.id"></td>
                    </tr>
                </tbody>
            </table>
            <button type="button" @click="showModal">등록하기</button>
            <button type="submit">삭제하기</button>
        </form>
        <Modal />
    </div>
</template>

<script>
import { mapState } from "vuex";
import Modal from "../components/Modal.vue";


export default {
    data() {
        return {
            checkedSubjects: [],
        }
    },
    created() {
        this.$store.commit("userStore/loginCheck");
        this.$store.dispatch("subjectStore/fetchSubject", this.$route.params.id);
    },
    methods: {
        getProfessorOfSubject(subject) {
            return subject.professors[0] ? subject.professors[0].professorName : "-";
        },
        showModal() {
            this.$store.commit("modalStore/setFormMode", "SubjectForm")
            this.$store.commit("modalStore/setIsShow")
        },
        deleteSubject() {
            this.$store.dispatch("subjectStore/deleteSubject", this.checkedSubjects);
            this.checkedSubjects = [];
        },
        updateSubject(selectedSubject) {
            this.showModal();
            this.$store.commit("subjectStore/setSelectedSubject", selectedSubject);
        }
    },
    computed: {
        ...mapState("subjectStore", ["subjects"]),
    },
    components: {
        Modal
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