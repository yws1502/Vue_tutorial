import { subjectAPI } from "../../api";
import router from "../../router/router";

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
            subjectAPI.fetchList(routeId)
                .then(data => {
                    context.commit("setSubjects", data.data)
                })
        },
        deleteSubject(_, subjects) {
            if (confirm("삭제하시겠습니까?")) {
                console.log("in the subjectStore \n", subjects)
                subjectAPI.delete(subjects)
                    .then(() => router.go())
            }
        },
    },
}

export default subjectStore;