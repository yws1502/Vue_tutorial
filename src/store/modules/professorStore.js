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
        getProfessors(context, routeId) {
            professorAPI.getProfessors(routeId)
                .then(data => {
                    context.commit("setProfessors", data.data)
                })
        },
    },
}

export default professorStore;