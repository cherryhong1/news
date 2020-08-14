import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import config from "./config";
Vue.use(VueRouter);
const router = new VueRouter({
    routes: config,
    mode: "history"
});
router.beforeEach((to, from, next) => {
    if (to.meta.auth) {
        //需要登录才能进入
        if (store.state.userInfo.isLoading) {
            next({ name: 'Middle', query: { returnUrl: to.fullPath } })
        } else if (store.state.userInfo.userInfo) {
            next()
        } else {
            next({ name: 'Login' })
        }
    } else {
        next()
    }

})
export default router;