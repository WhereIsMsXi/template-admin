<template>
  <el-container class="layout-container" style="height: 100%">
    <router-view v-slot="{ Component }">
      <transition mode="out-in">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </el-container>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss"></style>
