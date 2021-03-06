import axios from "axios";
import { ENDPOINT, UNAUTHORIZED } from "../constants/constants";
import VueRouter from "../router/router";


const request = (method, url, data) => {
    return axios({
        method,
        url: ENDPOINT + url,
        data
    }).then(res => res.data)
    .catch(err => {
        console.log(err)
        const { status } = err.response;
        if (status === UNAUTHORIZED) {
            alert("로그인 후 이용해주세요.");
            VueRouter.replace("login");
        }
        throw err
    })
};


export const setAuthInHeader  = (token) => {
    axios.defaults.headers.common["Authorization"] = token ? `Bearer ${ token }` : null;
}

export const userAPI = {
    login: function(data) {
        return request("post", "/users/login", data);
    },
    signUp(data) {
        return request("post", "/users/signup", data);
    }
}

export const subjectAPI = {
    getAll: function() {
        return request("get", "/subjects")
    },
    getSubjects: function(routeId) {
        return request("get", `/subjects/${routeId}`)
    },
    create: function(data) {
        return request("post", "/subjects", data)
    },
    update: function(subjectId, data) {
        return request("put", `/subjects/${subjectId}`, data)
    },
    delete: function(subjects) {
        console.log(subjects)
        return request("delete", "/subjects", {subjects})
    }
};

export const professorAPI = {
    getProfessors: function(routeId) {
        return request("get", `/professors/${routeId}`)
    },
    create: function(data) {
        return request("post", "/professors", data)
    },
    update: function(data, professorId) {
        return request("put", `/professors/${professorId}`, data)
    },
    delete: function(professors) {
        return request("delete", "/professors", {professors})
    }
}

export const studentAPI = {
    getStudents: function(routeId) {
        return request("get", `/students/${routeId}`)
    },
    create: function(data) {
        return request("post", "/students", data)
    },
    update: function(data, studentId) {
        return request("put", `/students/${studentId}`, data)
    },
    delete: function(students) {
        return request("delete", "/students", {students})
    }
}

export const boardAPI = {
    getBoard: function(boardId) {
        return request("get", `/board/${boardId}`)
    },
    getBoards: function(routeId) {
        return request("get", `/boards/${routeId}`)
    },
    create: function(data) {
        return request("post", "/boards", data)
    },
    delete: function(boardId) {
        return request("delete", `/boards/${boardId}`)
    }
}

export const commentAPI = {
    getComments: function(boardId) {
        return request("get", `/comments/${boardId}`)
    },
    delete: function(commentId) {
        return request("delete", `/comments/${commentId}`)
    },
    create: function(data) {
        return request("post", "/comments", data)
    }
}