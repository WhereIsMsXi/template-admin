import { mustArray } from '@where_is_mr_li/utils';
import type { RouteRecordRaw } from 'vue-router';

function sortRoutes(prev: any, next: any) {
  return (prev.meta?.sort || 0) - (next.meta?.sort || 0);
}

const modules = import.meta.glob('../modules/**/*.ts', { eager: true });
export const dynamicRoute: RouteRecordRaw[] = [];

Object.keys(modules).forEach((key) => {
  const content = (modules as any)[key].default;
  const routes: RouteRecordRaw[] = mustArray(content);

  dynamicRoute.push(...routes);
});

dynamicRoute.sort(sortRoutes);
