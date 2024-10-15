import { defineStore } from 'pinia';
import { local } from '@where_is_mr_li/storage';
import type { SystemConfig, SystemConfigState } from './types';
import { IS_COLLAPSE, SYSTEM_CONFIG } from './constants';

export const useSystemConfigStore = defineStore('systemConfig', {
  state: (): SystemConfigState => ({
    systemConfig: local.get(SYSTEM_CONFIG) || { i18n: 'zh-cn' },
    isCollapse: local.get(IS_COLLAPSE) || false,
  }),
  actions: {
    SET_SYSTEMCONFIG(data: SystemConfig) {
      this.systemConfig = data;
      local.set(SYSTEM_CONFIG, data);
    },
    SET_ISCOLLAPSE(data: boolean) {
      this.isCollapse = data;
      local.set(IS_COLLAPSE, data);
    },
  },
});
