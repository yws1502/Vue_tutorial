import router from "../../router/router";


const userStore = {
    state: {
        username: "",
        token: "",
        isLogin: false,
    },
    mutations: {
        login: function(state, payload) {
            state.username = payload.username;
            state.token = payload.token;
            state.isLogin = true;
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