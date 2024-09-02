import type { RoleEnum } from '@/store/enums/role';

declare module 'vue-router' {
  interface RouteMeta {
    isRoot?: boolean;
    isAffix?: boolean;
    title?: string;
    roles?: RoleEnum[];
    icon?: string;
    keepAlive?: boolean;
  }
}

export {};
