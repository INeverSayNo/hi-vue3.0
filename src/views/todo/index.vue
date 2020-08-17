/* eslint-disable */
<template>
  <div>
    <todo-item @update-list="updateList" :todoList="Todo"></todo-item>
    <todo-footer @update-list="updateList"></todo-footer>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from "vue";
import TodoItem from "./components/TodoItem.vue";
import TodoFooter from "./components/TodoFooter.vue";
type todoItem = {
  text: string;
  completed: boolean;
};
export default defineComponent({
  name: "TodoList",
  components: {
    TodoItem,
    TodoFooter
  },
  setup() {
    const Todo = ref([
      { text: "鸡东县中医院reigster新增address", completed: true },
      { text: "上传ArrcenWork", completed: false }
    ]);
    const methods = () => {
      function updateList(type:string, val: todoItem|string) {
        switch (type) {
          case "toggle":
            Todo.value.map(e =>
              e.text === (<todoItem>val).text ? (e.completed = !e.completed) : ""
            );
            break;
          case "add":
            const waitAdd={completed:false,text:(val as string)}
            Todo.value.push(waitAdd)
            break;
          default:
           Todo.value = Todo.value.filter(e =>e.text!=(<todoItem>val).text
            );
            break;
        }
      }
      return {
        updateList
      }
    };
    return {
      ...methods(),
      Todo,
    };
  }
});
</script>
<style lang="scss" scoped>
</style>