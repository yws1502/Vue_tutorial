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
                <tr @click="clicked">
                    <td>title</td>
                    <td>content</td>
                    <td>count</td>
                    <td>created at</td>
                </tr>
            </tbody>
        </table>
        <button type="button">게시글 작성</button>
    </div>
</template>

<script>
export default {
    methods: {
        clicked() {
            console.log("clicked")
        }
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
tbody tr:hover {
    cursor: pointer;
    color: pink;
    transition: .4s ease-out;
}
</style>