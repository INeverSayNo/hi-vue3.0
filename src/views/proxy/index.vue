<!--
 * @Author: your name
 * @Date: 2020-08-18 10:09:42
 * @LastEditTime: 2020-08-20 15:48:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hi-vue3.0\src\views\proxy\index.vue
-->
<template>
  <div>
    <h1 class="proxy-title">how to use Proxy</h1>
    <div class="proxy-select">
      <div class="proxy-select-language">
        <select v-model="mode" @change="changeMode">
          <option
            v-for="val in langList"
            :value="val.value"
            :label="val.lebel"
            :key="val.value"
          >{{val.label}}</option>
        </select>
      </div>
      <div class="proxy-select-theme">
        <select v-model="selectedTheme" @change="changeTheme">
          <option
            v-for="val in themeList"
            :value="val.value"
            :label="val.lebel"
            :key="val.value"
          >{{val.label}}</option>
        </select>
      </div>
    </div>
    <div class="ui-textarea coustom-select">
      <textarea rows="8" ref="codeTextarea" resize="vertical"></textarea>
    </div>
  </div>
</template>
<script >
import * as CodeMirror from "codemirror";
// 核心样式
import "codemirror/lib/codemirror.css";
// 引入主题后还需要在 options 中指定主题才会生效
import "codemirror/mode/xml/xml.js";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/mode/vue/vue.js";
const themes = require.context("codemirror/theme", true, /\.css$/);
let themeList = [];
for (const key of themes.keys()) {
  const field=key.substr(2).replaceAll(".css", "");
  themeList.push({
    label: field,
    value: field
  });
  import(`codemirror/theme/${key.substr(2)}`);
}
import {
  reactive,
  ref,
  toRefs,
  defineComponent,
  getCurrentInstance,
  computed,
  onMounted,
  nextTick
} from "vue";
const langList = [
  { value: "javascript", label: "javascript" },
  { value: "html", label: "XML/HTML" },
  { value: "Vue", label: "Vue" }
];
let editor = null;
export default defineComponent({
  name: "Proxy",
  setup(props, ctx) {
    const instance = getCurrentInstance(); //vm实例
    const code = ref("console.log('Hello World')"); //内部代码
    let mode = ref("javascript"); //语言类型
    let selectedTheme = ref("ambiance"); //编辑器主题
    const codeMirrorOptions = reactive({
      tabSize: 2,
      lineNumbers: true,
      line: true
    }); //编辑器配置
    const codeTextarea = computed(() => {
      return instance.refs.codeTextarea;
    });
    //#region 方法体
    const methods = () => {
      // 修改语言类型
      const changeMode = (...arg) => {
        nextTick(() => {
          editor.setOption("mode", mode.value);
        });
      };
      // 修改主题
      const changeTheme = (...arg) => {
        nextTick(() => {
          editor.setOption("theme", selectedTheme.value);
        });
      };
      // 编辑器初始化
      const init = () => {
        editor = CodeMirror.fromTextArea(
          codeTextarea.value,
          Object.assign(codeMirrorOptions, {
            mode: mode.value,
            theme: selectedTheme.value
          })
        );
        editor.setValue(code.value);
      };
      return {
        changeMode,
        changeTheme,
        init
      };
    };
    //#endregion

    onMounted(() => {
      methods().init();
    });
    return {
      langList,
      code,
      editor,
      mode,
      themeList,
      selectedTheme,
      ...toRefs(codeMirrorOptions),
      ...methods()
    };
  }
});
</script>
<style lang="scss" scoped>
.proxy {
  &-title {
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
  }
  &-select{
    display: flex;
    align-content: center;
    justify-content: flex-end;
    margin-bottom: 6px;
    &-language {
    text-align: right;
    margin-right: 10px;
    }
  }
}
.coustom-select {
  text-align: left;
  border: 2px solid rebeccapurple;
  border-radius: 4px;
}
</style>