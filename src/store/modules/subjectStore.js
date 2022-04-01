import { ENDPOINT } from "../../constants/constants";
import axios from "axios";

const subjectStore = {
    namespaced: true,
    state: {
        subjects: []
    },
    mutations: {
        setSubjects(state, subjects) {
            state.subjects = subjects
        }
    },
    actions: {
        subjectFetcher(context) {
            axios.get(`${ENDPOINT}/subjects/1`)
            .then(res => {
                context.commit("setSubjects", res.data.data)
            })
            .catch(err => console.log(err))
        }
    },
    getters: {
        getSubjects(state) {
            return state.subjects;
        }
    }
}

export default subjectStore;