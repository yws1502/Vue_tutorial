import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex);

import userStore from "./modules/userStore";
import modalStore  from "./modules/modalStore";
import subjectStore from "./modules/subjectStore";

const store = new Vuex.Store({
    modules: {
        userStore: userStore,
        modalStore: modalStore,
        subjectStore: subjectStore,
    },
    plugins: [createPersistedState({
        paths: ["userStore", "modalStore", "subjectStore"]
    })]
});

export default store;
