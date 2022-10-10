import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      name: "default",
      redirect: "/table",
      component: () => import("@/components/layout/layout.vue"),
      children: [
        {
          path: "/table",
          name: "table",
          component: () => import("@/views/table/test-table.vue"),
        },
      ],
    },
  ],
});

export default router;
