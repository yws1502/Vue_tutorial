import router from "../../router/router";


const userStore = {
    namespaced: true,
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
                alert("로그인 후 이용해주세요.");
                router.push({
                    name: "login"
                }).catch(err => {
                    console.log(err)
                })
            }
        },
        logOut: function(state) {
            state.username = "";
            state.token = "";
            state.isLogin = false;
            localStorage.clear();
            router.push("login");
        }
    }
}

export default userStore;