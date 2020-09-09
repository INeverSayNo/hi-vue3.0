<template>
    <a-menu
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
      :inlineIndent="10"
    >
      <sider-bar-item v-for="item in singleRouterList" :key="item.name" :base-path="''" :item="item"></sider-bar-item>
      <sub-menu v-for="item in nestRouterList" :key="item.name" :item="item"></sub-menu>
    </a-menu>
</template>
<script>
import {defineComponent,reactive,ref,computed} from "vue";
import siderBarItem from "./siderBarItem";
import subMenu from "./subMenu"
import {useRouter} from "vue-router"
export default defineComponent({
    props:{
collapsed:{
    type:Boolean,
    default:false
},
    },
    components:{
    siderBarItem,
    subMenu
},
    setup(props,ctx){
        const singleRouterList=useRouter().options.routes.filter(e=>!e.meta.hidden && e.children.length<=1);
        const nestRouterList=useRouter().options.routes.filter(e=>!e.meta.hidden && e.children.length>1);
        let selectedKeys=ref(['1'])
        return {
            selectedKeys,
            singleRouterList,
            nestRouterList
        }
    }
})
</script>
<style lang="scss" scoped>
    
</style>