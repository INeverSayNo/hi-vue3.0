<template>
    <div class="error">
        <img src="../assets/image/404.png" class="error-img" alt="">
    </div>
</template>
<script lang="ts">
import {defineComponent,toRefs,reactive,toRaw} from "vue"
export default defineComponent({
    setup(props:any,ctx){

        return {

        }
    }
})
</script>
<style lang="scss" scoped>
.error{
    background-color: black;
    height: 100%;
    &-img{
        width: 446px;
        height: 100%;
    }
}
   
</style>