<template>
  <div>
    
    <p @click=" count++">{{count}}</p>
  </div>
</template>
<script lang="ts">
import { reactive, defineComponent, toRefs, onMounted, watchEffect } from "vue";
export default defineComponent({
  name: "home",
  setup(props) {
    const homeObj = reactive({
      count: 0
    });
    return {
      ...toRefs(homeObj)
    };
  }
});
</script>
<style lang="scss" scoped></style>