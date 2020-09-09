import {createStore,createLogger} from "vuex";
import * as getters from "./getter";
import TodoList from './modules/todo';
import User from "./modules/user";
console.log(process.env.NODE_ENV);

export default createStore({
  modules:{
    TodoList,
    User
  },
  getters,
  plugins:process.env.NODE_ENV==="development"?[createLogger()]:[]
});
