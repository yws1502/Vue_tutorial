<template>
    <div class="container">
        <strong>게시글 등록</strong>
        <form @submit.prevent="createBoard">
            <fieldset>
                <label for="boardTitle">제목 : </label>
                <input type="text" v-model="boardTitle" id="boardTitle" />
            </fieldset>
            <fieldset>
                <label for="studentAge">내용 : </label>
                <textarea
                    id="studentAge"
                    v-model="boardContent"
                    cols="40"
                    rows="10"
                ></textarea>
            </fieldset>
            <button type="submit">등록 하기</button>
        </form>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { boardAPI, setAuthInHeader } from "../../api";

export default {
    data() {
        return {
            boardTitle: "",
            boardContent: "",
        };
    },
    methods: {
        getPage() {
            this.$store.dispatch(
                "boardStore/getBoardPage",
                this.$route.query.page
            );
        },
        closeModal() {
            this.$store.commit("setIsShow");
        },
        createBoard() {
            const data = {
                title: this.boardTitle,
                content: this.boardContent,
            };
            setAuthInHeader(this.token);
            boardAPI.create(data).then(() => {
                this.getPage();
                this.closeModal();
            });
        },
    },
    computed: {
        ...mapState("userStore", ["token"]),
    },
};
</script>

<style scoped>
.container {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 10;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    background-color: #fff;
    padding: 25px;
}
.container strong {
    display: block;
    font-size: 23px;
    font-weight: 550;
    margin-bottom: 25px;
}
.container fieldset {
    margin-bottom: 13px;
}
.container fieldset input {
    width: 50%;
    padding: 3px;
}
</style>