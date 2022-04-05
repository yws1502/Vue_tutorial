<template>
    <div class="container">
        <h2>학생 명단</h2>
        <form>
            <table>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>나이</th>
                        <th>주소</th>
                        <th>전공</th>
                        <th>담임 교수</th>
                        <th>수정</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody v-for="student in students" :key="student.id">
                    <tr>
                        <td>{{student.studentName}}</td>
                        <td>{{student.studentAge}}</td>
                        <td>{{student.studentAddress}}</td>
                        <td>{{student.subjectName}}</td>
                        <td>{{student.professorName}}</td>
                        <td><button type="button">수정 버튼</button></td>
                        <td><input type="checkbox"></td>
                    </tr>
                </tbody>
            </table>
            <button type="button" @click="showModal">등록하기</button>
            <button type="submit">삭제하기</button>
        </form>
        <Modal :mode="'student'"></Modal>
    </div>
</template>

<script>
import { mapState } from "vuex";
import Modal from "../components/Modal.vue";

export default {
    created() {
        this.getPage();
    },
    methods: {
        showModal() {
            this.$store.commit("setIsShow");
        },
        getPage() {
            this.$store.dispatch("studentStore/getStudentPage", this.$route.params.id);
        }
    },
    components: {
        "Modal": Modal
    },
    computed: {
        ...mapState("studentStore", ["students"])
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