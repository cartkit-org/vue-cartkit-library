import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "introduction",
      component: () => import("@/views/Introduction")
    },
    {
      path: "/getting-started",
      name: "getting-started",
      component: () => import("@/views/GettingStarted")
    },
    {
      path: "/components/:component",
      name: "button",
      component: () => import("@/views/Components")
    }
  ]
});
