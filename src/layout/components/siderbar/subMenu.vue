<template>
    <a-sub-menu :key="item.name">
        <template v-slot:title>
          <icon-font :type="`icon-${item.name}`"></icon-font><span>{{item.meta.title}}</span>
        </template>
        <template v-if="singleRouter.length">
            <!-- 嵌套路由需要合并上级path -->
            <sider-bar-item v-for="val in singleRouter" :base-path="item.path" :key="val.name" :item="val"></sider-bar-item>
        </template>
       <template v-if="multiRouter.length">
        <!--  -->
        <sub-menu v-for="child in multiRouter" :key="child.name" :item="child"></sub-menu>
           
       </template>
      </a-sub-menu>
</template>
<script>
import {defineComponent,computed} from "vue";
import {createFromIconfontCN} from "@ant-design/icons-vue";
import siderBarItem from "./siderBarItem";
const IconFont = createFromIconfontCN({scriptUrl:"https://at.alicdn.com/t/font_2003220_3jz8f4m9k5t.js"})
export default defineComponent({
    name:"SubMenu",
    components:{
        IconFont,
        siderBarItem
    },
    props:{
        item:{
            type:Object,
            default:()=>{}
        }
    },
    setup(props,ctx){
        const singleRouter=computed(()=>{
            return props.item.children.filter(e=>!e.children || e.children.length<1)
        })
        const multiRouter=computed(()=>{
            return props.item.children.filter(e=>e.children && e.children.length>=1)
        })
        console.log(singleRouter);
        const methods={
            hasChildren(){
                return true
            }
        }
        return {
            ...methods,
            singleRouter,
            multiRouter
        }
    }
})
</script>
<style lang="scss" scoped>
    
</style>