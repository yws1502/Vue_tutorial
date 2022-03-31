const modalStore = {
    state: {
        isShow: true,
    },
    mutations: {
        setIsShow: function(state) {
            state.isShow = state.isShow === true ? false : true;
        }
    }
}

export default modalStore;
