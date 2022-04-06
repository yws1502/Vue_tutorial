import { boardAPI } from "../../api";

const boardStore = {
    namespaced: true,
    state: {
        boards: []
    },
    mutations: {
        setBoards(state, newBoards) {
            state.boards = newBoards;
        }
    },
    actions: {
        getBoardPage(context, routeId) {
            boardAPI.getBoards(routeId)
            .then(data => {
                context.commit("setBoards", data.data)
            })
        }
    },
}

export default boardStore;