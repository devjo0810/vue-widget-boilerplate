<template>
  <div class="menu-signup">
    <form class="signup-form" @submit.prevent>
      <h3>회원가입</h3>
      <CommonInputBox
        class="item"
        label="아이디"
        type="text"
        v-model="form.id"
      />
      <CommonInputBox
        class="item"
        label="이름"
        type="text"
        v-model="form.name"
      />
      <CommonInputBox
        class="item"
        label="비밀번호"
        type="password"
        v-model="form.password"
      />
      <CommonSelectBox
        class="item"
        label="사용자 타입"
        :items="typeItems"
        v-model="form.type"
      />
      <CommonSelectBox
        class="item"
        label="사용자 권한"
        :items="authItems"
        v-model="form.auth"
      />
      <div class="btn-area">
        <CommonTextButton label="회원가입" color="primary" @click="signup" />
        <CommonTextButton label="초기화" @click="reset" />
      </div>
    </form>
    <CommonSpinnerWrapper v-if="spinner">
      <CommonSpinner1 />
    </CommonSpinnerWrapper>
  </div>
</template>

<script>
import CommonSpinnerWrapper from "@/components/common/CommonSpinnerWrapper.vue";
import CommonSpinner1 from "@/components/common/CommonSpinner1.vue";
import CommonTextButton from "@/components/common/CommonTextButton.vue";
import CommonInputBox from "@/components/common/CommonInputBox.vue";
import CommonSelectBox from "@/components/common/CommonSelectBox.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "WidgetMenuSignup",
  components: {
    CommonSpinnerWrapper,
    CommonSpinner1,
    CommonTextButton,
    CommonInputBox,
    CommonSelectBox,
  },
  props: {
    compoId: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      widgetList: "WidgetManager/getWidgetList",
    }),
    spinner() {
      const widget = this.widgetList.find((item) => item.id === this.compoId);
      return widget.spinner;
    },
  },
  data: () => ({
    typeItems: [
      { value: "101", label: "관리자" },
      { value: "102", label: "일반사용자" },
    ],
    authItems: [
      { value: "101", label: "시스템관리자" },
      { value: "102", label: "일반사용자" },
    ],
    form: {
      id: "",
      password: "",
      name: "",
      type: "",
      auth: "",
    },
  }),
  methods: {
    ...mapActions({
      offSpinner: "WidgetManager/offSpinner",
      onSpinner: "WidgetManager/onSpinner",
    }),
    signup() {
      console.log(this.form);
      this.onSpinner(this.compoId);
      setTimeout(() => {
        this.offSpinner(this.compoId);
      }, 3000);
    },
    reset() {
      const originData = this.$options.data();
      this.form = { ...originData.form };
    },
  },
};
</script>

<style lang="scss">
.menu-signup {
  width: 100%;
  height: 100%;
  .signup-form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 7px;
    h3 {
      font-size: 1.5rem;
    }
    .item {
      margin-top: 10px;
      max-width: 300px;
      font-size: 1.3rem;
    }
    .btn-area {
      margin-top: 20px;
      font-size: 1.3rem;
      button {
        margin-right: 10px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
