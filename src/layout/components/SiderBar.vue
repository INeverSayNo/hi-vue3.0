<template>
  <div class="sider-bar">
    <router-link class="sider-bar-item" v-for="val in routerList" :key="val.name" :to="val.path">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="'#icon-'+val.name" />
      </svg>
      <span class="sider-bar-item-title">{{val.meta.title}}</span>
    </router-link>
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
      return router.options.routes;
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
    margin: 10px 0px;
    text-decoration: none;
    display: flex;
    align-items: center;
    color: seashell;
    &-title {
      display: inline-block;
      margin-left: 10px;
    }
  }
}
</style>