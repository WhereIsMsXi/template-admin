<script setup lang="ts">
import type { FormInstance } from 'element-plus';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/user';

import { loadingHook } from './account/loadingHook';
import { formHook } from './account/formHook';
import { routerHook } from './account/routerHook';
import { initRoute } from '@/router/route';

const router = useRouter();

// loading
const { loadingCtrl, openLoginLoading, closeLoginLoading } = loadingHook();

// form
const { dataFormRef, dataFormRules, dataForm } = formHook();

// router
const { goHome } = routerHook();

const isShowPassword = ref(false);

const { loginByUsername } = useUserStore();
function handleLogin(formEl: FormInstance | undefined) {
  openLoginLoading();
  if (!formEl) {
    closeLoginLoading();
    return;
  }
  formEl.validate(async (valid) => {
    if (valid) {
      await loginByUsername(dataForm.value);

      initRoute(router);
      closeLoginLoading();
      goHome();
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
  &__label {
    @include flex-row(flex-start, center);
    width: 100%;
    height: 24px;
    margin-bottom: 5px;
    padding: 0 12px;
  }
  &__txt {
    @include font-init(14px, #333, 600, 24px);
    margin-left: 10px;
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
