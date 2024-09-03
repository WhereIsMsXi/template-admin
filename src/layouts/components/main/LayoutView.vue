<script setup lang="ts"></script>
<template>
  <div class="h100">
    <router-view v-slot="{ Component }">
      <transition mode="out-in">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>
<style scoped lang="scss">
.h100 {
  height: 100%;
  background-color: #fff;
}
</style>
