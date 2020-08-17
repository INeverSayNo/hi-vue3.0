<template>
    <div class="todo-item">
        <span :class="[item.completed?'completed':'']">{{item.text}}</span>
        <div>
            <button class="btn" @click="toggleStatus(item)">切换</button><button class="btn danger" @click="removeItem(item)">删除</button>
        </div>
    </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import {useStore,mapState} from "vuex"
type todoItem={
    text:string,
    completed:boolean
}
interface IProps{
    item:todoItem
}
interface IState{
    TodoList:Array<todoItem>
}
export default defineComponent({
    name:"TodoItem",
    props:{
        item:{
            type:Object,
            default:()=>{}
        }
    },
    setup(props:IProps,ctx){
        const store=useStore()

        const methods=()=>{
            const toggleStatus=(val:todoItem)=>{
                store.dispatch("TodoList/toggleTodoList",val)
            };
            const removeItem=(val:todoItem)=>{
                store.commit("TodoList/removeTodoList",val)
            };
            return {
                toggleStatus,
                removeItem
            }
        }
        return {
            ...methods()
        }
    }
})
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
.completed {
  text-decoration: line-through red;
}

.danger {
  background-color: #e62f40;
}
</style>