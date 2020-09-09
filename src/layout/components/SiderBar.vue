<!--
 * @Author: your name
 * @Date: 2020-08-12 21:15:47
 * @LastEditTime: 2020-08-20 16:26:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hi-vue3.0\src\layout\components\SiderBar.vue
-->
<template>
  <div class="sider-bar">
    <transition v-for="val in routerList" :key="val.name">
    <router-link class="sider-bar-item"  :to="val.path">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="'#icon-'+val.name" />
      </svg>
      <span class="sider-bar-item-title ali-font">{{val.meta.title}}</span>
    </router-link>
    </transition>
    
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: "SiderBar",
  setup(props: unknown, ctx) {
    const router = useRouter();
    const route = useRoute();

    const routerList = computed(() => {
      return router.options.routes.filter(e=>!e.meta.hidden);
    });
    return {
      routerList
    };
  }
});
</script>
<style lang="scss" scoped>
.sider-bar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4px 20px;
  &-item {
    margin: 18px 0px;
    width: 100%;
    text-decoration: none;
    display: flex;
    align-items: center;
    color: seashell;
    padding: 10px 10px;
    &-title {
      display: inline-block;
      margin-left: 10px;
      color:#eee;
      font-size: 14px;
    }
  }
  &-item:hover{
    background-color: #4d7fe361;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  
}
</style>