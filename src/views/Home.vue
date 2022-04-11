<template>
    <div class="container">
        <h2>게시판</h2>
        <table>
            <thead>
                <tr>
                    <th>제목</th>
                    <th>내용</th>
                    <th>댓글 수</th>
                    <th>등록일</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="board in boards"
                    :key="board.boardId"
                    @click="goToBoard(board.boardId)"
                >
                    <td>{{ board.title }}</td>
                    <td>{{ board.content }}</td>
                    <td>{{ commentCount(board.comments) }}</td>
                    <td>{{ getDate(board.createdAt) }}</td>
                </tr>
            </tbody>
        </table>
        <button type="button" @click="showModal">게시글 작성</button>
        <Modal />
    </div>
</template>

<script>
import Modal from "../components/Modal.vue";
import { mapState } from "vuex";

export default {
    created() {
        this.$store.commit("userStore/loginCheck");
        this.getPage();
    },
    methods: {
        showModal() {
            this.$store.commit("modalStore/setFormMode", "BoardForm")
            this.$store.commit("modalStore/setIsShow");
        },
        getPage() {
            this.$store.dispatch(
                "boardStore/getBoardPage",
                this.$route.query.page
            );
        },
        goToBoard(id) {
            this.$router.push(`board/${id}`);
        },
        commentCount(comment) {
            return comment.length;
        },
        getDate(date) {
            return date.split("T")[0];
        },
    },
    computed: {
        ...mapState("boardStore", ["boards"]),
    },
    components: {
        Modal,
    },
};
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
tbody tr:hover {
    cursor: pointer;
    color: #fff;
    background-color: pink;
    transition: all 0.4s ease-out;
}
</style>