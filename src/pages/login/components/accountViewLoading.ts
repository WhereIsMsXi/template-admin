import { ref } from 'vue';

export function accountViewLoading() {
  const loadingCtrl = ref({
    login: false,
  });
  function openLoginLoading() {
    loadingCtrl.value.login = true;
  }
  function closeLoginLoading() {
    loadingCtrl.value.login = false;
  }

  return { loadingCtrl, openLoginLoading, closeLoginLoading };
}
