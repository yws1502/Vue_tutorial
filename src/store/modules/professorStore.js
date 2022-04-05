import router from "../../router/router";
import { professorAPI } from "../../api";

const professorStore = {
    namespaced: true,
    state: {
        professors: []
    },
    mutations: {
        setProfessors(state, professors) {
            state.professors = professors
        }
    },
    actions: {
        fetchProfessors(context, routeId) {
            professorAPI.getProfessors(routeId)
                .then(data => {
                    context.commit("setProfessors", data.data)
                })
        },
    },
    getters: {
        getProfessors: function(state) {
            return state.professors
        }
    }
}

export default professorStore;