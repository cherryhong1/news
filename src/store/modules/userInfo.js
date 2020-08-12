import { loginIn, loginOut, whoami } from "@/services/api/userInfo";
const state = () => ({
    userInfo: {},
    isLoading: false
})


const actions = {
    //获取用户信息
    async fetchUserInfo({ commit }, userInfo) {
        commit('setIsLoading', true)
        var res = await loginIn(userInfo);
        var result = true
        if (res.code == 0) {
            result = true
        } else {
            result = false
        }
        commit('setUserInfo', res.data)
        commit('setIsLoading', false)
        return result;
    },
    async clearUser({ commit }) {
        await loginOut()
        commit('setUserInfo', null)
    },
    async fetchWhoIam({ commit }) {
        commit('setIsLoading', true)
        var res = await whoami()
        console.log(res)
        commit('setUserInfo', res.data)
        commit('setIsLoading', false)
    }

}

const mutations = {
    setUserInfo(state, payload) {
        console.log(payload)
        state.userInfo = payload
    },
    setIsLoading(state, payload) {
        state.isLoading = payload
    }
}
export default {
    namespaced: true,
    state,
    actions,
    mutations

}