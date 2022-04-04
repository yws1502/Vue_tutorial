import { ENDPOINT } from "../../constants/constants";
import router from "../../router/router";
import axios from "axios";

const subjectStore = {
    namespaced: true,
    state: {
        subjects: [],
        selectedSubject: "",
    },
    mutations: {
        setSubjects(state, subjects) {
            state.subjects = subjects
        },
        setSelectedSubject(state, selectedSubject) {
            state.selectedSubject = selectedSubject
        },
        clearSelectedSubject(state) {
            state.selectedSubject = "";
        }
    },
    actions: {
        fetchSubject(context, routeId) {
            axios.get(`${ENDPOINT}/subjects/${routeId}`)
            .then(res => {
                context.commit("setSubjects", res.data.data)
            })
            .catch(err => console.log(err))
        },
        deleteSubject(context, subjects) {
            if (confirm("삭제하시겠습니까?")) {
                axios.delete(`${ENDPOINT}/subjects`, {
                    data: { subjects }
                }).then(res => router.go())
                .catch(err => console.log(err))
            }
        },
    },
}

export default subjectStore;