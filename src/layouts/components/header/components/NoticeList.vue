<script setup lang="ts">
import { ref } from 'vue';

const notices = ref([
  {
    name: '入库',
    key: 'entry',
    number: 1,
  },
  {
    name: '要货',
    key: 'demand',
    number: 1,
  },
  {
    name: '盘点',
    key: 'check',
    number: 1,
  },
  {
    name: '包损',
    key: 'breakage',
    number: 1,
  },
  {
    name: '退货',
    key: 'back',
    number: 1,
  },
]);
function handleClick() {
  notices.value = [];
}
</script>
<template>
  <div class="header">
    <div class="header--prev">通知</div>
    <div class="header--next">
      <el-button type="text" size="small" @click="handleClick">
        全部已读
      </el-button>
    </div>
  </div>
  <div class="body">
    <template v-for="item in notices" :key="item.key">
      <div class="item">
        <div class="red-dot"></div>
        <div class="text">
          {{ item.name }}
        </div>
      </div>
    </template>
    <div class="item">
      <div class="red-dot"></div>
      <div class="text">您有 1 个订单待分配</div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.header {
  @include flex-row(space-between, center);
  padding: 5px 0;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    border-bottom: 1px solid #e6e6e6;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #e6e6e6;
    transform: scaleY(0.5);
  }
}
.body {
  .item {
    @include flex-row(flex-start, center);
    font-size: 12px;
    padding: 10px 0;
    position: relative;
    cursor: pointer;
    &::after {
      content: '';
      position: absolute;
      border-bottom: 1px dashed #e6e6e6;
      left: 0;
      bottom: 0;
      width: 100%;
      transform: scaleY(0.5);
    }
    &:last-child {
      &::after {
        display: none;
      }
    }
  }
  .red-dot {
    width: 6px;
    height: 6px;
    background: #ff4d4f;
    border-radius: 50%;
    margin: 0 20px;
  }
}
</style>
