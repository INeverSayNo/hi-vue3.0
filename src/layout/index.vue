<!--
 * @Author: your name
 * @Date: 2020-08-12 21:13:43
 * @LastEditTime: 2020-09-02 22:43:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hi-vue3.0\src\layout\index.vue
-->
<template>
       <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider class="layout-sider" v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <sider-bar :collapsed="collapsed"></sider-bar>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <app-main></app-main>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import AppMain from "./components/AppMain";
import SiderBar from "./components/siderbar/index";
import {defineComponent,ref} from "vue";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
export default defineComponent({
    name:"Layout",
    components:{
        AppMain,
        SiderBar,
        UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    },
    setup(props,ctx){
        let collapsed=ref(false);
        let selectedKeys=ref(['1']);
        return {
            collapsed,
            selectedKeys
        }
    }
})
</script>
<style >
    #components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
<style lang="scss" scoped>
.layout-sider{
  height: 100%;
}
    .layout-container{
        display: flex;
        width: 100%;
        height: 100%;
        &-sider-bar{
            width: 13%;
            height: 100%;
            background-color: #a7beec61;
        }
        &-app-main{
            width: 87%;
            height: 100%;
            padding-right:2px;
            padding-left: 2px;
            background-color: #ffffffa3;
        }
    }
    @media screen and (max-width:1600px) {
        .layout-container-sider-bar{
            width: 150px;
        }
    }
    @media screen and (max-width:720px){
        .layout-container-sider-bar{
           display: none;
        }
    }
</style>