<!--
 * @Author: your name
 * @Date: 2020-08-20 15:52:07
 * @LastEditTime: 2020-08-20 16:15:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hi-vue3.0\src\views\features\index.vue
-->
<template>
    <div>
        <p>{{msg}}</p>
    </div>
</template>
<script  lang="ts">
import {defineComponent,reactive,toRefs,ref} from "vue"
export default defineComponent({
    name:"Features",
    setup(props:any,ctx){
        const msg=ref('message');
        return {
            msg
        }
    }
})
</script>
<style lang="scss" scoped>
    
</style>