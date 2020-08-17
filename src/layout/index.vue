<template>
    <div class="layout-container">
        <sider-bar class="layout-container-sider-bar"></sider-bar>
        <app-main class="layout-container-app-main"></app-main>
    </div>
</template>
<script>
import AppMain from "./components/AppMain";
import SiderBar from "./components/SiderBar";
import {defineComponent} from "vue"
export default defineComponent({
    name:"Layout",
    components:{
        AppMain,
        SiderBar
    }
})
</script>
<style lang="scss" scoped>
    .layout-container{
        display: flex;
        width: 100%;
        height: 100%;
        &-sider-bar{
            width: 8%;
            height: 100%;
            background-color: #0c2554;
        }
        &-app-main{
            width: 88%;
            height: 100%;
        }
    }
</style>