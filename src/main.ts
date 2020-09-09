import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import {Button,message} from "ant-design-vue";
import antd from "ant-design-vue"
import 'ant-design-vue/dist/antd.css';
import "@/style/index.scss";
import "./permisson";
const app=createApp(App);
app
  .use(router)
  .use(store)
  .use(Button)
  .use(antd)
  .mount("#app");
  app.config.globalProperties.$message=message
  app.provide('$message',app.config.globalProperties.$message)