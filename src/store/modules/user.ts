import {setCookie} from "@/utils/auth"
interface Istate{
    token:string,
    userName:string
}
const state:Istate={
    token:"",
    userName:""
}
const mutations={
    setToken(state:Istate,payload:string){
        state.token=payload
    },
    setUserName(state:Istate,payload:string){
        state.userName=payload
    },
    clearUserInfo(state:Istate,payload:null){
        state.token="",
        state.userName=""
    }
}
const actions={
    setUserInfo({commit}:any,payload:Istate){
        console.log(payload);
        
       return new Promise((resolve,reject)=>{
        commit('setToken',payload.token),
        commit('setUserName',payload.userName)
        setCookie(payload.token)
        resolve()
       })
    },
    
}
export default{
    namespaced:true,
    state,
    mutations,
    actions
}