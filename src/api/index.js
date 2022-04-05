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
    })
};

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
    delete: function(students) {
        return request("delete", "/students", {students})
    }
}