<template>
    <div class="container">
        <h2>게시글 상세</h2>
        <section class="board-container">
            <form>
                <h3>
                    <input
                        type="text"
                        :class="{ 'input-active': isBoardUpdate }"
                        readonly
                        v-model="title"
                    />
                </h3>
                <textarea
                    :class="{ 'input-active': isBoardUpdate }"
                    rows="10"
                    readonly
                    v-model="content"
                />
                <div>
                    <button type="button">수정</button>
                    <button type="submit">삭제</button>
                    <button type="button">뒤로가기</button>
                </div>
            </form>
        </section>
        <section class="comment-container">
            <h3>comments</h3>
            <form>
                <ul>
                    <li>
                        <input
                            type="text"
                            :class="{ 'input-active': isCommentUpdate }"
                            class="input-active"
                            v-model="comment"
                        />
                        <div>
                            <button type="button">수정</button>
                            <button type="submit">삭제</button>
                        </div>
                    </li>
                    <li>
                        <input type="text" v-model="comment" />
                    </li>
                </ul>
            </form>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: `test ${this.$route.params.id}`,
            content: "testcontent",
            comment: "comment",
            isBoardUpdate: false,
            isCommentUpdate: false,
        };
    },
};
</script>

<style scoped>
.board-container h3 .input-active,
.board-container .input-active,
.comment-container ul li .input-active {
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

input,
textarea {
    outline: none;
}
.container {
    padding: 20px;
}
.container h2 {
    font-size: 25px;
    font-weight: 600;
}
.board-container {
    margin: 40px 0;
}
.board-container h3 {
    margin-bottom: 17px;
}
.board-container h3 input {
    font-size: 23px;
    font-weight: 550;
    width: 100%;
    border: none;
    padding: 6px;
}
.board-container textarea {
    font-size: 14px;
    width: 100%;
    line-height: 16px;
    margin-bottom: 15px;
    border: none;
    padding: 6px;
}
.comment-container {
    text-align: left;
}
.comment-container h3 {
    font-size: 23px;
    font-weight: 550;
    margin-bottom: 20px;
}
.comment-container ul li {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.comment-container ul li + li {
    margin-top: 16px;
}
.comment-container ul li input {
    font-size: 14px;
    border: none;
    flex: 1;
    padding: 7px;
    margin-right: 15px;
}
</style>
