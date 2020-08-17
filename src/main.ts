import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "@/style/index.scss"
createApp(App)
  .use(router)
  .use(store)
  .mount("#app");
