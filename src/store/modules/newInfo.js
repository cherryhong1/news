import { getChannelList } from "@/services/api/getNewsInfo";

const state = () => ({
    channelList: [],
    isLoading: true
});

const getter = {

}

const actions = {
    async fetchChannelList({ commit }) {
        commit('setIsLoading', true)
        const channelList = await getChannelList();
        commit('setChannelList', channelList)
        commit('setIsLoading', false)

    },
    fetchIsLoading({ commit }, flage) {
        commit('setIsLoading', flage)
    }
}

const mutations = {
    setChannelList(state, channelList) {
        state.channelList = channelList
    },
    setIsLoading(state, flage) {
        state.isLoading = flage
    }
}

export default {
    namespaced: true,
    state,
    getter,
    actions,
    mutations
}