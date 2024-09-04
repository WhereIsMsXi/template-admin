import { storeToRefs } from 'pinia';
import { createI18n } from 'vue-i18n';

import zhCn from 'element-plus/es/locale/lang/zh-cn';
import en from 'element-plus/es/locale/lang/en';
import { useSystemConfigStore } from '@/store/systemConfig';
import pinia from '@/store';

import systemZhCn from '@/i18n/lang/system-zh-cn';
import systemEn from '@/i18n/lang/system-en';
import loginZhCn from '@/i18n/lang/login-zh-cn';
import loginEn from '@/i18n/lang/login-en';

const messages = {
  [zhCn.name]: {
    ...zhCn,
    message: {
      ...systemZhCn,
      ...loginZhCn,
    },
  },
  [en.name]: {
    ...en,
    message: {
      ...systemEn,
      ...loginEn,
    },
  },
};

const stores = useSystemConfigStore(pinia);
const { systemConfig } = storeToRefs(stores);

export const i18n = createI18n({
  silentTranslationWarn: true,
  missingWarn: false,
  silentFallbackWarn: true,
  fallbackWarn: false,
  locale: systemConfig.value.i18n,
  fallbackLocale: zhCn.name,
  messages,
});
