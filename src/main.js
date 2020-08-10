import Vue from "vue";
import App from "./App.vue";
import "./assets/style/reset.css";
import router from "./routes/index";
import store from "./store"
// import { loginIn } from "./services/api/userInfo";
// async function test() {
//     var res = await loginIn({
//         'loginId': 'user',
//         'loginPwd': '123123'
//     })
//     console.log(res)
// }
// test()
store.dispatch('newsInfo/fetchChannelList')
new Vue({
    render: h => h(App),
    router,
    store
}).$mount("#app");