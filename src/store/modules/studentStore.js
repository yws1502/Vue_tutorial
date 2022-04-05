import { studentAPI } from "../../api";


const studentStore = {
    namespaced: true,
    state: {
        students: [],
        selectedStudent: {},
    },
    mutations: {
        setStudents(state, students) {
            state.students = students;
        },
        setSelectedStudent(state, selectedStudent) {
            state.selectedStudent = selectedStudent
        },
        clearSelectedStudent(state) {
            state.selectedStudent = {};
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