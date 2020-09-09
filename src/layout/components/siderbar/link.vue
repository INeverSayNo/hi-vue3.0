<template>
        <component :is="type" v-bind="linkProps(to)">
            <slot/>
        </component>
</template>
<script>
import {computed,ref,reactive,onMounted} from "vue";
import {vaildExternal} from "@/utils/vaild"
export default {
    name:"AppLink",
    props:{
        to:{
            type:String,
            default:""
        }
    },
    setup(props,ctx){
        let isExternal=vaildExternal(props.to)
        let type=computed(()=>{
            return isExternal?'a':'router-link'
        })
        function linkProps(to){
            if(type=="a"){
                return {
                    href:to,
                    target:"_blank"
                }
            }else{
                return {
                    to:to
                }
            }
        };
        return {
            type,
            linkProps
        }
    }
}
</script>