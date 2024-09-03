import type { RouteRecordRaw } from 'vue-router';
import type { RoleEnum } from '../enums/role';

// user
export interface UserInfoState {
  user: User;
  token: string;
}
export interface User {
  name: string;
  token: string;
  role: RoleEnum;
}

// dynamicRoute
export interface DynamicRouteState {
  routes: RouteRecordRaw[];
  menus: RouteRecordRaw[];
  authTabs: RouteRecordRaw[];
}
