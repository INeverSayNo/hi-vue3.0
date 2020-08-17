
type todoItem={
    text:string,
    completed:boolean,
}
interface State{
    todoList:Array<todoItem>
}
const state:State={
    todoList:[{text:"demo",completed:false}],
    
}
const mutations={
    changeTodoList(state:State,payload:todoItem){
        state.todoList=state.todoList.map((e:todoItem)=>{
            if(e.text===payload.text){
                e.completed=!e.completed
            }
            return e
        });
    },
    removeTodoList:(state:State,payload:todoItem):void=>{
            state.todoList=state.todoList.filter(e=>e.text!==payload.text)
    }
}
export default {
    namespaced:true,
    state,
    mutations,
    actions:{
        toggleTodoList:({commit}: any,payload:todoItem):void=>{
            
           commit('changeTodoList',payload)
            
        },
        
    }
}