import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/login/index.vue";
import RegisterView from "@/views/register/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: HomeView,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
