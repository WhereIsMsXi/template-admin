import type { RoleEnum } from '../enums/role';

export interface UserInfoState {
  user: User;
  token: string;
}
export interface User {
  name: string;
  token: string;
  role: RoleEnum;
}
