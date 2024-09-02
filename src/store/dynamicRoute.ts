import { session } from '@where_is_mr_li/storage';
import { defineStore } from 'pinia';
import type { DynamicRouteState } from './types';
import { MENUS, ROUTES } from './constants';
import type { RouteRecordRaw } from 'vue-router';

function isRoot(route: RouteRecordRaw) {
  const { children = [], meta } = route;
  return meta?.isRoot && children?.length === 1;
}
function isSubMenu(route: RouteRecordRaw) {
  const { children = [], meta } = route;
  return !meta?.isRoot && children?.length > 0;
}

export const useDynamicRouteStore = defineStore('dynamicRoute', {
  state: (): DynamicRouteState => ({
    routes: session.get(ROUTES) || [],
    menus: session.get(MENUS) || [],
  }),
  actions: {
    SET_ROUTES(data: RouteRecordRaw[]) {
      this.routes = data;
      session.set(ROUTES, data);
    },
    SET_MENUS(data: RouteRecordRaw[]) {
      this.menus = data;
      session.set(MENUS, data);
    },
    CLEAR() {
      this.routes = [];
      session.del(ROUTES);
    },
    getMenus(routes: RouteRecordRaw[]) {
      function getRootItem(rotue: any) {
        const result = { ...rotue };
        result.meta = { ...result.meta, ...rotue.children[0].meta };
        return result;
      }
      function getSubMenuItem(route: any) {
        route.children = route.children.map((i: any) => {
          return { ...i, ...{ path: `${route.path}/${i.path}` } };
        });
        return route;
      }

      const result: RouteRecordRaw[] = [];
      routes.forEach((route) => {
        if (isRoot(route)) {
          const item = getRootItem(route);
          result.push(item);
        } else if (isSubMenu(route)) {
          const item = getSubMenuItem(route);
          result.push(item);
        }
      });
      return result;
    },
  },
});
