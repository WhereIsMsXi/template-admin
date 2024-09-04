<script setup lang="ts">
import { getCurrentInstance, ref } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { ElMessage } from 'element-plus';
import screenfull from 'screenfull';

import NoticeList from './components/NoticeList.vue';

import { useUserStore } from '@/store/user';
import { useDynamicRouteStore } from '@/store/dynamicRoute';
import { useTabsStore } from '@/store/tabs';
import { useSystemConfigStore } from '@/store/systemConfig';

import MongooseJpg from '@/assets/mongoose.jpg';
import { I18nModulEnum } from '@/i18n/consts';

const userStore = useUserStore();
const tabsStore = useTabsStore();
const dynamicRouteStore = useDynamicRouteStore();
const systemConfigStore = useSystemConfigStore();

const router = useRouter();

const { systemConfig } = storeToRefs(systemConfigStore);
function handleCommandLang(command: string) {
  if (systemConfig.value.i18n !== command) {
    systemConfig.value.i18n = command;
    systemConfigStore.SET_SYSTEMCONFIG(systemConfig.value);
  }
}
const isFullscreen = ref(false);

const prefixHeader = I18nModulEnum.header;
const { proxy } = getCurrentInstance() as any;
function toggleFullScreen() {
  if (!screenfull.isEnabled) {
    ElMessage.warning(proxy.$t(`${prefixHeader}.fullscreen.support`));
    return;
  }
  screenfull.toggle();
  isFullscreen.value = !isFullscreen.value;
}

function handleCommandConfig(command: string) {
  if (typeof command === 'string') router.push(command);
}

function logOut() {
  tabsStore.CLEAR();
  dynamicRouteStore.CLEAR();
  userStore.CLEAR();
  router.push('/login');
}
</script>
<template>
  <div class="header-user-and-extend">
    <div class="header-user-and-extend__item">
      <el-dropdown
        :show-timeout="70"
        :hide-timeout="50"
        trigger="click"
        @command="handleCommandLang"
      >
        <i :title="$t(prefixHeader + '.notice.lang')">
          <el-icon class="header-user-and-extend__icon" size="16"
            ><House
          /></el-icon>
        </i>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              command="zh-cn"
              :disabled="systemConfig.i18n === 'zh-cn'"
              >简体中文</el-dropdown-item
            >
            <el-dropdown-item
              command="en"
              :disabled="systemConfig.i18n === 'en'"
              >English</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div class="header-user-and-extend__item">
      <el-popover
        placement="bottom"
        trigger="click"
        transition="el-zoom-in-top"
        :width="350"
        :persistent="false"
      >
        <template #reference>
          <i class="aligin-center" :title="$t(prefixHeader + '.notice.title')">
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
      <i
        :title="
          isFullscreen
            ? $t(prefixHeader + '.fullscreen.cancel')
            : $t(prefixHeader + '.fullscreen.confirm')
        "
      >
        <el-icon class="header-user-and-extend__icon" size="16">
          <FullScreen @click="toggleFullScreen" />
        </el-icon>
      </i>
    </div>
    <el-dropdown
      @command="handleCommandConfig"
      :show-timeout="70"
      :hide-timeout="50"
    >
      <span class="header-user-and-extend__item">
        <img :src="MongooseJpg" class="header-user-and-extend__img" />
        <span class="header-user-and-extend__txt">SXT</span>
        <el-icon class="header-user-and-extend__icon user-arrow" size="14"
          ><ArrowDown
        /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="/dashboard">
            {{ $t(prefixHeader + '.userDropdown.homepage') }}
          </el-dropdown-item>
          <el-dropdown-item command="/401">
            {{ $t(prefixHeader + '.userDropdown.401') }}
          </el-dropdown-item>
          <el-dropdown-item command="/403">
            {{ $t(prefixHeader + '.userDropdown.403') }}
          </el-dropdown-item>
          <el-dropdown-item command="/404">
            {{ $t(prefixHeader + '.userDropdown.404') }}
          </el-dropdown-item>
          <el-dropdown-item divided @click="logOut">
            {{ $t(prefixHeader + '.userDropdown.logout') }}
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
