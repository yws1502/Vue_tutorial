import router from "../../router/router";


const userStore = {
    state: {
        userId: "",
        username: "",
        token: "",
    },
    mutations: {
        login: function(state, payload) {
            state.username = payload.username;
            state.token = payload.token;
        },
        loginCheck: function(state) {
            if (!state.token) {
                router.push({
                    name: "login"
                }).catch(err => console.log(err))
            }
        }
    }
}

export default userStore;