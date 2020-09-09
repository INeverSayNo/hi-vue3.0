<!--
 * @Author: your name
 * @Date: 2020-08-12 21:05:36
 * @LastEditTime: 2020-08-20 16:32:35
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hi-vue3.0\src\views\todoWithStore\index.vue
-->
<template>
    <div>
        <todo-item v-for="val in STodoList" :key="val.text" :item="val"></todo-item>
    </div>
</template>
<script lang="ts">
import {defineComponent,toRefs,computed} from "vue"
import {mapState,useStore} from "vuex";
import TodoItem from "./components/TodoItem.vue"
type todoItem={
    text:string,
    completed:boolean
}
const filter={
    all:(todos:Array<todoItem>)=>todos,
    completed:(todos:Array<todoItem>)=>todos.filter(e=>e.completed),
    active:(todos:Array<todoItem>)=>todos.filter(e=>!e.completed)
}
export default defineComponent({
    name:"TodoWithStore",
    components:{
        TodoItem
    },
    setup(props:unknown,ctx){
    const {state}=useStore();
    const STodoList=computed((todoList:Array<todoItem>)=>state.TodoList.todoList)        
        return{
            STodoList
        }
    }
})
</script>
<style lang="scss" scoped>
    
</style>