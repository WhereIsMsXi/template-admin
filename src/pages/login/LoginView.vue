<script setup lang="ts">
import { ref } from 'vue';
import BgLoginJpeg from './images/bg-login.jpeg';
import AccountView from './components/AccountView.vue';

const activeName = ref('account');
</script>
<template>
  <div class="login">
    <!-- <img class="login__image" :src="BgLoginJpeg" alt="" /> -->
    <div class="login__main--wrapper">
      <div class="login__main">
        <h2 class="login__title">后台模板</h2>
        <div>
          <el-tabs v-model="activeName">
            <el-tab-pane label="账号登陆" name="account">
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
    width: 28%;
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
    color: #303133;
    font-weight: 500;
    font-size: 22px;
    text-align: center;
    letter-spacing: 4px;
    margin: 15px 0 30px;
    white-space: nowrap;
    z-index: 5;
    position: relative;
    transition: all 0.3s ease;
  }
}
</style>
