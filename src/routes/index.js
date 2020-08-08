import Vue from "vue";
import VueRouter from "vue-router";

import config from "./config";
Vue.use(VueRouter);
const router = new VueRouter({
  routes: config,
  mode: "history"
});
export default router;
