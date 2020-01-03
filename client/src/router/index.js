import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import BugDetails from "../views/BugDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/bug/:id",
    name: "bugdetails",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: BugDetails
  }
];

const router = new VueRouter({
  routes
});

export default router;
