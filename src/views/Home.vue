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
                <tr v-for="board in boards" :key="board.id" @click="clicked(board.boardId)">
                    <td>{{ board.title }}</td>
                    <td>{{ board.content }}</td>
                    <td>{{ commentCount(board.comments) }}</td>
                    <td>{{ getDate(board.createdAt) }}</td>
                </tr>
            </tbody>
        </table>
        <button type="button">게시글 작성</button>
    </div>
</template>

<script>
import { boardAPI } from '../api'


export default {
    data() {
        return {
            boards: [],
        }
    },
    created() {
        boardAPI.getBoards(this.$route.query.page)
        .then(data => {
            this.boards = data.data;
        })
    },
    methods: {
        clicked(id) {
            console.log(id, this.boards)
        },
        commentCount(comment) {
            return comment.length
        },
        getDate(date) {
            return date.split("T")[0]
        }
    },
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
tbody tr:hover {
    cursor: pointer;
    color: #fff;
    background-color: pink;
    transition: all .4s ease-out;
}
</style>