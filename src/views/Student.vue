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
                        <th>등록일</th>
                        <th>수정</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody v-for="student in students" :key="student.id">
                    <tr>
                        <td>{{student.studentName}}</td>
                        <td>{{student.studentAge}}</td>
                        <td>{{student.studentAddress}}</td>
                        <td>{{student.createdAt}}</td>
                        <td><button type="button">수정 버튼</button></td>
                        <td><input type="checkbox"></td>
                    </tr>
                </tbody>
            </table>
            <button type="button">등록하기</button>
            <button type="submit">삭제하기</button>
        </form>
    </div>
</template>

<script>
import { ENDPOINT } from "../constants/constants";
import axios from "axios";


export default {
    data() {
        return {
            students: [],
        }
    },
    created() {
        axios.get(`${ENDPOINT}/students`)
        .then((res) => {
            res.data.forEach(el => el.createdAt = el.createdAt.split("T")[0])
            this.students = res.data;
        }).catch((err) => console.log(err));
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