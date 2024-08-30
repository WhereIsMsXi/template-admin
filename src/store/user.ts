import { defineStore } from 'pinia';
import { md5 } from 'js-md5';
import type { User, UserInfoState } from './types';
import { session } from '@where_is_mr_li/storage';
import { TOKEN, USER } from './constants';
import type { KeyString } from '@where_is_mr_li/utils/dist/index.d';
import { RoleEnum } from './enums/role';

function mockLogin(): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result: User = {
        name: 'sxt',
        token: 'admin',
        role: RoleEnum.boss,
      };
      resolve(result);
    }, 1000);
  });
}

export const useUserStore = defineStore('user', {
  state: (): UserInfoState => ({
    user: session.get(USER) || {
      name: '',
      token: '',
      role: 0,
    },
    token: session.get(TOKEN) || '',
  }),
  actions: {
    loginByUsername(data: KeyString) {
      const reqForm = { ...data };
      reqForm.password = md5(reqForm.password);

      return new Promise<void>((resolve, reject) => {
        mockLogin()
          .then((res: User) => {
            this.SET_USER(res);
            this.SET_TOKEN(res.token);
            resolve();
          })
          .catch((err: any) => {
            reject(err);
          });
      });
    },
    SET_USER(data: User) {
      this.user = data;
      session.set(USER, data);
    },
    SET_TOKEN(data: string) {
      this.token = data;
      session.set(TOKEN, data);
    },
    CLEAR() {
      this.user = {
        name: '',
        token: '',
        role: RoleEnum.denied,
      };
      this.token = '';
      session.del(USER);
      session.del(TOKEN);
    },
  },
});
