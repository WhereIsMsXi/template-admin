import { useUserStore } from '@/store/user';
import { useDynamicRouteStore } from '@/store/dynamicRoute';
import _ from 'lodash';
import { dynamicRoute } from './routes/dynamic';
import type { RouteRecordRaw } from 'vue-router';

function hasRole(route: RouteRecordRaw, role: number) {
  if (route.meta?.roles) {
    return route.meta.roles.includes(role);
  }
  return true;
}

function filterRoutesByRole(routes: RouteRecordRaw[], role: number) {
  const result: RouteRecordRaw[] = [];
  routes.forEach((route) => {
    if (hasRole(route, role)) {
      if (route?.children && route.children.length > 0) {
        route.children = filterRoutesByRole(route.children, role);
      }
      result.push(route);
    }
  });
  return result;
}

function filterRoutesByActiveMenu(routes: RouteRecordRaw[]): any {
  const result: RouteRecordRaw[] = [];
  routes.forEach((route) => {
    if (!route.meta?.activeMenu) {
      if (route.children && route.children.length > 0) {
        route.children = filterRoutesByActiveMenu(route.children);
      }
      result.push(route);
    }
  });

  return result;
}

export function initRoute(router: any) {
  function addDynamicRoute() {
    userRoutes.forEach((route: any) => {
      router.addRoute(route);
    });
  }
  function getUserDynamicRoutes() {
    const routes: RouteRecordRaw[] = _.cloneDeep(dynamicRoute);
    const { role } = userStore.user;
    return filterRoutesByRole(routes, role);
  }
  function getUserMenuRoutes() {
    const routes = _.cloneDeep(userRoutes);
    return filterRoutesByActiveMenu(routes);
  }

  const dynamicRouteStore = useDynamicRouteStore();
  const userStore = useUserStore();
  if (!userStore.token) return;

  const userRoutes = getUserDynamicRoutes();
  addDynamicRoute();
  dynamicRouteStore.SET_ROUTES(userRoutes);

  const menuRoutes = getUserMenuRoutes();
  const userMenus = dynamicRouteStore.getMenus(_.cloneDeep(menuRoutes));
  dynamicRouteStore.SET_MENUS(userMenus);

  const menus = dynamicRouteStore.getMenus(_.cloneDeep(userRoutes));
  const authTabs = dynamicRouteStore.getAuthTabs(_.cloneDeep(menus));
  dynamicRouteStore.SET_AUTHTABS(authTabs);
}
