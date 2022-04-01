import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/register.vue";
import Professor from "../views/Professor.vue";
import Student from "../views/Student.vue";
import Subject from "../views/Subject.vue";
import Home from "../views/Home.vue";


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
            path: "/subject/:id",
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
        {
            path: "*",
            name: "notFound",
            component: {template: `<div>page not found</div>`}
        }
    ],
});