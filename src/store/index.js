import Vue from "vue";
import Vuex from "vuex";
import newsInfo from "./modules/newInfo";
import userInfo from "./modules/userInfo"

Vue.use(Vuex)
var store = new Vuex.Store({
    // 配置
    modules: {
        newsInfo,
        userInfo
    }
})

export default store;