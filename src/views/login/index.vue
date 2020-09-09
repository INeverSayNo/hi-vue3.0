<template>
  <div class="coustom-bg">
    <h1 class="login-title">HI VUE3.0</h1>
    <div class="login-container">
      <label class="login-container-label" for="userName">
        <svg class="icon login-container-label-icon" aria-hidden="true">
          <use xlink:href="#icon-login-userName" />
        </svg>
        <input class="ui-input login-container-label-input" v-model="userName" />
      </label>
      <label class="login-container-label" for="password">
        <svg class="icon login-container-label-icon" aria-hidden="true">
          <use xlink:href="#icon-login-password" />
        </svg>
        <input class="ui-input login-container-label-input" type="password" v-model="password" />
      </label>
      <div class="btn-group">
        <button
          class="ui-button width20"
          @click="login"
          :disabled="loginCanClick"
          data-type="success"
        >登录</button>
        <button class="ui-button width20" data-type="warning">注册</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, toRefs, reactive, computed } from "vue";
import { useStore, mapState, mapMutations, mapActions } from "vuex";
import { useRouter } from "vue-router";
import { Connector } from "../../api/index";
const { user } = Connector;
export default defineComponent({
  setup(props: any, ctx) {
    const store = useStore();
    const router = useRouter();
    const LoginInfo = reactive({
      userName: "",
      password: ""
    });
    const loginCanClick = computed(() => {
      return !(LoginInfo.userName !== "" && LoginInfo.password !== "");
    });
    const methods = () => {
      const login = async () => {
        const { data } = await user.login(LoginInfo);
        if (data.data) {
          store.dispatch("User/setUserInfo", data.data).then(res => {
            router.push({ path: "/" });
          });
        } else {
          new LightTip().error(data.msg);
        }
      };
      return {
        login
      };
    };
    return {
      ...toRefs(LoginInfo),
      loginCanClick,
      ...methods()
    };
  }
});
</script>
<style lang="scss" scoped>
@media screen and (max-width:768px) {
  .btn-group{
    display: flex;
    .ui-button{
      margin-left: 0px;
    }
    .ui-button:last-child{
      margin-left: 10px;
    }
  }
}
.login-title {
  font-size: 20px;
  font-weight: 700;
  padding-top: 100px;
  text-align: center;
}
.login-container {
  display: flex;
  flex-direction: column;
  width: 40%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &-label {
    margin: 6px 0px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    &-icon {
      padding-right: 8px;
    }
    &-input {
      background-color: #ffffff00;
      color: black;
    }
  }
}
.coustom-bg {
  width: 100%;
  height: 100%;
  background-color: #407aac !important;
}
.btn-group {
}
</style>