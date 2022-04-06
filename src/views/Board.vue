<template>
    <div class="container">
        <h2>게시글 상세</h2>
        <section class="board-container">
            <form @submit.prevent="deleteBoard">
                <h3>
                    <input
                        type="text"
                        v-model="boardData.title"
                    />
                </h3>
                <textarea
                    rows="10"
                    readonly
                    v-model="boardData.content"
                />
                <div>
                    <button type="button">수정</button>
                    <button type="submit">삭제</button>
                    <button @click="prevPage" type="button">뒤로가기</button>
                </div>
            </form>
        </section>
        <section class="comment-container">
            <h3>comments</h3>
            <form @submit.prevent="createComments">
                <ul>
                    <li>
                        <input type="text" v-model="inputComment" placeholder="댓글을 작성하세요"><button type="submit">📝작성하기</button>
                    </li>
                    <li v-for="comment in comments" :key="comment.contentId">
                        <input
                            type="text"
                            :readonly="isCommentUpdate"
                            :value="comment.content"
                            :ref="`comment-${comment.contentId}`"
                        />
                        <div>
                            작성자 : {{comment.contentUsername}}
                            <div class="comment-btn-wrapper" v-if="username === comment.contentUsername">
                                <button type="button">수정</button>
                                <button type="button" @click="deleteComment(comment.contentId)">삭제</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </form>
        </section>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { boardAPI, commentAPI, setAuthInHeader } from "../api";

export default {
    data() {
        return {
            boardData: {},
            comments: [],
            inputComment: "",
            isCommentUpdate: true
        };
    },
    created() {
        this.getBoard();
        this.getComments();
    },
    methods: {
        prevPage() {
            this.$router.back();
        },
        getBoard() {
            boardAPI.getBoard(this.$route.params.id)
            .then((data) => {
                this.boardData = data;
            });
        },
        deleteBoard() {
            if (confirm("게시물을 삭제하시겠습니까?")) {
                setAuthInHeader(this.token);
                boardAPI.delete(this.$route.params.id)
                .then(() => {
                    this.prevPage();
                })
            }
        },
        getComments() {
            commentAPI.getComments(this.$route.params.id)
            .then(data => {
                this.comments = data
            })
        },
        createComments() {
            const data = {
                "boardId": this.boardData.boardId,
                "content": this.inputComment
            };
            setAuthInHeader(this.token);
            commentAPI.create(data)
            .then(() => {
                this.getComments();
                this.inputComment = "";
            })
        },
        deleteComment(commentId) {
            if (confirm("댓글을 삭제하시겠습니까?")) {
                setAuthInHeader(this.token);
                commentAPI.delete(commentId)
                .then(() => {
                    this.getComments()
                })
            }
        },
    },
    computed: {
        ...mapState("userStore", ["token", "username"]),
    }
};

</script>

<style scoped>
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
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 6px;
}
.board-container textarea {
    font-size: 14px;
    width: 100%;
    line-height: 16px;
    margin-bottom: 15px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 6px;
}
.comment-container {
    height: 300px;
    text-align: left;
    overflow-y: scroll;
    padding: 5px;
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
    margin-top: 30px;
}
.comment-container li input {
    font-size: 14px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    flex: 4;
    padding: 7px;
    margin-right: 15px;
}
.comment-container li > div {
    flex: 1;
}
.comment-btn-wrapper {
    margin-top: 10px;
}
</style>
