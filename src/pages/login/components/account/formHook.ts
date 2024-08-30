import type { FormInstance, FormRules } from 'element-plus';
import { type Ref, ref } from 'vue';

interface DataForm {
  username: string;
  password: string;
  code: string;
}

export function formHook() {
  const dataFormRef = ref<FormInstance>();

  const dataForm: Ref<DataForm> = ref({
    username: 'admin',
    password: '123456',
    code: '1234',
  });

  const dataFormRules: Ref<FormRules<DataForm>> = ref({
    username: [
      { required: true, message: 'Please input username', trigger: 'blur' },
      {
        min: 3,
        max: 5,
        message: 'Length should be 3 to 5',
        trigger: 'blur',
      },
    ],
    password: [
      { required: true, message: 'Please input password', trigger: 'blur' },
      {
        min: 6,
        max: 12,
        message: 'Length should be 6 to 12',
        trigger: 'blur',
      },
    ],
    code: [
      { required: true, message: 'Please input code', trigger: 'blur' },
      {
        min: 4,
        max: 4,
        message: 'Length should be 4',
        trigger: 'blur',
      },
    ],
  });

  return { dataFormRef, dataForm, dataFormRules };
}
