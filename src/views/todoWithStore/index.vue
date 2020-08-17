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
        console.log(STodoList);
        
        return{
            STodoList
        }
    }
})
</script>
<style lang="scss" scoped>
    
</style>