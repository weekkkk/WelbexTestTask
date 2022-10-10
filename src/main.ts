import { createApp } from "vue";
import { createPinia } from "pinia";
import registerComponents from "./register-components";

import App from "./App.vue";
import router from "./router";

import "./assets/font/Ubuntu/index.css";
import "./assets/style/index.less";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
