<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
function goNext() {
  router.push({
    path: '/layout/body-detail',
  });
}
</script>
<template>
  <div class="main-content">
    <div>body</div>
    <div class="route" @click="goNext">跳详情</div>
  </div>
</template>
<style scoped lang="scss">
.main-content {
  background-color: #fa7331;
}
.route {
  width: 200px;
  height: 1600px;
  line-height: 1600px;
  text-align: center;
  margin-top: 20px;
  cursor: pointer;
}
</style>
