import Vue from "vue";
import Router from "vue-router";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

// Routes
import paths from "./paths";

function route(path, view, name) {
  return {
    name: name || view,
    path,
    component: resolve => import(`@/views/${view}.vue`).then(resolve)
  };
}

Vue.use(VueMaterial);
Vue.use(Router);
export const router = new Router({
  mode: "history",
  routes: paths
    .map(path => route(path.path, path.view, path.name))
    .concat([{ path: "*", redirect: "/" }])
});

export default router;
