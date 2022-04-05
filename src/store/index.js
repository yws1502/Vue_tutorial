import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex);

import userStore from "./modules/userStore";
import modalStore  from "./modules/modalStore";
import subjectStore from "./modules/subjectStore";
import professorStore from "./modules/professorStore";
import studentStore from "./modules/studentStore";

const store = new Vuex.Store({
    modules: {
        userStore,
        modalStore,
        subjectStore,
        professorStore,
        studentStore
    },
    plugins: [createPersistedState({
        paths: ["userStore", "modalStore", "subjectStore", "professorStore", "studentStore"]
    })]
});

export default store;
