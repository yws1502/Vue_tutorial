<template>
    <div class="container">
        <strong>전공 등록</strong>
        <form @submit.prevent="submitType">
            <fieldset>
                <label for="subjectId">전공 : </label>
                <input type="text" id="subjectId" v-model="subjectName">
            </fieldset>
            <button type="submit">등록하기</button>
        </form>
    </div>
</template>


<script>
import axios from 'axios';
import { ENDPOINT } from '../../constants/constants';
import { mapState } from "vuex";

export default {
    data() {
        return {
            subjectName: "",
        }
    },
    watch: {
        "this.selectedSubject": {
            handler: "setSubjectName",
            immediate: true
        }
    },
    methods: {
        registerSubjectApi() {
            if (!this.subjectName) {
                return alert("전공을 입력해주세요");
            }
            const data = {
                "subjectName": this.subjectName
            };
            axios.post(`${ENDPOINT}/subjects`, data)
            .then((res) => {
                alert("전공이 등록되었습니다.");
                this.$store.commit("setIsShow");
                this.$router.go();
                this.subjectName = "";
            })
            .catch((err) => console.log(err));
        },
        updateSubjectApi() {
            if (!this.subjectName) {
                return alert("전공을 입력해주세요");
            }
            const data = {
                "subjectName": this.subjectName
            };
            axios.put(`${ENDPOINT}/subjects/${this.selectedSubject.id}`, data)
                .then(res => {
                    alert("전공이 수정되었습니다.");
                    this.$store.commit("setIsShow");
                    this.$router.go();
                    this.$store.commit("subjectStore/clearSelectedSubject");
                })
                .catch(err => console.log(err))
        },
        setSubjectName() {
            this.subjectName = this.selectedSubject.subjectName;
        }
    },
    computed: {
        ...mapState("subjectStore", ["selectedSubject"]),
        submitType() {
            return !this.selectedSubject ? this.registerSubjectApi : this.updateSubjectApi
        }
    },
}
</script>

<style scoped>
.container {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 10;
    transform: translate(-50%, -50%);
    width: 400px;
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
.container fieldset select,
.container fieldset input {
    width: 50%;
    padding: 3px;
}
</style>