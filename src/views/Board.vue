<template>
    <div class="container">
        <h2>게시글 상세</h2>
        <section class="board-container">
            <form @submit.prevent="deleteBoard">
                <h3>
                    <input
                        type="text"
                        :class="{ 'input-active': isBoardUpdate }"
                        readonly
                        v-model="boardData.title"
                    />
                </h3>
                <textarea
                    :class="{ 'input-active': isBoardUpdate }"
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
import { mapState } from 'vuex';
import { boardAPI, setAuthInHeader } from "../api";

export default {
    data() {
        return {
            boardData: {},
            comment: "comment",
            isBoardUpdate: false,
            isCommentUpdate: false,
        };
    },
    created() {
        this.getBoard();
    },
    methods: {
        prevPage() {
            this.$router.back();
        },
        getBoard() {
            boardAPI.getBoard(this.$route.params.id)
            .then((data) => {
                console.log(data)
                this.boardData = data;
            });
        },
        deleteBoard() {
            if (confirm("삭제하시겠습니까?")) {
                setAuthInHeader(this.token);
                boardAPI.delete(this.$route.params.id)
                .then(() => {
                    this.prevPage();
                })
            }
        }
    },
    computed: {
        ...mapState("userStore", ["token"])
    }
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
