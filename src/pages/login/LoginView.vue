<script setup lang="ts">
import { ref } from 'vue';
import BgLoginJpeg from './images/bg-login.jpeg';
import AccountView from './components/AccountView.vue';
import { I18nModulEnum } from '@/i18n/consts';

const activeName = ref('account');
</script>
<template>
  <div class="login">
    <!-- <img class="login__image" :src="BgLoginJpeg" alt="" /> -->
    <div class="login__main--wrapper">
      <div class="login__main">
        <h2 class="login__title">{{ $t(`${I18nModulEnum.login}.name`) }}</h2>
        <div>
          <el-tabs v-model="activeName">
            <el-tab-pane
              :label="$t(`${I18nModulEnum.login}.title`)"
              name="account"
            >
              <account-view />
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.login {
  @include flex-row(flex-end, center);
  width: 100%;
  height: 100%;
  position: relative;
  &__image {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: left top;

    position: fixed;
    top: 0;
    left: 0;
  }
  &__main--wrapper {
    width: 500px;
    margin-right: 11%;
    padding: 20px;
    background-color: #ffffff;
    border: 5px solid #d8ebff;
    border-radius: 10px;
    overflow: hidden;
    z-index: 9;
  }
  &__main {
    width: 80%;
    margin: 0 auto;
  }
  &__title {
    @include font-init(22px, #303133, 500, 1);
    margin: 15px 0 30px;
    white-space: nowrap;
    text-align: center;
    letter-spacing: 4px;
    position: relative;
    z-index: 5;
    transition: all 0.3s ease;
  }
}

// 处理移动端样式
@media screen and (max-width: 620px) {
  .login {
    .login__main--wrapper {
      width: 100% !important;
      height: 100% !important;
      padding: 20px 0 !important;
      border-radius: 0 !important;
      box-shadow: unset !important;
      border: none !important;
      margin-right: 0;
    }
  }
}
</style>
