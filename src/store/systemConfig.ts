import { defineStore } from 'pinia';
import { local } from '@where_is_mr_li/storage';
import type { SystemConfig, SystemConfigState } from './types';
import { SYSTEM_CONFIG } from './constants';

export const useSystemConfigStore = defineStore('systemConfig', {
  state: (): SystemConfigState => ({
    systemConfig: local.get(SYSTEM_CONFIG) || { i18n: 'zh-cn' },
  }),
  actions: {
    SET_SYSTEMCONFIG(data: SystemConfig) {
      this.systemConfig = data;
      local.set(SYSTEM_CONFIG, data);
    },
  },
});
