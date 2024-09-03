import { defineStore } from 'pinia';
import { session } from '@where_is_mr_li/storage';
import { TABS } from './constants';
import { useDynamicRouteStore } from './dynamicRoute';
import type { RouteRecordRaw } from 'vue-router';

export const useTabsStore = defineStore('tabs', {
  state: () => ({
    tabs: session.get(TABS) || [],
  }),
  actions: {
    SET_TABS(data: Array<any>) {
      session.set(TABS, data);
      this.tabs = data;
    },
    ADD_TAB(path: string) {
      const { authTabs } = useDynamicRouteStore();
      const item = authTabs.find((i: RouteRecordRaw) => i.path === path);
      const data = [...this.tabs, item];
      this.SET_TABS(data);
    },
    DEL_TAB(path: string) {
      const data = this.tabs;
      const index = data.findIndex((i: any) => i.path === path);

      if (index !== -1) {
        data.splice(index, 1);
        this.SET_TABS(data);
      }
      return index;
    },
    CLEAR() {
      this.tabs = [];
      session.del(TABS);
    },
    getPrevTab(index: number) {
      if (index < 0) throw new Error('index is error');
      return this.tabs[index - 1];
    },
    getAffixTab() {
      const result: RouteRecordRaw[] = [];
      const { authTabs } = useDynamicRouteStore();
      authTabs.forEach((i: RouteRecordRaw) => {
        if (i.meta?.isAffix) result.push(i);
      });
      return result;
    },
  },
});
