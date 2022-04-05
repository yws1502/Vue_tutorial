import { professorAPI } from "../../api";

const professorStore = {
    namespaced: true,
    state: {
        professors: [],
        selectedProfessor: {},
    },
    mutations: {
        setProfessors(state, professors) {
            state.professors = professors
        },
        setSelectedProfessor(state, selectedProfessorObj) {
            state.selectedProfessor = selectedProfessorObj
        },
        clearSelectedProfessor(state) {
            state.selectedProfessor = {};
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
