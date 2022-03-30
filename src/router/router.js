import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/auth/Login.vue";
import Register from "../components/auth/register.vue";
import Professor from "../components/Professor.vue";
import Student from "../components/Student.vue";
import Subject from "../components/Subject.vue";
import Home from "../components/Home.vue";


Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/subject",
            name: "subject",
            component: Subject
        },
        {
            path: "/professor",
            name: "professor",
            component: Professor
        },
        {
            path: "/student",
            name: "student",
            component: Student
        },
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/register",
            name: "register",
            component: Register
        },
    ],
});