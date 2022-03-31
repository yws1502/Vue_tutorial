const modalStore = {
    state: {
        isShow: true,
    },
    mutations: {
        setIsShow: function(state) {
            state.isShow = !state.isShow 
        }
    }
}

export default modalStore;
