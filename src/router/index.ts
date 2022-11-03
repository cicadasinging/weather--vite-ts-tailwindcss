import HomeView from "@/views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
      meta: { title: "Home" },
    },
    {
      path: "/place/:state/:city",
      name: "PlaceView",
      component: () => import("@/views/PlaceView.vue"),
      meta: { title: "Place" },
    },
    {
      path: "/places",
      name: "PlacesView",
      component: () => import("@/views/PlacesView.vue"),
      meta: { title: "Places" },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = `${to.params.state ? `${to.params.city}, ${to.params.state}` : to.meta.title} | The Local Weather`;
  next();
});

export default router;
