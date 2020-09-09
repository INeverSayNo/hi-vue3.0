<template functional>
  <a-modal
    :visible="visible"
    title
    centered
    :footer="null"
    :closable="false"
    :width="270"
    class="dialog-modal-pic"
    :onCancel="closeModal"
  >
    <img :src="imgUrl" alt srcset />
  </a-modal>
</template>
<script lang="ts">
import { Modal } from "ant-design-vue";
import { defineComponent, render } from "vue";
export default defineComponent({
  name: "ModalPic",
  components: {
    AModal: Modal
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    imgUrl: {
      type: String,
      defalut: ""
    }
  },
  setup(props: any, { emit }) {
    function closeModal() {
      emit("update:visible", false);
    }
    return {
      closeModal
    };
  }
});
</script>
<style >
.dialog-modal-pic .ant-modal-content {
  background-color: #f0f8ff00 !important;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15) !important;
}
</style>
<style lang="scss" scoped>
</style>