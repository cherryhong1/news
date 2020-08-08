export default [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue")
  },
  {
    path: "/newChannel/:id",
    name: "NewsChannel",
    component: () => import("../views/newsChannel.vue")
  },
  {
    path: "/*",
    name: "404",
    component: () => import("../views/NoFound.vue")
  }
];
