import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "default",
      component: () => import("@/components/lauout/layout.vue"),
      redirect: "/table",
      children: [
        {
          path: "/table",
          name: "table",
          component: () => import("@/views/table-page.vue"),
        },
      ],
    },
  ],
});

export default router;
