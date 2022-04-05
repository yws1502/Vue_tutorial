import { studentAPI } from "../../api";


const studentStore = {
    namespaced: true,
    state: {
        students: [],
    },
    mutations: {
        setStudents(state, students) {
            state.students = students;
        }
    },
    actions: {
        getStudentPage(context, routeId) {
            studentAPI.getStudents(routeId)
            .then(data => {
                context.commit("setStudents", data.data)
            })
        }
    }
}

export default studentStore;