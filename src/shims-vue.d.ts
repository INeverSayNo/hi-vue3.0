declare module "*.vue" {
  import {defineAsyncComponent, defineComponent} from "vue";
  // 获取defineComponent的返回值,
  const component:ReturnType<typeof defineComponent>
  export default component;
}
