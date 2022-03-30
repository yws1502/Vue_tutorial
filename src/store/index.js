import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import userStore from "./modules/userStore";

const store = new Vuex.Store({
    modules: {
        userStore: userStore,
    }
});

export default store;
