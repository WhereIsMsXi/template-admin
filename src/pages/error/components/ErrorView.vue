<script setup lang="ts">
import { useRouter } from 'vue-router';

const $props = defineProps({
  info: {
    type: String,
    default: '401',
  },
});
const router = useRouter();

function back() {
  router.back();
}

function goHome() {
  router.push({ path: '/' });
}
</script>
<template>
  <div class="error">
    <el-card class="card">
      <div class="error__title">
        {{ info[0] }}
        <span>{{ info[1] }}</span>
        {{ info[2] }}
      </div>
      <p class="error__message">YOU&nbsp;&nbsp;LOOK&nbsp;&nbsp;LOST</p>
      <div class="error__btn">
        <el-button
          type="text"
          size="large"
          style="width: 200px"
          @click="goHome"
        >
          返回首页
        </el-button>
        <el-button
          type="primary"
          size="large"
          style="width: 200px; margin-left: 40px"
          @click="back"
        >
          返回上一页
        </el-button>
      </div>
    </el-card>
  </div>
</template>
<style scoped lang="scss">
@keyframes erroranimation {
  0% {
    transform: rotateZ(0deg);
  }
  20% {
    transform: rotateZ(-60deg);
  }
  40% {
    transform: rotateZ(-10deg);
  }
  60% {
    transform: rotateZ(50deg);
  }
  80% {
    transform: rotateZ(-20deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
}
.error {
  width: 700px;
  height: 500px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  &__title {
    text-align: center;
    font-size: 240px;
    font-weight: 700;
    color: #2d8cf0;
    height: 260px;
    line-height: 260px;
    margin-top: 40px;
    span {
      display: inline-block;
      color: #19be6b;
      font-size: 230px;
      animation: erroranimation 3s ease 0s infinite alternate;
    }
  }
  &__message {
    display: block;
    text-align: center;
    font-size: 30px;
    font-weight: 500;
    letter-spacing: 12px;
    color: #dddde2;
  }
  &__btn {
    text-align: center;
    padding: 20px 0;
    margin-bottom: 40px;
  }
}
</style>
