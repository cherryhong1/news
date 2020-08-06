import Vue from "vue";
import App from "./App.vue";
import "./assets/style/reset.css";
import router from './routes/index'
// import { getChannelList, getNewsList } from "./services/api/getNews";

//第一种方式： async 可以通过.then(res)来获取的到数据
// getChannelList().then(res => {
//     console.log(res)
// })

//第二种方式： async 可以通过再次通过async获取的到数据，但是不够友好，建议是用第一种方式
// async function getNewlist2() {
//     var newsList = await getNewsList('5572a108b3cdc86cf39001cd')
//     console.log(newsList)
// }

// getNewlist2()

new Vue({
    render: h => h(App),
    router
}).$mount("#app");