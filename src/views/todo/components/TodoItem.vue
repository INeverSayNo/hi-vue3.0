/* eslint-disable */
<template>
  <div>
    <div class="todo-item" v-for="val in todoList" :key="val">
      <span :class="[val.completed?'cmopleted':'wait-do']">{{val.text}}</span>
      <p>
        <button class="btn" @click="toggle(val)">切换</button>
        <button @click="removeItem(val)" class="btn danger">删除</button>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, toRefs } from "vue";
type todoItem = {
  text: string;
  completed: boolean;
};
type Props = {
  todoList: Array<todoItem>;
};
export default defineComponent({
  name: "TodoItem",
  props: {
    todoList: {
      type: Array,
      default: () => []
    }
  },
  setup(props: Props, { emit }) {
   
    
    const methods = () => {
      const toggle = (val: todoItem): void => {
        emit("update-list", "toggle", val);
      };
      const removeItem = (val: todoItem): void => {
        emit("update-list", "delete", val);
      };
      return {
        toggle,
        removeItem
      };
    };
    return {
      ...methods()
    };
  }
});
</script>
<style lang="scss" scoped>
.todo-item {
  width: 30%;
  margin: 10px auto;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cmopleted {
  text-decoration: line-through red;
}

.danger {
  background-color: #e62f40;
}
</style>