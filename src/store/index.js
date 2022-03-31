import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex);

import userStore from "./modules/userStore";
import modalStore  from "./modules/modalStore";

const store = new Vuex.Store({
    modules: {
        userStore: userStore,
        modalStore: modalStore,
    },
    plugins: [createPersistedState({
        paths: ["userStore", "modalStore"]
    })]
});

export default store;
