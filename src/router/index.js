import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import Downloader from "@/views/Post_viewer";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/downloader",
    name: "Download",
    component: Downloader,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
