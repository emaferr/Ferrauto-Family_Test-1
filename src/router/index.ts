import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import FamilyList from "../views/FamilyList.vue";
import About from "../views/About.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "FamilyList",
    component: FamilyList,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
