<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
</script>
<template>
  <div id="h100">
    <router-view v-slot="{ Component }">
      <transition mode="out-in">
        <keep-alive v-if="route.meta.keepAlive">
          <component :is="Component" />
        </keep-alive>
        <component v-else :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>
<style scoped lang="scss">
#h100 {
  height: 100%;
  overflow: auto;
  border-radius: 15px;
}
</style>
