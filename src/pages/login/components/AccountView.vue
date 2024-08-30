<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { useUserStore } from '@/store/user';
import type { FormInstance, FormRules } from 'element-plus';

const { loginByUsername } = useUserStore();

const dataFormRef = ref<FormInstance>();
export interface DataForm {
  username: string;
  password: string;
  code: string;
}

const dataForm: Ref<DataForm> = ref({
  username: 'admin',
  password: '123456',
  code: '1234',
});

const isShowPassword = ref(false);
const loadingCtrl = ref({
  login: false,
});
function openLoginLoading() {
  loadingCtrl.value.login = true;
}
function closeLoginLoading() {
  loadingCtrl.value.login = false;
}

const dataFormRules: Ref<FormRules<DataForm>> = ref({
  username: [
    { required: true, message: 'Please input username', trigger: 'blur' },
    {
      min: 3,
      max: 5,
      message: 'Length should be 3 to 5',
      trigger: 'blur',
    },
  ],
  password: [
    { required: true, message: 'Please input password', trigger: 'blur' },
    {
      min: 6,
      max: 12,
      message: 'Length should be 6 to 12',
      trigger: 'blur',
    },
  ],
  code: [
    { required: true, message: 'Please input code', trigger: 'blur' },
    {
      min: 4,
      max: 4,
      message: 'Length should be 4',
      trigger: 'blur',
    },
  ],
});
function handleLogin(formEl: FormInstance | undefined) {
  openLoginLoading();
  if (!formEl) {
    closeLoginLoading();
    return;
  }
  formEl.validate(async (valid) => {
    if (valid) {
      await loginByUsername(dataForm.value);
      closeLoginLoading();
      return;
    }
    closeLoginLoading();
  });
}
</script>
<template>
  <el-form
    ref="dataFormRef"
    :model="dataForm"
    :rules="dataFormRules"
    size="large"
    class="login-account"
  >
    <el-form-item class="login-animation1" prop="username">
      <div class="login-account__label">
        <el-icon size="18" color="#999999">
          <User />
        </el-icon>
        <div class="login-account__txt">账号</div>
      </div>
      <div class="login-account__content">
        <el-input
          type="text"
          placeholder="请输入账号"
          v-model="dataForm.username"
          clearable
          autocomplete="off"
        />
      </div>
    </el-form-item>
    <el-form-item class="login-animation2" prop="password">
      <div class="login-account__label">
        <el-icon size="18" color="#999999">
          <Unlock />
        </el-icon>
        <div class="login-account__txt">密码</div>
      </div>
      <div class="login-account__content">
        <el-input
          :type="isShowPassword ? 'text' : 'password'"
          placeholder="请输入密码"
          v-model="dataForm.password"
          autocomplete="off"
        >
          <template #suffix>
            <el-icon @click="isShowPassword = !isShowPassword">
              <Hide v-if="isShowPassword" />
              <View v-else />
            </el-icon>
          </template>
        </el-input>
      </div>
    </el-form-item>
    <el-form-item class="login-animation3" prop="code">
      <div class="login-account__label">
        <el-icon size="18" color="#999999">
          <Message />
        </el-icon>
        <div class="login-account__txt">验证码</div>
      </div>
      <el-col :span="15">
        <div class="login-account__content">
          <el-input
            type="text"
            maxlength="4"
            placeholder="请输入验证码"
            v-model="dataForm.code"
            clearable
            autocomplete="off"
          />
        </div>
      </el-col>
      <el-col :span="1" />
      <el-col :span="8">
        <el-button class="login-account__code">1234</el-button>
      </el-col>
    </el-form-item>
    <el-form-item class="login-animation4">
      <el-button
        type="primary"
        class="login-account__button"
        round
        @click="handleLogin(dataFormRef)"
        :loading="loadingCtrl.login"
      >
        <span>登陆</span>
      </el-button>
    </el-form-item>
  </el-form>
</template>
<style scoped lang="scss">
.login-account {
  margin-top: 20px;
  // @for $i from 1 through 4 {
  // 	.login-animation#{$i} {
  // 		// opacity: 0;
  // 		// animation-name: error-num;
  // 		animation-duration: 0.5s;
  // 		animation-fill-mode: forwards;
  // 		animation-delay: calc($i/10) + s;
  // 	}
  // }
  &__label {
    width: 100%;
    height: 24px;
    margin-bottom: 5px;
    padding: 0 12px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  &__txt {
    margin-left: 10px;
    font-size: 14px;
    line-height: 24px;
    color: #333;
    font-weight: 600;
  }
  &__content {
    width: 100%;
    padding: 0 5px;
    .el-input__wrapper {
      box-shadow: 0 0 10px -4px #afafaf;
      border-radius: 20px;
    }
    .el-icon {
      cursor: pointer;
    }
  }
  &__code {
    width: 100%;
    padding: 0;
    font-weight: bold;
    letter-spacing: 5px;
  }
  &__button {
    width: 100%;
    letter-spacing: 2px;
    font-weight: 300;
    margin-top: 15px;
  }
}
</style>
