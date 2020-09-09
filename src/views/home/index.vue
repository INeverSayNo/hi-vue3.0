<!--
 * @Author: your name
 * @Date: 2020-08-23 11:25:49
 * @LastEditTime: 2020-08-30 14:18:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3.0\hi-vue3.0\src\views\home\index.vue
-->
<template>
  <div>
    <p @click=" count++">{{count}}</p>
    <a-button @click="danger" type="danger">Danger</a-button>
    <p v-for="val in books" :key="val.value">{{val.value}}</p>
    <p v-for="val in map" :key="val[0]">{{val[1].value}}</p>
  </div>
</template>
<script lang="ts">
type message = {
  [prop: string]: any;
};
import {
  reactive,
  defineComponent,
  toRefs,
  onMounted,
  watchEffect,
  createApp,
  inject,
  ref
} from "vue";
import { debounce } from "../../utils/debounce";
export default defineComponent({
  name: "home",
  components:{
  },
   setup(props, ctx) {
    const $message: message = inject("$message");
    const homeObj = reactive({
      count: 0
    });
    // 当ref作为响应式对象的property被访问或修改时，会自动展开内部值,
    const testCount=ref(0);
    // const testState=reactive({
    //   testCount
    // });
    // console.log(testState.testCount);
    // testState.testCount=2;
    // console.log(testCount.value)
    
    const books=reactive([ref("Vue 3 Guide")]);
    let [first]=books;
    first.value="new title Again"; //ref展开只存在于嵌套或者响应式Object中,如上,对于array或集合(Map,)需要手动指定
    
    const map=reactive(new Map([['mapCount1',ref(0)],['mapCount2',ref(0)]]))
    map.forEach((e,key)=>{
      key=="mapCount1"?e.value=100:""
    
    });
  const bookInfo=reactive({
    name:"思维的乐趣",
    author:"王小波",
    year:"1997",
    price:"free",
    description:"you should read it now"
  })
   let {name,author,year}=toRefs(bookInfo)
  year.value="1990";
  console.log(bookInfo)
    const methods = () => {
      const danger = debounce(
        () => {
          books[0].value="新标题"
          $message.success("这是一段正确提示", 3);
        },
        3000,
        true
      );
      return {
        danger
      };
    };
    return {
      ...toRefs(homeObj),
      // ...toRefs(books),
      books,
        map,
      ...methods()
    };
  }
});
</script>
<style lang="scss" scoped></style>