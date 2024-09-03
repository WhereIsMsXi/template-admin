<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import screenfull from 'screenfull';

import { useDynamicRouteStore } from '@/store/dynamicRoute';
import { useUserStore } from '@/store/user';
import NoticeList from './components/NoticeList.vue';
import { ElMessage } from 'element-plus';

import MongooseJpg from '@/assets/mongoose.jpg';

const dynamicRouteStore = useDynamicRouteStore();
const userInfoSotre = useUserStore();

const router = useRouter();
const isFullscreen = ref(false);

function toggleFullScreen() {
  if (!screenfull.isEnabled) {
    ElMessage.warning('当前浏览器不支持全屏');
    return;
  }
  screenfull.toggle();
  isFullscreen.value = !isFullscreen.value;
}

function handleCommand(command: string) {
  router.push(command);
}

function logOut() {
  dynamicRouteStore.CLEAR();
  userInfoSotre.CLEAR();
  router.push('/login');
}
</script>
<template>
  <div class="header-user-and-extend">
    <div class="header-user-and-extend__item">
      <el-popover
        placement="bottom"
        trigger="click"
        transition="el-zoom-in-top"
        :width="350"
        :persistent="false"
      >
        <template #reference>
          <i class="aligin-center" :title="'.notice.title'">
            <el-badge :is-dot="true">
              <el-icon><Bell /></el-icon>
            </el-badge>
          </i>
        </template>
        <template #default>
          <notice-list />
        </template>
      </el-popover>
    </div>
    <div class="header-user-and-extend__item">
      <i :title="isFullscreen ? '.fullscreen.cancel' : '.fullscreen.confirm'">
        <el-icon class="header-user-and-extend__icon" size="16">
          <FullScreen @click="toggleFullScreen" />
        </el-icon>
      </i>
    </div>
    <el-dropdown @command="handleCommand" :show-timeout="70" :hide-timeout="50">
      <span class="header-user-and-extend__item">
        <img :src="MongooseJpg" class="header-user-and-extend__img" />
        <span class="header-user-and-extend__txt">SXT</span>
        <el-icon class="header-user-and-extend__icon user-arrow" size="14"
          ><ArrowDown
        /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="/dashboard">首页 </el-dropdown-item>
          <el-dropdown-item command="/401">401</el-dropdown-item>
          <el-dropdown-item command="/403">403</el-dropdown-item>
          <el-dropdown-item command="/404">404</el-dropdown-item>
          <el-dropdown-item divided @click="logOut">
            退出登陆
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<style scoped lang="scss">
.header-user-and-extend {
  @include flex-row(flex-start, center);
  &__item {
    @include flex-row(flex-start, center);
    height: 100%;
    padding: 0 10px;
    color: #606060;
    cursor: pointer;
    &:hover {
      i {
        display: inline-block;
        animation: IconAnimation 0.3s ease-in-out;
      }
    }
    ::v-deep(.el-badge) {
      @include flex-row(flex-start, center);
    }
  }
  &__img {
    width: 25px;
    height: 25px;
    border-radius: 6px;
  }
  &__txt {
    margin-left: 5px;
    font-size: 12px;
  }
  .user-arrow {
    margin-left: 5px;
  }
}
</style>
