<template>
  <div class="todo-footer">
    <input v-model="addText" type="text" class="input-text" name id />
    <button
      class="btn"
      :class="[canClick?'btn-disable':'']"
      :disabled="canClick"
      @click="addItem"
    >添加</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, ref, computed } from "vue";
export default defineComponent({
  name: "TodoFooter",
  setup(props: any, { emit }) {
    const addText = ref("");
//#region 方法
    const Methods = () => {
      const addItem = () => {
        emit("update-list", "add", addText.value);
        addText.value = "";
      };
      return {
        addItem
      };
    };
//#endregion

//#region 计算属性
    const Computed = () => {
      const canClick = computed((): boolean => {
        return !Boolean(addText.value.length);
      });
      return {
        canClick
      };
    };
//#endregion
    return {
      addText,
      ...Computed(),
      ...Methods()
    };
  }
});
</script>
<style lang="scss" scoped>
.todo-footer {
  width: 30%;
  margin: 0 auto;
  text-align: left;
}
</style>