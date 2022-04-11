const modalStore = {
    namespaced: true,
    state: {
        isShow: true,
        formMode: "",
    },
    mutations: {
        setIsShow: function(state) {
            state.isShow = !state.isShow 
        },
        setFormMode(state, mode) {
            state.formMode = mode;
        }
    }
}

export default modalStore;
