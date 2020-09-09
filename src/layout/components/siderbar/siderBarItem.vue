<template>
  <a-menu-item-group>
    <a-menu-item class="a-menu-item" style="text-align:left" :key="item.name" >
      <app-link :to="resolvePath(item.path)">
        <icon-font :type="`icon-${item.name}`"></icon-font>
        <span>{{item.meta.title}}</span>
      </app-link>
    </a-menu-item>
    
  </a-menu-item-group>
</template>
<script>
import { defineComponent,computed } from "vue";
import { PieChartOutlined, createFromIconfontCN } from "@ant-design/icons-vue";
import * as pathLibrary from "path";
import AppLink from "./link.vue";
const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2003220_3jz8f4m9k5t.js"
});
export default defineComponent({
  components: {
    PieChartOutlined,
    IconFont,
      AppLink

  },

  props: {
    item: {
      type: Object,
      default: () => {}
    },
    basePath:{
      type:String,
      default:""
    }
  },
  name: "siderBarItem",
  setup(props, ctx) {
      const methods={
        resolvePath(path){
          return pathLibrary.resolve(props.basePath,path)
        }
      };
      return {
        ...methods
      }
  }
});
</script>
<style lang="scss" scoped>
.a-menu-item {
  text-align: left;
}
</style>